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

	var aAfficher = "Latitude : "+marker.position.Za+'<br />Longtitude : '+marker.position.Ya+"<br />new google.maps.LatLng("+marker.position.Za+","+marker.position.Ya+");";

	var infowindow = new google.maps.InfoWindow({
		content: aAfficher
	});

	infowindow.open(maCarte,marker);
}

window.onload = initialisation;