import React, { Component } from 'react';
// {} - import submodules from the library
import { loadGoogleMaps, loadPlaces } from '../../utils/index';
import './GMaps.scss';

export default class GMaps extends Component{

  componentDidMount() {
    console.log('component did mount!')
    let googleMapsPromise = loadGoogleMaps();
    let placesPromise = loadPlaces();
    Promise.all([
      googleMapsPromise,
      placesPromise
    ])
    .then(values => {
      // Googleから提供されるAPIの中身を変更する場合は、子コンポーネントからではなく親コンポーネントからやる方が簡単。
      // ここで格納されるvenuesの値はFoursquare APIであらかじめ指定した値のみであり、APIの中身を変えた場合は変更が必要
      // GoogleMapのMapsオブジェクトが返ってくる
      let google = values[0];
      // venuesの中にはmetaとresponseがあるが、responseの中身をfetchしたいのでvalues[1].response.venuesとする
      let venues = values[1].response.venues;

      console.log(values);//array(1)
      // 上記と同様に、Mapに関するものはpropertyとして扱う。
      // (markerの場合は、いちいち場所が変更されるたびにコールバック関数を呼ばないといけないなどの手間が生じるため)
      this.google = google
      this.markers = [];
      this.infowindow = new google.maps.InfoWindow();
      // 下でthis.mapを呼び出すためのmapインスタンスが必要
      this.map = new google.maps.Map(document.getElementById('map'),{
        zoom: 9,
        scrollwheel: true,
        center: { 
          lat: venues[0].location.lat,
          lng: venues[0].location.lng,
        },
      });

      // to create a marker for each places which matched
      venues.forEach(venue => {
        let marker = new google.maps.Marker({
          // when you wanna pin marker, position and map properties are required
          position: { lat: venue.location.lat, lng: venue.location.lng },
          map: this.map,
          venue: venue,
          //to pin into an exact position
          id: venue.id,
          name: venue.name,
          animation: google.maps.Animation.DROP,
        });
        // 上記のデータをmarkers arrayにpushする
        this.markers.push(this.markers);
      });
    })
  }

  render() {
    console.log('rendered!');
    return(
      <div id="map">
      </div>
    )
  }
}