// const google = window.google

// Function To Allow access user's current location
// Because geolocation is basically asynchronous api, better to use Promise to handle with asynchonouslly.
// (same to do in GMaps.jsx)
export const getUserLocation = () => {
  console.log('getUserLocation caught');
  // return Promise as an instance
  return new Promise((resolve, reject) => {
    // in case of user Allowed (if user deny, show error in console)
    return navigator.geolocation.getCurrentPosition((position) => { // User's current locaiton will into the position value.
      // define condition of is the Promise execution has successfully done.
      const location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      // return location value if 'resolve'(= successfully caught)
      resolve(location);
      // console.log(`success:) currently you are in lat:${location.lat}, lng:${location.lng}`);
    });
  });
}

// Function for showing places depends on user's current location with Google Places API
// add location, map, keyword in parameter to access from outside
export const searchPlaces = (map, location, keyword, callback) => {
  console.log('Alright, searchPlaces has been invoked');
  const target = new window.google.maps.Map(map, {
    center: location,
    zoom: 15,
  })
  const places = new window.google.maps.places.PlacesService(target);
  // let keyword = 'coffee';
  // console.log('places', places)
  places.nearbySearch({
    location: target.center,
    radius: '1000',
    name: keyword,
    // results = searchNearbyの結果
  }, (results, status) => {
    // 検索のプロセスが正常に処理されていたら
    console.log('status', window.google.maps.places.PlacesServiceStatus)
    if (status === window.google.maps.places.PlacesServiceStatus.OK){
      console.log('results: ', results)
      // Pin markers
      // for (let i = 0; i < results.length; i++){//resultの中身が全て吐き出されるまで
      //   new GoogleMap.maps.marker({
      //     // 以下の情報を地図上に出す
      //     map: target,
      //     position: results[i].geometry.location,
      //     title: results[i].name,
      //   });
      // }
      callback(results);
    } else {
      alert('failed' + status);
      return;
    }
  });
}