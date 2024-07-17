    // map button
    document.getElementById('mapBtn').addEventListener('click', function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showMap, showError);
      } else {
        document.getElementById('message').innerText = "Geolocation is not supported by this browser.";
        document.getElementById('message').style.display = 'block';
      }
    });
    
    function showMap(pos) {
      var latitude = pos.coords.latitude;
      var longitude = pos.coords.longitude;
      var mapOptions = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 15
      };

      new google.maps.Map(document.getElementById('map'), mapOptions);
      document.getElementById('map').style.display = 'block';
      document.getElementById('message').style.display = 'none';
    }
    // location button 

    document.getElementById('locationBtn').addEventListener('click', function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocationInfo, showError);
      } else {
        document.getElementById('message').innerText = "Geolocation is not supported by this browser.";
        document.getElementById('message').style.display = 'block';
      }
    });


  function showLocationInfo(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var timestamp = new Date(position.timestamp);
  var locationInfo = 
    `<table>
       <tr>
         <td>Latitude</td>
         <td>${latitude}</td>
       </tr>
       <tr>
         <td>Longitude</td>
         <td>${longitude}</td>
       </tr>
       <tr>
         <td>Time</td>
         <td>${timestamp}</td>
       </tr>
     </table>`;
  document.getElementById('locationInfo').innerHTML = locationInfo;
  document.getElementById('locationInfo').style.display = 'block';
  document.getElementById('message').style.display = 'none';
}

// error handle
function showError(error) {
  var message = "";
  if (error.PERMISSION_DENIED) {
    message = "You have to give permission to show the map.";
  }
  document.getElementById('message').innerText = message;
  document.getElementById('message').style.display = 'block';
}