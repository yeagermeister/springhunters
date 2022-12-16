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


small change