import { Request, Response, NextFunction } from 'express';
import { IError } from '../type/definition.ts';
import ErrorResponse from '../utils/errorResponse.ts';

const errorHandler = (err: IError, req: Request, res: Response, next: NextFunction ) => {

    try{

    let error = { ...err };

    error.message = err.message;
    

    //Mongoose ObjectId 
    if(err.name === 'CastError'){
        const message = `Resource not found id of ${err.value}`;
        error = new ErrorResponse(message, 404)
    }

    //Mongoose duplicate 
    if(err.code === 'E11000' ){
        const message = 'Duplicate field entered';
        error = new ErrorResponse(message, 400);

        res.status(err.statusCode).json({ success: false, error: error.message })
    }

    //Mongoose validation error 
    if(err.name = 'ValidationError'){
        const message = Object.values(err.errors!).map(val => val.message)[0]
        error = new ErrorResponse(message, 400)


    res.status(err.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    })

}

} catch(err){
    console.log(`Error: ${err}`)
}
}

export default errorHandler;