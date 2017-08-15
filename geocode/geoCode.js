// GOOGLE GEOCODING API
const request = require("request")


var googleGeoAddress = (address, callback) => {
  //encode user input
  var encodedString = encodeURIComponent(address);
        //Request to google geocoding api
        request({
            url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedString}&key=AIzaSyB-G2tlet4CPdjtScuygdwO64cUP2jboEc`,
            json : true
        }, (err, res, body) => {
        console.log("********* Google! Weather *********");
            if(err){
                callback("Cannot reach server!!!!!!!!!!!!!")
            }else if( body.status === "ZERO_RESULTS"){
                callback('Unable to find address!!!!!!!!!!!!!')
            }else if (body.status === 'OK'){
                callback(undefined, {
                     Title: body.results[0].formatted_address,
                     City : body.results[0].formatted_address,
                     Longitude : body.results[0].geometry.location.lng,
                     Longitude : body.results[0].geometry.location.lat

                })
                // console.log(`Title : Google! Weather - ${body.results[0].formatted_address} `)
                // console.log('City: ' + body.results[0].formatted_address)
                // console.log('Longitude : '+body.results[0].geometry.location.lng)
                // console.log('Longitude : '+body.results[0].geometry.location.lat)
            }
            // console.log(JSON.stringify(body.results, undefined, 2));
            //   console.log(JSON.stringify(res.statusCode, undefined, 2));
        console.log("*******************************");
        });
}
module.exports.googleGeoAddress = googleGeoAddress;





