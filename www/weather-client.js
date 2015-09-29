document.getElementById('search_weather').onclick = function () {
  document.getElementById('cloudResponse').innerHTML = "<p>Calling App.....</p>";
  $fh.cloud(
      {
        path: 'weather',
        method: "POST",   //all other HTTP methods are supported as well. e.g. HEAD, DELETE, OPTIONS
        data: {
          city: document.getElementById('the_city').value,
          country: document.getElementById('the_country').value
        }
      },
      function (res) {
        document.getElementById('cloudResponse').innerHTML = "<p>Temperature is " + res.msg + "</p>";
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
  );
};