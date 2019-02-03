import { GoogleMap } from "react-google-maps";

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
export const searchPlaces = (target, keyword) => {
  const places = new GoogleMap.maps.places.PlacesService(target);
  places.searchNearby({
    location: target.center,
    radius: '1000',
    name: keyword,
  }, (results, status) => {
    // 検索のプロセスが正常に処理されていたら
    if (status === GoogleMap.maps.places.PlacesServiceStatus.OK){
      //マーカーを建てる
      let i;
      for (i = 0; i < results.length; i++){//resultの中身が全て吐き出されるまで
        new GoogleMap.maps.marker({
          // 以下の情報を地図上に出す
          map: target,
          position: results[i].geometry.location,
          title: results[i].name,
        });
      }
    } else {
      alert('failed' + status);
      return;
    }
  });
}