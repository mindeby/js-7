import React, { Component } from 'react';
import Photo from './Photo';
import NoPhotos from './NoPhotos';

export default class PhotoList extends Component {

  render() {
    const results = this.props.data;

    let photos;
    if (results.length) {
      photos = results.map(photo => <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />);
    } else {
      photos = <NoPhotos />
    }

    return(
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {photos}
        </ul>
      </div>
    );
  }
}
