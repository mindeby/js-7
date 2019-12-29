import React, { Component } from 'react';
import PhotoList from "./components/PhotoList"
import SearchForm from "./components/SearchForm"
import Nav from "./components/Nav"
import axios from 'axios';

import './App.css';
import apiKey from './config.js';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {


  state = {
    images: [

    ],
    loading: true
  }

  componentDidMount() {
    this.performSearch("giraffe");
  }

  performSearch = (query) => {
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
            <Nav onSearch={this.performSearch}/>
            <PhotoList data={this.state.images}/>
            <Switch>
              <Route path="/plants" render={ () => this.performSearch('plants') } />
              <Route path="/sea" render={ () => this.performSearch('sea') } />
              <Route path="/landscapes" render={ () => this.performSearch('landscapes') } />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
