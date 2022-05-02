const mongoose = require('mongoose');
const slugify = require('slugify');
const axios = require('axios')
const geocoder = require('../utils/geocoder');
const ErrorResponse = require('../utils/errorResponse');
const Category = require('../model/Category')
const Conditional = require('../model/Conditional')
const { checkModelForDuplicate } = require('../middleware/checkModelForDuplicate');
const { formatField  } = require('../middleware/formatField');
const { getIpAdress, getLocationFromIpAddress } = require('../middleware/ipAddress');

const AssetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add name'],
        unique: [true, 'Name of asset must be unique'],
        trim: true,
        maxlength:[ 50, 'Name can not be more than 50 characters']
    },
    slug: {
        type: String,
        unique: [true, 'Slug must be unique']
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [ 2500, 'Description has reached the max characters']
    },
    website: {
        type: String,
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 'Please use a valid URL with HTTP or HTTPS'
        ]
    },
    address: {
        type: String
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String
    },
    assetType: {
        type: [String],
        required: true,
        enum: [
            'Text',
            'Image',
            'Music',
            'Video',
            'File',
            'Enterprise',
            'Object'
        ]
    },
    category: {
        type: String,
        required: [ true, 'Please give asset a category']
    },
    averageRating: {
        type: Number
    },
    averagePrice: {
        type: Number,
    },
    stock: {
        type: Number,
        required: [true, 'Divide asset into shares']
    },
    flow: {
      type: Number,
      default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
     },
     minReward: {
        type: Number,
        required: [true, 'Asset must have minimum reward to admin']
    },
     minBenefit: {
       type: Number,
       required: [true, 'Asset must have minimum benefit to shareholders']
     },
    conditional:  {
         type: mongoose.Schema.ObjectId, 
         ref: 'Conditional'
        },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },  
    share: {
        type: mongoose.Schema.ObjectId,
        ref: 'Share',
    }, 
    review: {
        type: mongoose.Schema.ObjectId,
        ref: 'Review',
    }, 
    comment: {
        type: mongoose.Schema.ObjectId,
        ref: 'Comment',
    }, 
    cover: {
        type: String,
        default: 'no-photo.jpg',
        required: false
    },
    marketcap: {
        type: Number
    },
    error: {
        type: String
    }
}, {
    toJSON: { virtuals: true},
    toObject: { virtuals: true}
})




// Create Asset slug from name
AssetSchema.pre('save', function(next){
    this.slug = slugify(this.name, { lower: true})
    next()
});

//Make sure there are no duplicate categories
AssetSchema.pre('save', async function(next){
    let string = '';
    await checkModelForDuplicate(Category, this.category)
    await formatField(this.category).forEach(cat => string += `${cat}, ` );
    this.category = string.toLowerCase();
    next();
});


// Geocode & create location field
AssetSchema.pre('save', async function(next){
    const loc = await geocoder.geocode(this.address);
    this.location = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
        formattedAddress: loc[0].formattedAddress,
        street: loc[0].streetName,
        city: loc[0].city,
        state: loc[0].state,
        zipcode: loc[0].zipcode,
        country: loc[0].countryCode,
    }

    // Do not save address in Database
    this.address = undefined; 
    next();
});

//Update asset with website
AssetSchema.pre('save', async function(next){

    const user = await this.model('User').findOne({ _id: this.user })

    this.website = `http://medallion.tech/${user.username}/${this.slug}`;

    next();
})

// Cascade delete course when a bootcamp is deleted
AssetSchema.pre('remove', async function(next){

    await this.model('Conditional').deleteMany({ asset: this._id });
    await this.model('Share').deleteMany({ asset: this._id });
    await this.model('Review').deleteMany({ asset: this._id });
    await this.model('Comment').deleteMany({ asset: this._id });
    next();
})

//Update User ownership of Asset & Add assetId to user 
AssetSchema.post('save', async function(next){

    try {

        const assets = await this.model('Asset').find({ user: this.user })

        const assetCount = assets.length;

        await this.model('User').findOneAndUpdate({ _id: this.user }, { assetsOwned: assetCount }, {
            new: true,
            runValidators: true
        });


    } catch(err){
        console.error(err)
    }

});

//Create Conditional when Asset is created
AssetSchema.post('save', async function(next){

await Conditional.create({
    asset: this._id,
    user: this.user
})

})


//Reverse populate with virtuals
AssetSchema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'asset',
    justOne: false
})

//Reverse populate with virtuals
AssetSchema.virtual('shares', {
    ref: 'Share',
    localField: '_id',
    foreignField: 'asset',
    justOne: false
});

//Reverse populate with virtuals
AssetSchema.virtual('offers', {
    ref: 'Offer',
    localField: '_id',
    foreignField: 'asset',
    justOne: false
});

//Reverse populate with virtuals
AssetSchema.virtual('comments', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'asset',
    justOne: false
});

//Reverse populate with virtuals
AssetSchema.virtual('conditionals', {
    ref: 'Conditional',
    localField: '_id',
    foreignField: 'asset',
    justOne: false
});

module.exports = mongoose.model('Asset', AssetSchema);