#Obtenez les latitudes et les longtitudes.

Simple démonstration qui permet d'obtenir les coordonées latitudinales et longtitudinales en déplacant un marqueur sur une carte google Map.

####Comment ça marche :

* Appel de l'API google map V3, et initialisation des événements et fonctions nécessaires.
* Exemple d'utilisation sur [http://simonertel.net/dossiers/ggmapV3.php](http://simonertel.net/dossiers/ggmapV3.php)
* Explication du code sur [http://simonertel.net/blog/initiation-a-google-map-api-v3/](http://simonertel.net/blog/initiation-a-google-map-api-v3/)
* Code.

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

			var aAfficher = "Latitude : "+marker.position.Xa+'<br />Longtitude : '+marker.position.Ya+"<br />new google.maps.LatLng("+marker.position.Xa+","+marker.position.Ya+");";

			var infowindow = new google.maps.InfoWindow({
				content: aAfficher
			});

			infowindow.open(maCarte,marker);
		}

		window.onload = initialisation;

#### Auteur :

  * Simon Ertel ([korvus](https://github.com/korvus08))