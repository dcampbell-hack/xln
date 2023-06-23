import { Request, Response, NextFunction } from 'express';
import { IError } from '../type/definition.ts';
import ErrorResponse from '../utils/errorResponse.ts';

const errorHandler = (err: IError, req: Request, res: Response, next: NextFunction ) => {

    try{

    let error = { ...err };

    error.message = err.message;
    

    //Mongoose ObjectId 
    if(error.name === 'CastError'){
        const message = `Resource not found id of ${err.value}`;
        error = new ErrorResponse(message, 404)
    }

    //Mongoose duplicate 
    if(error.code === 'E11000' ){
        const message = 'Duplicate field entered';
        error = new ErrorResponse(message, 400);

        res.status(error.statusCode).json({ success: false, error: error.message })
    }

    //Mongoose validation error 
    if(error.name = 'ValidationError'){
        const message = Object.values(err.errors!).map(val => val.message)[0]
        error = new ErrorResponse(message, 400)


    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    })

}

} catch(error){
    console.log(`Error: ${error}`)
    res.status(500).json({ success: false, error})
}
}

export default errorHandler;