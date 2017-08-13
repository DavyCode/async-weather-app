// YAHOO API
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


//Request to yahoo api
request({
    url : `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${encodedString}%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`,
    json : true
}, (err, res, body) => {
    console.log("========================= ***************main waether coontent");
        if(err){
            console.log("Cannot reach server")
        }else if( body.status === "ZERO_RESULTS"){
            console.log('Unable to find address')
        }
    // console.log(JSON.stringify(body.query.results, undefined, 2));
    //   console.log(JSON.stringify(res.statusCode, undefined, 2));

    console.log('Title : '     + body.query.results.channel.title)
    console.log('City : '      + body.query.results.channel.location.city)
    console.log('Longitude : ' +body.query.results.channel.item.long)
    console.log('Latitude : '  +body.query.results.channel.item.lat)
  
    console.log("========================================****************");
    console.log('Title : ' + body);
});


// var callbackFunction = function(data) {
//     var wind = data.query.results.channel.atmosphere;
//     console.log(atmosphere.pressure);
// };

// var callbackFunction1 = function(data) {
//     var wind = data.query.results.channel.wind;
//     console.log(wind.chill);
// };


// // ==============================================================================

//     request ({
//         url : "https://query.yahooapis.com/v1/public/yql?q=select atmosphere from weather.forecast where woeid in (select woeid from geo.places(1) where text='chicago, il')&format=json&callback=callbackFunction",
//         json : true
//     }, (err, res, body) => {
//         console.log("========================= atmosphere");
//         console.log(body);
//         console.log("========================================");
//     });
    
// // ===========================================================================

// request ({
//     url : "https://query.yahooapis.com/v1/public/yql?q=select wind from weather.forecast where woeid in (select woeid from geo.places(1) where text='chicago, il')&format=json&callback=callbackFunction1",
//     json : true
// }, (err, res, body) => {
//     console.log("========================= wind");
//     console.log(body);
//     console.log("========================================");
// });


// // ===============================================================================

// request ({
//     url : "https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
//     json : true
// }, (err, res, body) => {
//     console.log("========================= ***************yahoo random");
//     console.log(body);
//     console.log("========================================****************");
// });














// function initMap() {
//   var uluru = {lat: -25.363, lng: 131.044};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: uluru
//   });

//   var marker = new google.maps.Marker({
//     position: uluru,
//     map: map
//   });
// }


// request({
//     url : "https://maps.googleapis.com/maps/api/js?key=AIzaSyB-G2tlet4CPdjtScuygdwO64cUP2jboEc&callback=initMap",
//     json : true
// }, (err, res, body) => {
//     console.log("========================= ***************main waether coontent");
//     // console.log(JSON.stringify(body.query.results, undefined, 2));
//     console.log('Title : ' + body)
//     console.log("========================================****************");
// });


