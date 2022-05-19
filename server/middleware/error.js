const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {

    try{

    let error = { ...err };

    error.message = err.message;
    

    //Mongoose ObjectId 
    if(err.name === 'CastError'){
        const message = `Resource not found id of ${err.value}`;
        error = res.status(404).json(message)
    }

    //Mongoose duplicate 
    if(err.code === 'E11000' ){
        const message = 'Duplicate field entered';
        error =  res.status(400).json(message)

        res.status(err.statusCode).json({ success: false, error: error.message })
    }

    //Mongoose validation error 
    if(err.name = 'ValidationError'){
        const message = Object.values(err.errors).map(val => val.message)
        error =  res.status(400).json(message)


    res.status(err.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    })

}

} catch(err){
    res.status(500).json(`Error: ${err}`)
}
}

module.exports = errorHandler;