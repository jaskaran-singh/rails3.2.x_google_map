$(document).on("mouseover","#demo",function(event){
	event.preventDefault();
	
})
var your_city = new google.maps.LatLng(119.7178634, -155.0971521);
var your_place = new google.maps.LatLng(129.7178634, -150.0971521 );
var marker;
var map;
function initialize() {
var mapOptions = {
zoom: 15 ,
mapTypeId: google.maps.MapTypeId.ROADMAP,
center: "delhi"
};
map = new google.maps.Map(document.getElementById("map_canvas"),
mapOptions);
marker = new google.maps.Marker({
map:map,
draggable:true,
animation: google.maps.Animation.DROP,
position: "delhi"
});
google.maps.event.addListener(marker, 'click', toggleBounce);
}
function toggleBounce() {
if (marker.getAnimation() != null) {
marker.setAnimation(null);
} else {
marker.setAnimation(google.maps.Animation.BOUNCE);
}
}