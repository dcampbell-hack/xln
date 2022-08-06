const request = require('request');
const localIpV4Address = require("local-ipv4-address");

const URL = "https://www.ipapi.co";


exports.getLocationFromIpAddress = function(){

   localIpV4Address().then(function(address){
    console.log("My IP address is " + address);

    request({
     url: `${URL}/${address}/json`,
     json: true
   }, (err, response, body) => {
     if(!err && response.statusCode === 200){
       console.log(body)
     }
   })

  });

}
