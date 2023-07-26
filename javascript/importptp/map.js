var importptpmap, bounds;

function initMap() {
  var options = { center: { lat: 28.7041, lng: 77.1025 }, zoom: 2 };
  //   New map for import ptp page
  importptpmap = new google.maps.Map(
    document.getElementById("importptpmap"),
    options
  );

  bounds = new google.maps.LatLngBounds();
}
