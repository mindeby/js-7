import React, { Component } from 'react';
import PhotoList from "./components/PhotoList"
import SearchForm from "./components/SearchForm"
import Nav from "./components/Nav"
import axios from 'axios';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';


import './App.css';
import apiKey from './config.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      images: [

      ],
      loading: true,
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'landscapes') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          images: response.data.photos.photo,
          loading: false,
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }


  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.performSearch} />
          <Nav />
            <Switch>
              <Route exact path="/" render={ () => <PhotoList data={this.state.images} /> } />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
