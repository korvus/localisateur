function initialisation(){

	origin = new google.maps.LatLng(0,0);

	var optionsCarte = {
		zoom: 5,
		center: origin,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	maCarte = new google.maps.Map(document.getElementById("map"), optionsCarte);
	
	marker = new google.maps.Marker({
		map:maCarte,
		draggable:true,
		position: origin
	});
	
	google.maps.event.addListener(marker,'dragend',afficherUneInfobulle);
}

function afficherUneInfobulle(){

	var posX = marker.position.lat();
	var posY = marker.position.lng();
	var aAfficher = "Latitude : "+posX+'<br />Longtitude : '+posY+"<br />new google.maps.LatLng("+posX+","+posY+");";

	var infowindow = new google.maps.InfoWindow({
		content: aAfficher
	});

	infowindow.open(maCarte,marker);
}

window.onload = initialisation;
