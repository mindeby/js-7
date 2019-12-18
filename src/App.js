import React, { Component } from 'react';
import PhotoList from "./components/PhotoList"
import axios from 'axios';


import './App.css';
import apiKey from './config.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      images: [

      ],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'sunsets', apiKey="a3adbdf5f025f0df56ee3fff76d4efee") => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          images: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }


  render() {
    return (
      <div className="container">
        <PhotoList data={this.state.images}/>
      </div>
    );
  }
}

export default App;
