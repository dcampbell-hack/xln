import { Request, Response, NextFunction } from "express"
import { Types} from 'mongoose';

export type IRole = 'user' |'publisher' | 'admin';

export interface IUser {
    id: string,
    firstname: string,
    lastname: string,
    username: string,
    bio: string,
    email: string,
    media: string,
    role?: string,
    password: string,
    resetPasswordToken: string,
    resetPasswordDate: Date,
    createdAt: Date,
    followers: Array<IUser>,
    following: Array<IUser>,
    website: string,
    twitter: string,
    instagram: string,
    facebook: string,
    avatar: string,
    cover: string,
    assetPrice: number,
    stockLimit: number,
    wallet: string,
    assetsOwned: string,
    sharesOwned: number,
    totalBalance: number,
    resetPasswordExpire: number
  }
  
  export interface IAsset{
    name: string,
    slug: string,
    description: string,
    website: string,
    pending: boolean,
    minted: boolean,
    assetType: string[],
    mimeType: string,
    template: string[],
    category: string,
    averageRating: number,
    averagePrice: number,
    stock: number,
    flow: number,
    createdAt: Date,
     price: number,
     fee: number,
     marketcap: number,
    conditional:  Types.ObjectId,
    user: Types.ObjectId,  
    share: Types.ObjectId, 
    review: Types.ObjectId, 
    comment: Types.ObjectId, 
    cover: Types.ObjectId,
    error: string
  }

  export interface IAIArt{
    model: string,
    url: string,
    prompt: string,
    size: string,
    numOfImg: number,
    asset:  Types.ObjectId,
    user: Types.ObjectId,
  }

  export interface IAudio{
    audioName: string,
    composer: string,
    lyrics: string,
    producer: string,
    audioFile: string,
    filePath: string,
    encoding: string,
    size: number,
    mimetype: string,
    md5: string,
    asset:  Types.ObjectId,
    user: Types.ObjectId
  }

  export interface IBlog {
    asset:  Types.ObjectId,
    user: Types.ObjectId
  }

  export interface IChat {
    model: string,
    objectId: string,
    interfaces: string,
    prompt: string,
    assistant: string,
    max_tokens: number,
    temperature: number,
    top_p: number,
    frequency_penalty: number,
    presence_penalty: number,
    stop: string,
    asset:  Types.ObjectId,
    user: Types.ObjectId
  }

  export interface IComment {
    text: string,
     createdAt: Date,
    share: Types.ObjectId,
    review: Types.ObjectId,
    offer: Types.ObjectId,
    asset:  Types.ObjectId,
    user: Types.ObjectId
  }

  export interface IImage {
    image: string,
    description: string,
    filePath: string,
    encoding: string,
    size: number,
    mimetype: string,
    md5: string,
    asset:  Types.ObjectId,
    user: Types.ObjectId
  }

  export interface ILink {
    asset:  Types.ObjectId,
    user: Types.ObjectId
  }

  export interface IDocument {
    filePath: string,
    encoding: string,
    size: number,
    mimetype: string,
    md5: string,
    asset:  Types.ObjectId,
    user: Types.ObjectId
  }

  export interface ILive {
    asset:  Types.ObjectId,
    user: Types.ObjectId
  }

  export interface IMetaverse {
    asset:  Types.ObjectId,
    user: Types.ObjectId
  }

  export interface IOffer {
    price: number,
    resell: number,
    secondHand: boolean,
    accepted: boolean,
    responded: boolean,
    seller: string,
    assetOwner: string,
    createdAt: Date,
    share: Types.ObjectId,
    asset:  Types.ObjectId,
    user: Types.ObjectId
  }

  export interface IRealEstate {
    asset:  Types.ObjectId,
    user: Types.ObjectId
  }

  export interface IReview {
    title: string,
    text: string,
    rating: number,
    createdAt: Date,
    comment: Types.ObjectId,
    asset:  Types.ObjectId,
    user: Types.ObjectId
  }

  export interface IShare {
    shareNumber: number,
    name: string,
    description: string,
    price: number,
    resell: number,
    minCost: number,
    to_user: string,
    authorization: string,
    createdAt: Date,
  comment: Types.ObjectId,
    asset:  Types.ObjectId,
    user: Types.ObjectId
  }

  export interface IText {
    content: string,
    asset:  Types.ObjectId,
    user: Types.ObjectId
  }

  export interface ITransaction {
    price: number,
     seller: string,
    share: Types.ObjectId,
      createdAt: Date,
    asset:  Types.ObjectId,
    user: Types.ObjectId
  }

  export interface IVideo {
    category: string,
    language: string,
    title: string,
    detail: string,
    filePath: string,
    encoding: string,
    size: number,
    mimetype: string,
    md5: string,
    asset:  Types.ObjectId,
    user: Types.ObjectId
  }
  
  export interface IWallet{
    balance: number,
    active: boolean,
    createdAt: Date
    user: Types.ObjectId,
  }
  
  export interface ICategory{
    name: string
  }
  
  export interface IConditional {
    private_asset: boolean,
    shares_reached_max_capacity: boolean,
    sold_shares: boolean,
    active: boolean,
    asset: Types.ObjectId,
    user: Types.ObjectId,
  }

