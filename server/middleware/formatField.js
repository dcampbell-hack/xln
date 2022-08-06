const ErrorResponse = require('../utils/errorResponse');


exports.formatField = (value) => {
 
 try{

   const formatted = value.split(', ').map(input => input.trim().replace(/ /g, '-')).map(f => f.toLowerCase() );
   return formatted
 
  } catch(err){
 
    return new ErrorResponse(err, 500);
 
  }

}
