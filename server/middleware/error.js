import ErrorResponse from '../utils/errorResponse.js';

const errorHandler = (err, req, res, next) => {

    try{

    let error = { ...err };

    error.message = err.message;
    
    console.log('Error Mongo --------------------', err);

    //Mongoose ObjectId 
    if(err.name === 'CastError'){
        const message = `Resource not found id of ${err.value}`;
        error = new Response(message, 404)
    }

    //Mongoose duplicate 
    if(err.code === 'E11000' ){
        const message = 'Duplicate field entered';
        error = new ErrorResponse(message, 400);

        res.status(err.statusCode).json({ success: false, error: error.message })
    }

    //Mongoose validation error 
    if(err.name = 'ValidationError'){
        const message = Object.values(err.errors).map(val => val.message)
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