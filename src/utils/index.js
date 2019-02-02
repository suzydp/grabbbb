import { GoogleMap } from "react-google-maps";

// To Allow access user's current location - ユーザーの位置情報を拾ってくる関数
export const getUserLocation = () => {
  console.log('getUserLocation caught');
  // return Promise as an instance
  return new Promise((resolve, reject) => {
    // in case of user Allowed (if user deny, show error in console)
    return navigator.geolocation.getCurrentPosition((position) => {//positionにユーザーの位置情報が入る
      // Promise処理が成功した場合の条件のみここで定義(失敗 - console.logへ)
      const location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      // 成功したらlocationの処理を走らせる
      resolve(location);
      console.log(`success:) currently you are in lat:${location.lat}, lng:${location.lng}`);
    }, reject(console.log('failed:(')));
  });
}

// ユーザーの位置情報からキーワードに一致させる場所を表示させる関数
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