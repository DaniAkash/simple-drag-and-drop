import React, { Component } from 'react';
import './App.css';

import HoverArea from './Components/HoverArea/HoverArea';
import BottomBar from './Components/BottomBar/BottomBar';

const numberOfTiles=10;

class App extends Component {

  state = {
    numOfTiles: Array(numberOfTiles).fill(0).map((e,i)=>i+1)    
  }

  render() {
    return (
      <div>
        <HoverArea/>
        <BottomBar tiles={this.state.numOfTiles}/>
      </div>
    );
  }
}

export default App;
