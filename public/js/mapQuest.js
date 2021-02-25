function initMap() {
  // add your code here
  L.mapquest.key = "2gsXDvnndg0Ghnj4GTndYwuql0moTosc";

  // 'map' refers to a <div> element with the ID map
  var map = L.mapquest.map("map", {
    center: [32.8797205, -117.2361952],
    layers: L.mapquest.tileLayer("map"),
    zoom: 15,
  });

  L.marker([32.8785203, -117.235886], {
    icon: L.mapquest.icons.marker(),
    draggable: false,
  })
    .bindPopup("SSC Multipurpose Room")
    .addTo(map);
}
