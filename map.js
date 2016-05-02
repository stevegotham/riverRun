// api key: AIzaSyAdTx1LAYMD-DOk2W2_L3CuT1wld9m11bA
function initMap() {
  var mapDiv = document.getElementById('map')
  var map = new google.maps.Map(mapDiv, {
    center: {lat:39.736011, lng:-105.019184},
    zoom: 7,
  });
  var marker = new google.maps.Marker({
    position: {
    lat:39.73, lng:-105.019
    },
    map: map
  });
}
