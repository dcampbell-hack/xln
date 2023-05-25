import { Request, Response, NextFunction } from "express"
import { String, Union } from 'ts-toolbelt'; 
import { Schema, Types, Model } from "mongoose";
import { IncomingHttpHeaders } from 'http';
import { IUser } from "./model.ts"


type Error = {
  message: string,
  statusCode: number
}

export interface IError{
  name?: string,
  code?: string,
  message?: string,
  statusCode: number
  value?: string,
  errors?: Error[]
}

export interface ReqParams {
  [key: string]: string | undefined
}

export interface ReqBody{
  [key: string]: string | undefined
}

export interface ResBody {
  [key: string]: string | undefined
}

export interface ReqQuery {
  id: typeof Schema.Types.ObjectId,
  select: string, 
  sort: string, 
  page: string , 
  limit: string 
}

export interface RequestWithArgs extends Request {
  params: {
    [key: string]: string 
  },
   query: {
    [key: string]: string 
   },
    body: { 
        [key: string]: string 
    }
}

export interface IUserAuthRequest extends RequestWithArgs {
    user: IUser,
    id: string
  }

  export interface AdvanceResults extends Response{
    headers: IncomingHttpHeaders & { authorization: string },
    query: { 
      [key: string]: String | undefined | string | string[] 
  },
    advancedResults: {
        [key: string]: string | boolean | undefined
    }
  }

  export interface JwtTokenID {
    id: string
  }
