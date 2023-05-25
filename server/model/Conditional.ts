import mongoose from 'mongoose';
const { Schema, Types } = mongoose;
import ErrorResponse from "../utils/errorResponse.js";
import { IConditional } from '../type/model.ts';

const ConditionalSchema = new Schema<IConditional>({
  active: {
    type: Boolean,
    default: true,
  },
  private_asset: {
    type: Boolean,
    default: false,
    required: true,
  },
  shares_reached_max_capacity: {
    type: Boolean,
    default: false,
  },
  sold_shares: {
    type: Boolean,
    default: false,
  },
  asset: {
    type: 'ObjectId',
    ref: "Asset",
    required: true,
  },
  user: {
    type: 'ObjectId',
    ref: "User",
    required: true,
  },
});

export default mongoose.model("Conditional", ConditionalSchema);
