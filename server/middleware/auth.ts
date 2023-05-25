// // ---@ts-nocheck--

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { IUserAuthRequest } from '../type/definition.ts';
import { IRole } from '../type/model.ts';
import asyncHandler from './async.ts';
import ErrorResponse from '../utils/errorResponse.js';
import { decodeBase64 } from '../utils/encode.ts'
import User from '../model/User.js';

interface JWTLocal { 
    id: string, 
    iat: number, 
    exp: number }

export const protect = asyncHandler(async (req: IUserAuthRequest, res: Response, next: NextFunction) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    } else if(req.cookies.token){
        token = req.cookies.token;
    }

    if(!token){
        return next(new ErrorResponse('Not authorized to access this route', 401))
    } 

    try{
     const { id } = jwt.verify(token, `${process.env.JWT_SECRET}`) as JWTLocal;
    req.user = await User.findById(id)
     next()
    } catch(err){
        return next(new ErrorResponse('Please log in.', 401))
    }
})

// Grant access to specific roles
export const authorize = (...roles: string[] ) => {
    return (req: IUserAuthRequest, res: Response, next: NextFunction) => {
        if(!roles.includes(req.user.role!)){
           return next(new ErrorResponse(`User role ${req.user.role} is not authorized to access this route.`, 403))
        }
        next();
    }
}
