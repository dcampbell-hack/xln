import mongoose from 'mongoose';
const { Schema } = mongoose;

const AIArtSchema = new Schema({ 
model: {
    type: String,
    enum: [
        "andite/anything-v4.0",
        "andite/hiten-diffusion",
        "andite/mignon-diffusion",
        "andite/mikapikazo-diffusion",
        "andite/mashuu-diffusion",
        "andite/pastel-mix",
        "andite/piromizu-diffusion",
        "darkstorm2150/Protogen_Eclipse_Official_Release",
        "darkstorm2150/Protogen_Infinity_Official_Release",
        "darkstorm2150/Protogen_Nova_Official_Release",
        "darkstorm2150/Protogen_x3.4_Official_Release",
        "darkstorm2150/Protogen_x5.3_Official_Release",
        "darkstorm2150/Protogen_x5.8_Official_Release",
        "eimiss/EimisAnimeDiffusion_1.0v", 
        "hakurei/artstation-diffusion",
        "hakurei/waifu-diffusion", 
        "lambdalabs/dreambooth-avatar",
        "lambdalabs/sd-pokemon-diffusers",
        "lambdalabs/text-to-naruto",
        "Linaqruf/anything-v3.0",
        "nitrosocke/Arcane-Diffusion",
        "nitrosocke/archer-diffusion", 
        "nitrosocke/classic-anim-diffusion", 
        "nitrosocke/elden-ring-diffusion", 
        "nitrosocke/Ghibli-Diffusion",
        "nitrosocke/Nitro-Diffusion",
        "nitrosocke/redshift-diffusion", 
        "nitrosocke/spider-verse-diffusion",
        "prompthero/openjourney",
        "prompthero/openjourney-v4",
        "prompthero/openjourney-lora",
        "prompthero/funko-diffusion",
        "prompthero/linkedin-diffusion",
        "prompthero/poolsuite-diffusion",
        "midjourney", 
        "openai/dalle-2",
        "stabilityai/stable-diffusion-2-base", 
        "stabilityai/stable-diffusion-2-1",
        "wavymulder/Analog-Diffusion",
        "wavymulder/lomo-diffusion",
        "wavymulder/modelshoot",
        "wavymulder/portraitplus",
        "wavymulder/timeless-diffusion",
        "wavymulder/wavyfusion"
    ],
    required: [ true, "Include the AI model being used"]
},
url: {
    type: String,
    required: [ true, 'Url to generated image is required' ]
},
prompt: {
    type: String,
    required: [ true, 'Text prompt is required']
},
size: {
    type: String,
    enum: [
       '1024x1024', '512x512', '256x256'
    ],
    required: [ true, "The size of this image is required"]
},
numOfImg: {
    type: Number,
    enum: [
        1, 4, 8
     ],
    required: [ true, "Include the amount of images to be generated" ]
},
asset:  {
    type: Schema.ObjectId,
    ref: 'Asset',
    required: true
},
user: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
}

}, {
    toJSON: { getters: true, virtuals: true },
    toObject: { virtuals: true }
});


//Reverse populate with virtuals
AIArtSchema.virtual('users', {
    ref: 'User',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})


// //Reverse populate with virtuals
AIArtSchema.virtual('assets', {
    ref: 'Asset',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})

export default mongoose.model('AIArt', AIArtSchema);