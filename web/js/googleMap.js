    // Initializes the Map.
    function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: {lat: 17.23082107851708, lng: 14.00166130065918}
      });

      // Initializing the markers
      var image = {
        url: 'https://dentacoin.com/web/img/dcnpointer.png',
        // This marker is 35 pixels wide by 53 pixels high.
        size: new google.maps.Size(35, 53),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (19, 51).
        anchor: new google.maps.Point(19, 51)
      };
      // Shapes define the clickable region of the icon. The type defines an HTML
      // <area> element 'poly' which traces out a polygon as a series of X,Y points.
      // The final coordinate closes the poly by connecting to the first coordinate.
      var shape = {
        coords: [1, 1, 1, 53, 51, 53, 51, 1],
        type: 'poly'
      };

      // Content for the info windows.
      var contentStringSwissDentaprime = '<div id="content">'+
                                          '<div id="bodyContent">'+
                                            '<div class="shell">'+
                                              '<div class="range">'+
                                                '<div class="col-sm-12">'+
                                                  '<a href="https://www.dentaprime.com/dental-clinic" target="_blank">'+
                                                    '<img src="https://www.dentacoin.com/web/img/dentists/dp-logo.png" alt="" style="width: 200px;">'+
                                                  '</a>'+
                                                '</div>'+
                                              '</div>'+
                                            '</div>'+
                                          '</div>'+
                                        '</div>';
      let contentStringDentaprimeFThreeT = '<div id="content">'+
                                            '<div id="bodyContent">'+
                                              '<div class="shell">'+
                                                '<div class="range">'+
                                                  '<div class="col-sm-12">'+
                                                    '<a href="https://www.dentaprime.co.uk/" target="_blank">'+
                                                      '<img src="https://www.dentacoin.com/web/img/dentists/f3t-logo.png" alt="" style="width: 200px;">'+
                                                    '</a>'+
                                                  '</div>'+
                                                '</div>'+
                                              '</div>'+
                                            '</div>'+
                                          '</div>';
      let contentStringDentech = '<div id="content">'+
                                  '<div id="bodyContent">'+
                                    '<div class="shell">'+
                                      '<div class="range">'+
                                        '<div class="col-sm-12">'+
                                          '<a href="http://www.dentechdentalcare.com/" target="_blank">'+
                                            '<img src="https://www.dentacoin.com/web/img/dentists/dentch-logo.png" alt="" style="width: 200px;">'+
                                          '</a>'+
                                        '</div>'+
                                      '</div>'+
                                    '</div>'+
                                  '</div>'+
                                '</div>';
      let contentStringContident = '<div id="content">'+
                                    '<div id="bodyContent">'+
                                      '<div class="shell">'+
                                        '<div class="range">'+
                                          '<div class="col-sm-12">'+
                                            '<a href="http://www.contident.com/" target="_blank">'+
                                              '<img src="https://www.dentacoin.com/web/img/dentists/contident.png" alt="" style="width: 200px;">'+
                                            '</a>'+
                                          '</div>'+
                                        '</div>'+
                                      '</div>'+
                                    '</div>'+
                                  '</div>';
      let contentStringLifDental = '<div id="content">'+
                                    '<div id="bodyContent">'+
                                      '<div class="shell">'+
                                        '<div class="range">'+
                                          '<div class="col-sm-12">'+
                                            '<a href="http://www.lifdental.com/"" target="_blank">'+
                                              '<img src="https://www.dentacoin.com/web/img/dentists/lifdental.png" alt="" style="width: 200px;">'+
                                            '</a>'+
                                          '</div>'+
                                        '</div>'+
                                      '</div>'+
                                    '</div>'+
                                  '</div>';
      let contentStringFlinders = '<div id="content">'+
                                    '<div id="bodyContent">'+
                                      '<div class="shell">'+
                                        '<div class="range">'+
                                          '<div class="col-sm-12">'+
                                            '<a href="http://www.dentalonflinders.com.au/" target="_blank">'+
                                              '<img src="https://www.dentacoin.com/web/img/dentists/dental-on-flinders.png" alt="" style="width: 200px;">'+
                                            '</a>'+
                                          '</div>'+
                                        '</div>'+
                                      '</div>'+
                                    '</div>'+
                                  '</div>';
      let contentStringITeeth = '<div id="content">'+
                                  '<div id="bodyContent">'+
                                    '<div class="shell">'+
                                      '<div class="range">'+
                                        '<div class="col-sm-12">'+
                                          '<a href="https://www.facebook.com/mr.iteeth" target="_blank">'+
                                            '<img src="https://www.dentacoin.com/web/img/dentists/mr-iteeth.png" alt="" style="width: 200px;">'+
                                          '</a>'+
                                        '</div>'+
                                      '</div>'+
                                    '</div>'+
                                  '</div>'+
                                '</div>';
      let contentStringQAD = '<div id="content">'+
                              '<div id="bodyContent">'+
                                '<div class="shell">'+
                                  '<div class="range">'+
                                    '<div class="col-sm-12">'+
                                      '<a href="http://www.qadental.co.uk/" target="_blank">'+
                                        '<img src="https://www.dentacoin.com/web/img/dentists/qad.png" alt="" style="width: 200px;">'+
                                      '</a>'+
                                    '</div>'+
                                  '</div>'+
                                '</div>'+
                              '</div>'+
                            '</div>';
      let contentStringAura = '<div id="content">'+
                              '<div id="bodyContent">'+
                                '<div class="shell">'+
                                  '<div class="range">'+
                                    '<div class="col-sm-12">'+
                                      '<a href="http://aurafamilydentistry.com/" target="_blank">'+
                                        '<img src="https://www.dentacoin.com/web/img/dentists/aura.png" alt="" style="width: 200px;">'+
                                      '</a>'+
                                    '</div>'+
                                  '</div>'+
                                '</div>'+
                              '</div>'+
                            '</div>';
      let contentStringDailyCare = '<div id="content">'+
                              '<div id="bodyContent">'+
                                '<div class="shell">'+
                                  '<div class="range">'+
                                    '<div class="col-sm-12">'+
                                      '<a href="http://dailycaredental.webs.com/" target="_blank">'+
                                        '<img src="https://www.dentacoin.com/web/img/dentists/daily-dental.png" alt="" style="width: 200px;">'+
                                      '</a>'+
                                    '</div>'+
                                  '</div>'+
                                '</div>'+
                              '</div>'+
                            '</div>';
      let contentStringDentistsThree = '<div id="content">'+
                              '<div id="bodyContent">'+
                                '<div class="shell">'+
                                  '<div class="range">'+
                                    '<div class="col-sm-12">'+
                                      '<a href="http://dentist3.com/" target="_blank">'+
                                        '<img src="https://www.dentacoin.com/web/img/dentists/dentist3.png" alt="" style="width: 200px;">'+
                                      '</a>'+
                                    '</div>'+
                                  '</div>'+
                                '</div>'+
                              '</div>'+
                            '</div>';

    // Creating the info windows.
    var infowindowSwissDentaprime = new google.maps.InfoWindow({
      content: contentStringSwissDentaprime
    });
    let infowindowDentaprimeFThreeT = new google.maps.InfoWindow({
      content: contentStringDentaprimeFThreeT
    });
    let infowindowDentech = new google.maps.InfoWindow({
      content: contentStringDentech
    });
    let infowindowContident = new google.maps.InfoWindow({
      content: contentStringContident
    });
    let infowindowLifDental = new google.maps.InfoWindow({
      content: contentStringLifDental
    });
    let infowindowFlinders = new google.maps.InfoWindow({
      content: contentStringFlinders
    });
    let infowindowITeeth = new google.maps.InfoWindow({
      content: contentStringITeeth
    });
    let infowindowQAD = new google.maps.InfoWindow({
      content: contentStringQAD
    });
    let infowindowAura = new google.maps.InfoWindow({
      content: contentStringAura
    });
    let infowindowDailyCare = new google.maps.InfoWindow({
      content: contentStringDailyCare
    });
    let infowindowDentistsThree = new google.maps.InfoWindow({
      content: contentStringDentistsThree
    });

    // Creates an array of locations for markers.
    var locations = [
        {lat: 43.23082107851708, lng: 28.00166130065918},
        {lat: 51.5355026, lng: -0.006374199999982011},
        {lat: 18.462917, lng: 73.912061},
        {lat: 47.5131012, lng: 19.048879499999998},
        {lat: 42.9889753, lng: -78.69631529999998},
        {lat: -37.8178116, lng: 144.96514609999997},
        {lat: 25.0329636, lng: 121.56542680000007},
        {lat: 51.7589538, lng: -0.47198979999996027},
        {lat: 34.2784764, lng: -118.73593010000002},
        {lat: -18.1346392, lng: 178.42604089999998},
        {lat: 3.246762, lng: 101.47423200000003}
      ];

    // Create an array of titles for markers.
    var titles = [
        {title: "Swiss Dentaprime"},
        {title: "Dentaprime F3T"},
        {title: "Dentech"},
        {title: "Contident"},
        {title: "LifDental"},
        {title: "Dental on Flinders"},
        {title: "Mr. iTeeth"},
        {title: "Quality Afordable Dentistry"},
        {title: "Aura Family Dentistry"},
        {title: "Daily Care Dental"},
        {title: "Dentist3"}
      ];

    // Adds markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
          position: location,
        //   title: titles[i].toString(),
          icon: image,
          shape: shape
        });
      });

    // Initializing info windows.
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://dentacoin.com/web/img/m'});
        markers[0].addListener('click', function() {
            infowindowSwissDentaprime.open(map, markers[0]);
          });
          markers[1].addListener('click', function(){
            infowindowDentaprimeFThreeT.open(map, markers[1]);
          });
          markers[2].addListener('click', function(){
            infowindowDentech.open(map, markers[2]);
          });
          markers[3].addListener('click', function(){
            infowindowContident.open(map, markers[3]);
          });
          markers[4].addListener('click', function(){
            infowindowLifDental.open(map, markers[4]);
          });
          markers[5].addListener('click', function(){
            infowindowFlinders.open(map, markers[5]);
          });
          markers[6].addListener('click', function(){
            infowindowITeeth.open(map, markers[6]);
          });
          markers[7].addListener('click', function(){
            infowindowQAD.open(map, markers[7]);
          });
          markers[8].addListener('click', function(){
            infowindowAura.open(map, markers[8]);
          });
          markers[9].addListener('click', function(){
            infowindowDailyCare.open(map, markers[9]);
          });
          markers[10].addListener('click', function(){
            infowindowDentistsThree.open(map, markers[10]);
          });
      
    }

    //   // Drop testing.
      

    //   var markers = [];

    //   function drop() {
    //     clearMarkers();
    //     for (var i = 0; i < neighborhoods.length; i++) {
    //       addMarkerWithTimeout(neighborhoods[i], i * 200);
    //     }
    //   }
  
    //   function addMarkerWithTimeout(position, timeout) {
    //     window.setTimeout(function() {
    //       markers.push(new google.maps.Marker({
    //         position: position,
    //         map: map,
    //         animation: google.maps.Animation.DROP
    //       }));
    //     }, timeout);
    //   }
  
    //   function clearMarkers() {
    //     for (var i = 0; i < markers.length; i++) {
    //       markers[i].setMap(null);
    //     }
    //     markers = [];
    //   }