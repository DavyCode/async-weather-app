
const request = require("request")
yargs = require("yargs");

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

console.log(argv)

var encodedString = encodeURIComponent(argv.address);
console.log(encodedString);

request({
// url : `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${encodedString}%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`,
url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedString}&key=AIzaSyB-G2tlet4CPdjtScuygdwO64cUP2jboEc`,
json : true
}, (err, res, body) => {
console.log("========================= ***************main waether coontent");
      if(err){
          console.log("Cannot reach server")
      }else if( body.status === "ZERO_RESULTS"){
          console.log('Unable to find address')
      }
    // console.log(JSON.stringify(body.results, undefined, 2));
    //   console.log(JSON.stringify(res.statusCode, undefined, 2));

console.log('City: ' + body.results[0].formatted_address)
console.log('Longitude : '+body.results[0].geometry.location.lng)
console.log('Longitude : '+body.results[0].geometry.location.lat)


console.log("========================================****************");

});





