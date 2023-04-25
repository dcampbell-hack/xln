import mongoose from 'mongoose';
const { Schema } = mongoose;
import ErrorResponse from '../utils/errorResponse.js';

const ConditionalSchema = new Schema({ 
    active_asset: {
        type: Boolean,
        default: true
    },
    private_asset: {
        type: Boolean,
        default: false,
        required: true
    },
shares_reached_max_capacity: {
    type: Boolean,
    default: false
},
sold_shares: {
    type: Boolean,
    default: false
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

});


export default mongoose.model('Conditional', ConditionalSchema);