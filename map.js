  var map, places, infoWindow;
  var markers = [];
  var autocomplete;
  var countryRestrict = { 'country': 'us' };
  var MARKER_PATH = 'https://maps.gstatic.com/intl/en_us/mapfiles/marker_green';
  var hostnameRegexp = new RegExp('^https?://.+?/');

  var countries = {
    'au': {
      center: new google.maps.LatLng(-25.3, 133.8),
      zoom: 4
    },
    'br': {
      center: new google.maps.LatLng(-14.2, -51.9),
      zoom: 3
    },
    'ca': {
      center: new google.maps.LatLng(62, -110.0),
      zoom: 3
    },
    'fr': {
      center: new google.maps.LatLng(46.2, 2.2),
      zoom: 5
    },
    'de': {
      center: new google.maps.LatLng(51.2, 10.4),
      zoom: 5
    },
    'mx': {
      center: new google.maps.LatLng(23.6, -102.5),
      zoom: 4
    },
    'nz': {
      center: new google.maps.LatLng(-40.9, 174.9),
      zoom: 5
    },
    'it': {
      center: new google.maps.LatLng(41.9, 12.6),
      zoom: 5
    },
    'za': {
      center: new google.maps.LatLng(-30.6, 22.9),
      zoom: 5
    },
    'es': {
      center: new google.maps.LatLng(40.5, -3.7),
      zoom: 5
    },
    'pt': {
      center: new google.maps.LatLng(39.4, -8.2),
      zoom: 6
    },
    'us': {
      center: new google.maps.LatLng(37.1, -95.7),
      zoom: 3
    },
    'uk': {
      center: new google.maps.LatLng(54.8, -4.6),
      zoom: 5
    }
  };


  function initialize() {
    var mapCanvas = document.getElementById('map_canvas');
    
    var mapOptions = {
      center: new google.maps.LatLng(48.51, 31.10),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.HYBRID
    };

    var map = new google.maps.Map(mapCanvas, mapOptions);

    autocomplete = new google.maps.places.Autocomplete(
      /** @type {HTMLInputElement} */(document.getElementById('selected_city')),
      {
        types: ['(cities)']
        // componentRestrictions: countryRestrict
      });

      places = new google.maps.places.PlacesService(map);

      google.maps.event.addListener(autocomplete, 'place_changed', onPlaceChanged);

      // Add a DOM event listener to react when the user selects a country.
      // google.maps.event.addDomListener(document.getElementById('country'), 'change',
      //     setAutocompleteCountry);

    function onPlaceChanged() {
        var place = autocomplete.getPlace();
        if (place.geometry) {
          map.panTo(place.geometry.location);
          map.setZoom(15);
          search();
        } else {
          document.getElementById('autocomplete').placeholder = 'Enter a city';
        }

      }

  }


  // google.maps.event.addDomListener(window, 'load', initialize);

  // $(document).ready(main);

