
function myMap() {
  console.log('vive la france!');
  var paris = new google.maps.LatLng(48.8566140, 2.3522219);
  var warsaw = new google.maps.LatLng(52.2296756, 21.0122287);
  var zagreb = new google.maps.LatLng(45.8150108, 15.9819189);

  var mapOptions = {
    center: paris,
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID
  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var marker = new google.maps.Marker({
    position: mapOptions.center,
    map: map,
    title: 'Bienvenue à Paris'
  });

  document.getElementById('paris').addEventListener('click',function(){
    $('.map-viewer').css({
      'opacity': '1',
      'transition-duration': '0.5s'
    });
    map.setCenter(paris);
    marker.setPosition(paris);
    marker.setTitle('Bienvenue à Paris!');
    console.log('paris');
  });

  document.getElementById('warsaw').addEventListener('click',function(){
    $('.map-viewer').css({
      'opacity': '1',
      'transition-duration': '0.5s'
    });
    map.setCenter(warsaw);
    marker.setPosition(warsaw);
    marker.setTitle('Witaj w Warszawie!');
    console.log('warsaw');
  });

  document.getElementById('zagreb').addEventListener('click',function(){
    $('.map-viewer').css({
      'opacity': '1',
      'transition-duration': '0.5s'
    });
    map.setCenter(zagreb);
    marker.setPosition(zagreb);
    marker.setTitle('Dobrodošli u Zagreb');
    console.log('zagreb');
  });

}