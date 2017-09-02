import React, { Component } from 'react';
import './App.css';

import HoverArea from './Components/HoverArea/HoverArea';
import BottomBar from './Components/BottomBar/BottomBar';

const numberOfTiles=10;

class App extends Component {

  state = {
    numOfTiles: Array(numberOfTiles).fill(0).map((e,i)=>i+1),
    bottomBarIsHidden: true,
  }

  constructor() {
    super();

    this.showBottomBar = this.showBottomBar.bind(this);
  }

  showBottomBar() {
    this.setState({
      bottomBarIsHidden: false,
    });
  }

  hideBottomBar() {
    this.setState({
      bottomBarIsHidden: true,
    });
  }

  render() {
    return (
      <div>
        <HoverArea showBottomBar={this.showBottomBar}/>
        <BottomBar tiles={this.state.numOfTiles} isHidden={this.state.bottomBarIsHidden}/>
      </div>
    );
  }
}

export default App;
