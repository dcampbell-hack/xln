import mongoose from 'mongoose';
const { Schema } = mongoose;

// Pkg
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

// Types
import { IUser } from "../type/model.ts";


const UserSchema = new Schema<IUser>(
  {
    firstname: {
      type: String,
      required: [false, "User must have a firstname"],
    },
    lastname: {
      type: String,
      required: [false, "User must have a lastname"],
    },
    username: {
      type: String,
      unique: [true, "Username is taken. Please try another name."],
      required: [false, "User must have a username"],
    },
    bio: {
      type: String,
    },
    email: {
      type: String,
      required: [false, "Please add email"],
      unique: true,
      match: [/^\w+([\.-]?\w+)*(\@\w+\.\w+)/, " Please add a valid email"],
    },
    media: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["user", "admin", "system", "publisher"],
      default: "user",
    },
    password: {
      type: String,
      required: [true, "User must have a password"],
      minlength: 10,
      select: false,
    },
    resetPasswordToken: String,
    resetPasswordDate: Date,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    website: {
      type: String,
      required: false,
    },
    twitter: {
      type: String,
      required: false,
    },
    instagram: {
      type: String,
      required: false,
    },
    facebook: {
      type: String,
      required: false,
    },
    avatar: {
      type: String,
      default: "",
      required: false,
    },
    cover: {
      type: String,
      default: "",
      required: false,
    },
    assetPrice: {
      type: Number,
      required: false,
    },
    stockLimit: {
      type: Number,
      required: false,
    },
    assetsOwned: {
      type: Number,
    },
    sharesOwned: {
      type: Number,
    },
    resetPasswordExpire : {
      type: Number,
    },
  },
  {
    toJSON: { getters: true, virtuals: true },
    toObject: { virtuals: true },
  }
);

//Encrypt password using bcrypt
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//Make sure there are no duplicate categories and format
UserSchema.pre("save", async function (next) {
  let string = "";
  // await formatField(this.username).forEach((usr) => (string += `${usr}`));
  this.username = string.toLowerCase();
  next();
});

//If user does not have a wallet then role = user
UserSchema.pre("save", async function (next) {
  const wallet = await this.model("Wallet").findOne({ where: { user: this._id } });

  if (!wallet) {
    if (this.role === "system") {
      await this.model("User").findByIdAndUpdate(this._id, { role: "system" });
    }
  }

  next();
});

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, `${process.env.JWT_SECRET}`, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

//Match user entered password to hashed password
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//Generate and hash password token
UserSchema.methods.getResetPasswordToken = async function () {
  //Generate Token
  const resetToken = crypto.randomBytes(20).toString("hex");
  //Hash token and set to resetPasswordToken field
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  //Set expire
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

// Cascade delete course when a bootcamp is deleted
UserSchema.pre("remove", async function (next) {
  console.log(`Assets will also be deleted ${this._id} `);
  await this.model("Asset").deleteMany({ user: this._id });
  await this.model("Wallet").deleteMany({ user: this._id });
  await this.model("Share").deleteMany({ user: this._id });
  await this.model("Review").deleteMany({ user: this._id });
  await this.model("Comment").deleteMany({ user: this._id });
  next();
});


// //Reverse populate with virtuals
UserSchema.virtual("assets", {
  ref: "Asset",
  localField: "_id",
  foreignField: "user",
  justOne: false,
});

// //Reverse populate with virtuals
UserSchema.virtual("shares", {
  ref: "Share",
  localField: "_id",
  foreignField: "user",
  justOne: false,
});

export default mongoose.model("User", UserSchema);
