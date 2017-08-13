// GOOGLE GEOCODING API
const request = require("request")
yargs = require("yargs");


// Configure Yargs 
const argv =  yargs
.options({
a: {
    demand: true,
    alias : "address",
    describe : "address to fetch weather for",
    string : true
}
})
.help()
.alias("help", "h")
.argv



//encode user input
var encodedString = encodeURIComponent(argv.address);


//Request to google geocoding api
request({
    url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedString}&key=AIzaSyB-G2tlet4CPdjtScuygdwO64cUP2jboEc`,
    json : true
}, (err, res, body) => {
console.log("========================= ***************main waether coontent");
      if(err){
          console.log("Cannot reach server!!!!!!!!!!!!!")
      }else if( body.status === "ZERO_RESULTS"){
          console.log(body.status)
          console.log('Unable to find address!!!!!!!!!!!!!')
      }
    // console.log(JSON.stringify(body.results, undefined, 2));
    //   console.log(JSON.stringify(res.statusCode, undefined, 2));

console.log('City: ' + body.results[0].formatted_address)
console.log('Longitude : '+body.results[0].geometry.location.lng)
console.log('Longitude : '+body.results[0].geometry.location.lat)


console.log("========================================****************");

});





