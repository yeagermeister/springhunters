function initMap(){
    {
        //your prime gator location
        var lakeJesup = {lat: 28.7302, lng: 81.2023 }
        // the map, centered on everyones favorite lake
        let map = new google.maps.Map(document.getElementById("map"),{
            zoom: 8,
            center: lakeJesup,
        
        })
    }
}

// Initialize the map when the page is loaded
window.onload = function() {
    initMap();
  };
  
  // Initialize the map
  function initMap() {
    // Set up the map options
    const mapOptions = {
      zoom: 10,
      center: new google.maps.LatLng(28.5928, -81.3083)
    };
  
    // Create the map
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
>>>>>>> main
