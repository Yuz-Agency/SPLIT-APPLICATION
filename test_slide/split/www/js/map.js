$(function(){

  var $hgt = window.innerHeight;
  var $bmap = $hgt - 56;

  $('#main').css('height', $bmap+'px');

//google map
    function bmap() {
        
        
        var onSuccess = function(position) {

            var lat = position.coords.latitude,
                lng = position.coords.longitude;

            var mycoord = new google.maps.LatLng( lat, lng );
            var mapOptions = {
              center: mycoord,
              zoom: 13
            }
            var map = new google.maps.Map(document.getElementById('bmap'),
                mapOptions);

            var marker = new google.maps.Marker({
              position: mycoord,
              map: map
            });

             // APPEL AJAX
              $.ajax({
                  data: 'latitude='+lat+'&longitude='+lng,
                  type: 'POST',
                  url: 'http://localhost/split/www/js/geo.php',
                  success: function(){
                    
                  }
              });



            };

            // onError Callback receives a PositionError object
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                      'message: ' + error.message + '\n');
            }

            navigator.geolocation.getCurrentPosition(onSuccess, onError);

                 }
    google.maps.event.addDomListener(window, 'load', bmap);



});