import React, { Component } from 'react';
import './resources/styles.css';
import Header from './component/header_footer/Header';
import Featured from './component/Featured/Index';
import VenueInfo from './component/VenueInfo';
import HighLights from './component/Highlights'
import Pricing from './component/Pricing/Index'




class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '1500px'}}>
        <Header/>
        <Featured/>
        <VenueInfo/>
        <HighLights/>
        <Pricing/>
      </div>
    );
  }
}

export default App;
