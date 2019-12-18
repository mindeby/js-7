import React, { Component } from 'react';
import PhotoList from "./components/PhotoList"
import SearchForm from "./components/SearchForm"
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

  performSearch = (query = 'sunsets') => {
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
        <SearchForm onSearch={this.performSearch} />
        <PhotoList data={this.state.images}/>
      </div>
    );
  }
}

export default App;
