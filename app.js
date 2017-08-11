const request = require("request");


request ({
    url : "https://maps.googleapis.com/maps/api/js?key=AIzaSyB-G2tlet4CPdjtScuygdwO64cUP2jboEc&callback=initMap",
    json : true
}, (err, res, body) => {
    console.log(body);
});


function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

