import React, { Component } from 'react';
import PhotoList from "./components/PhotoList"
import SearchForm from "./components/SearchForm"
import Nav from "./components/Nav"
import NotFound from "./components/NotFound"
import axios from 'axios';

import './App.css';
import apiKey from './config.js';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

class App extends Component {


  state = {
    images: [],
    fish: [],
    plants:[],
    birds:[],
    query:"",
    loading: true
  }

  componentDidMount() {
    this.performSearch("stars");
    //get images of fish
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=fish&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          fish: response.data.photos.photo,
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

    //get images of plants
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=plants&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          plants: response.data.photos.photo,
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

    //get images of birds
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=birds&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          birds: response.data.photos.photo,
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  performSearch = (query) => {
    this.setState({
      loading: true,
    });
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          query: query,
          images: response.data.photos.photo,
          loading: false,
        });
        console.log(query)
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
          <Nav/>
            {
              (this.state.loading)
              ?
              <p>Loading...</p>
              :
              <Switch>
                <Route exact path="/" render={ () => <PhotoList data={this.state.images} query={this.state.query}/> } />
                <Route path="/fish" render={ () => <PhotoList data={this.state.fish} query="Fish" /> } />
                <Route path="/plants" render={ () => <PhotoList data={this.state.plants} query="Plants" /> } />
                <Route path="/birds" render={ () => <PhotoList data={this.state.birds} query="Birds"/> } />
                <Route path="/:search" render={ () => <PhotoList data={this.state.images} query={this.state.query}/> } />
                <Route  component={NotFound} />
              </Switch>
            }
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
