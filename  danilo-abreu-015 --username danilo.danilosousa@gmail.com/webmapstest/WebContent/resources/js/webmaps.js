var geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
var apiKey = '';
var geocodeUrlSuf = '&sensor=TRUE&key=' + apiKey;
var url = '';

var image = new google.maps.MarkerImage(
		'resources/img/map-marker-3-64x64.png',
		new google.maps.Size(64, 64),
		new google.maps.Point(0, 0),
		new google.maps.Point(0, 64));

var shape = {
		coord : [ 1, 1, 1, 64, 64, 64, 64, 1 ],
		type : 'poly'
	};

var geocoder;

var map;
var markerCluster;
var markers = [];
var latlngbounds;

$("#txt_address").keypress(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		$('#search_result').html('...');
		var localTyped = $(this).val();
		var divContent = '';
		geocoder = new google.maps.Geocoder();
		geocoder.geocode({'address':localTyped}, function(results, status){
//		TODO:	if(status == google.maps.GeocoderStatus.OK){}
//		TODO:	if(status == google.maps.GeocoderStatus.ZERO_RESULTS){}
			$.each(results, function(index, value){
				divContent += '<address><small>'+ value.formatted_address + '';
				divContent += '<p>latitude: ' + value.geometry.location.lat() + '';
				divContent += '<br/>longitude: ' + value.geometry.location.lng() + '</p> </small></address>';
				
				addMarker(infoWindowContent(localTyped, value.formatted_address), value.geometry.location);
			});
			$('#search_result').html(divContent);
		});
	}
});

function initialize() {
	markers = [];
	var mapOptions = {
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map_canvas"),
			mapOptions);
	latlngbounds = new google.maps.LatLngBounds();

	$.ajax({
		url : 'resources/data/localInfo.json',
		type : 'GET',
		dataType : 'json',
		mimeType : 'text/plain; charset=ISO-8859-1',
		success : function(data) {
			$.each(data.locations,function(index, value) {
				
				var contentString = infoWindowContent(value.description, value.address_short);
				
				var infowindow = new google.maps.InfoWindow({
					content : contentString
				});
				var marker = new google.maps.Marker({
					position : new google.maps.LatLng(value.latlng.latitude, value.latlng.longitude),
					map : map,
					icon : image,
					shape : shape,
					title : value.description,
					draggable : false,
					animation : google.maps.Animation.DROP,
				});
				google.maps.event.addListener(marker, 'click', function() {
					infowindow.open(map, marker);
				});
				
				markers.push(marker);
				latlngbounds.extend(marker.position);
			});
			markerCluster = new MarkerClusterer(map, markers);
			map.fitBounds(latlngbounds);
		},
		error : function(data, status, error) {
			alert('Error:' + status + ' ' + error);
		}
	});

}

function addMarker(infoContent, location){
	var infowindow = new google.maps.InfoWindow({
		content : infoContent
	});
	var marker = new google.maps.Marker({
		 position: location,
		 map : map,
		 icon : image,
		 shape : shape,
		 title : $("#txt_address").val(),
		 draggable : false,
		 animation : google.maps.Animation.DROP,
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker);
	});
	markers.push(marker);
	latlngbounds.extend(marker.position);
	markerCluster.addMarker(marker);
	map.setZoom(5);
	map.fitBounds(latlngbounds);
}

function infoWindowContent(description, address){
	var contentString = '<div id="content"><div id="siteNotice"></div>'
	+ '<h3 id="firstHeading" class="firstHeading">'
	+ description
	+ '</h3>'
	+ '<div id="bodyContent">'
	+ '<p>' + address + '</p>' + '</div>' + '</div>';
	
	return contentString;
}
