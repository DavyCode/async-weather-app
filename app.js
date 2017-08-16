// const yargs = require("yargs");
// const geocodeaddress = require('./geocode/yahoogeocode.js')
// const googleGeoCodeaddress = require('./geocode/geoCode.js')



// // Configure Yargs 
// const argv =  yargs
// .options({
//  a: {
//      demand: true,
//      alias : "address",
//      describe : "address to fetch weather for",
//      string : true
//  }
// })
// .help()
// .alias("help", "h")
// .argv

// geocodeaddress.geoAddress(argv.address);

// googleGeoCodeaddress.googleGeoAddress(argv.address, (errMessage, results) => {
//     if(errMessage){
//          console.log(errMessage);
//     }else{
//          console.log(JSON.stringify(results, undefined, 2));
//     }
// });





const request = require("request");


request({
    url : 'https://api.darksky.net/forecast/fe4b4b252ccc283b2902c5c497aaea7a/8.9750731,7.376306400000001',
    // url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedString}&key=AIzaSyB-G2tlet4CPdjtScuygdwO64cUP2jboEc`,
    json : true
}, (err, res, body) => {
console.log("********* Dark sky dot net *********");
    if(err){
        console.log("Cannot reach server!!!!!!!!!!!!!")
    }
    // }else if( body.status === "ZERO_RESULTS"){
    //     console.log('Unable to find address!!!!!!!!!!!!!')
    // }else if (body.status === 'OK'){
        // callback(undefined, {
            console.log('Title:' + body)

    
    // console.log(JSON.stringify(body.results, undefined, 2));
    //   console.log(JSON.stringify(res.statusCode, undefined, 2));
console.log("*******************************************");
});
