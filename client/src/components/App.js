import React, { Component } from 'react'

import {
  BrowserRouter,
  Route
} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import HomePage from './HomePage'
import Search from './Search'
import Home from './Home'

import HomeContext from '../Home.context'

class App extends Component {
  state = {
    homes: [],
    filteredArr: [],
    currentHome: null,
    favoriteCities: [],
    mustPicks: ['5c2239a3d3cf7c04a4db3e1e', '5c2239a3d3cf7c04a4db3e0a', '5c2239a3d3cf7c04a4db3e2e', '5c2239a3d3cf7c04a4db3e3a', '5c2239a3d3cf7c04a4db3e4a'],
    editorPicks: []
  }

  componentWillMount = () => {
    fetch('/cities')
      .then(data => data.json())
        .then(favoriteCities => this.setState({favoriteCities}))
  }

  componentDidMount = () => {
    this.state.mustPicks.forEach(pick => {
      fetch(`/homes/${pick}`)
        .then(data => data.json())
          .then(home => this.setState ({editorPicks:[...this.state.editorPicks, home]}))
    })
  }

  getHomes = ({ location='london', checkin=null , checkout=null , guests=1 }) => {
    fetch (`/search/?location=${location}&checkin=${checkin}&checkout=${checkout}&guests=${guests}`)
      .then(data => data.json())
        .then(data => this.setState ({homes:data, filteredArr:data})
    )    
  }

  getHome = ({ id }) => {
    fetch (`/homes/${id}`)
      .then(data => data.json())
      .then(currentHome => this.setState ({currentHome}))
  }

  confirmBook = ({id, checkin, checkout}) => {
    fetch (`/booking/${id}/?checkin=${checkin}&checkout=${checkout}`)
    .then(data => data.json())
  }

  filterGuests = (val) => {
    this.setState({filteredArr: this.state.homes.filter((home)=>home.theSpace.guests >= val )})
  }

  filterHomeType = () => {}

  filterPrice = (val) => {
    this.setState({filteredArr: this.state.homes.filter((home)=>home.price >= val )})
  }

  actions = {
    getHomes: this.getHomes,
    getHome: this.getHome,
    filterGuests: this.filterGuests,
    filterHomeType: this.filterHomeType,
    filterPrice: this.filterPrice,
    confirmBook : this.confirmBook,
  };

  render() {
    return (
      <BrowserRouter>
        <HomeContext.Provider value={{...this.state, ...this.actions}}> 
          <div className="app">
            <Header />
            <Route exact path="/" component={HomePage} />
            <Route path="/search" component={Search} />
            <Route path="/home" render = {(props) => <Home {...props} home={this.state.currentHome}/>}/>
            <Footer/>
          </div>
        </HomeContext.Provider>
      </BrowserRouter>
  )}
}

export default App;
