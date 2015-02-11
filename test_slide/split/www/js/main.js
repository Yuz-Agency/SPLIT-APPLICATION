$(function () {
    

    //TAILLE DU MAIN
    var $hgt = window.innerHeight;
    $('#main').css('height', $hgt+'px');
    $('#view').css('height', ($hgt-56)+'px');
    //width de ho, jour, mess et pro
    // var $wdt = window.innerWidth;

    //VARIABLE HAMMER.JS
    var v = document.getElementById('view');
    var view = new Hammer(v);

    //taille de l'ecran
    var w = window.innerWidth;

    view.on('swipeleft', function() {
        var $droite = $('.pro').css('left');
        if($droite == '0px'){
        }else{
            $('.ho, .jour, .mess, .pro').animate({left: "-="+w+"px"}, 200);
        }
    });
    
    view.on('swiperight', function() {
        var $gauche = $('.ho').css('left');

        if($gauche == '0px'){
        }else{
             $('.ho, .jour, .mess, .pro').animate({left: "+="+w+"px"}, 200);
        }
      
    });
    
    



    //google map
    function initialize() {
        
        
        var onSuccess = function(position) {

            var lat = position.coords.latitude,
                lng = position.coords.longitude;

            var mycoord = new google.maps.LatLng( lat, lng );
            var mapOptions = {
              center: mycoord,
              zoom: 13,
              streetViewControl: false,
              zoomControl: false
            }
            var map = new google.maps.Map(document.getElementById('map'),
                mapOptions);

            var marker = new google.maps.Marker({
              position: mycoord,
              map: map
            });


            };

            // onError Callback receives a PositionError object
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                      'message: ' + error.message + '\n');
            }

            navigator.geolocation.getCurrentPosition(onSuccess, onError);

      }
    google.maps.event.addDomListener(window, 'load', initialize);

    
    //APPEL AJAX
    // $.ajax({
    //     data: 'latitude='+lat+'&longitude='+lng,
    //     type: 'POST',
    //     url: 'geo.php',
    //     success: function(position){

            
    //     }
    

    // });
    

});