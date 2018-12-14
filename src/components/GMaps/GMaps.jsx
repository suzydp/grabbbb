import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './GMaps.scss';

const AnyReactComponent = ({ imageUrl }) => <div>{imageUrl}</div>;

export default class GMaps extends Component{
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 12,
  }

//   const initMap = () => {
//   const map = document.querySelector('.googlemaps');
//   let target;

//   // //enable geolocation API
//   //1.check user-agent
//   if (!navigator.geolocation) {
//     alert('This browser is not supported geo location system.');
//     return;
//   }


//   try {
//     console.log('ちょっと待ってね'); // TODO くるくる見せる
//     const userLocation = await getUserLocation();//awaitは普通Promiseとセットで使用(今回の場合は下にあるPromise) - awaitはPromiseの処理が終わるのを待つ
//     //Promise処理が終わったら
//     target = new google.maps.Map(map, {//targetに以下の情報を仕込む
//       center: userLocation,
//       zoom: 15,
//     });
//     console.log('いいよ'); // TODO くるくる消す
//   } catch (error) {//tryの中で何かしらエラーが出た場合はすぐにcatchに飛んで来る(いいよは出ない)
//     console.error(error);
//   }

//   //Google places API - API for searching places
//   document.querySelector('#search').addEventListener('click', function () {
//     console.log('clicked')
//     const keyword = document.querySelector('#keyword').value;
//     searchBy(target, keyword);//下のsearchBy()を呼び出す
//   });
// }

//   //ユーザーの位置情報を拾って来る関数
//   const getUserLocation = () => {
//     return new Promise((resolve, reject) => {//Promiseを定義
//       //Allowした場合(denyした場合はconsoleにエラーが表示)
//       navigator.geolocation.getCurrentPosition((position) => {//positionにユーザーの位置情報が入ってくる
//         //Promise処理が成功した場合の処理だけ定義
//         // 位置情報を整形
//         const location = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude
//         };
//         //処理が成功したら上記で定義した処理を走らせる(失敗したら何もしない)
//         resolve(location);
//       }, reject);//( (position) => {}というファンクション, reject )
//     });
//   }

  render(){
    return(
      <div style={{ height:'100vh', width:'100%' }}>
        Google map component
        <GoogleMapReact className="googlemaps"
          // bootstrapURLKeys={{ key: /* your key here */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            imageUrl={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    )
  }
}