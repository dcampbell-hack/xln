import fs from "fs";

const sendTokenResponse = (user, statusCode, res, next) => {
    //Create Token 
    const token = user.getSignedJwtToken();
    const options = {
        expires: new Date(Date.now() + 30 * 60 * 1000),
        httpOnly: true,
        secure: false
    }

   if(process.env.NODE_ENV === 'production'){
       options.secure = true;
   }

   let data = JSON.stringify(token);
   fs.writeFileSync('server/config/authToken.txt', JSON.parse(data))

   res.status(statusCode).cookie('token', token, options).json({ success: true, token })

}

export default sendTokenResponse;