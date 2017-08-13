const yargs = require("yargs");
const geocodeaddress = require('./geocode/yahoogeocode.js')




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

geocodeaddress.geoAddress(argv.address);
