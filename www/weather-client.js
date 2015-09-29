document.getElementById('search_weather').onclick = function () {
  document.getElementById('cloudResponse').innerHTML = "<p>Calling App.....</p>";

  var theCity = document.getElementById('the_city').value;

  $fh.cloud(
      {
        path: 'weather/city',
        method: "POST",   //all other HTTP methods are supported as well. e.g. HEAD, DELETE, OPTIONS
        data: {
          city: theCity,
          country: document.getElementById('the_country').value
        }
      },
      function (res) {
        document.getElementById('cloudResponse').innerHTML = "<p>Temperature in " + theCity + " is " + res.msg + "</p>";
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
  );
};

document.getElementById('search_weather_by_gps_loc').onclick = function() {

  var onSuccess = function(position) {
    document.getElementById('cloudResponse').innerHTML = "<p>Calling App.....</p>";

    $fh.cloud(
      {
        path: 'weather/location',
        method: "POST",   //all other HTTP methods are supported as well. e.g. HEAD, DELETE, OPTIONS
        data: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      },
      function (res) {
        document.getElementById('cloudResponse').innerHTML = "<p>Local Temperature is " + res.msg + " Celsius</p>";
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
  );
    

  };

  var onError = function(error) {
    document.getElementById('cloudResponse').innerHTML = "<p>Error on getting location: " + error.message + " Celsius</p>";
  };

  if(typeof navigator.geolocation !== "undefined") {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    document.getElementById('cloudResponse').innerHTML = "<p>Geo Location not available</p>";
  }
   
};