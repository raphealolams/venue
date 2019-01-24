import React, { Component } from 'react';
import './resources/styles.css';
import Header from './component/header_footer/Header';
import Featured from './component/Featured/Index'




class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '1500px'}}>
        <Header/>
        <Featured/>
      </div>
    );
  }
}

export default App;
