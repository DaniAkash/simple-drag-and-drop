import React, { Component } from 'react';
import './App.css';

import HoverArea from './Components/HoverArea/HoverArea';
import BottomBar from './Components/BottomBar/BottomBar';
import Container from './Components/Container/Container';

const numberOfTiles=10;
const initialContainer = [
  [1, 0, 0],
  [1, 1, 0],
  [1, 1, 1]
];

class App extends Component {

  state = {
    numOfTiles: Array(numberOfTiles).fill(0),
    bottomBarIsHidden: true,
    selectedTiles: initialContainer,
  }

  constructor() {
    super();

    this.showBottomBar = this.showBottomBar.bind(this);
    this.hideBottomBar = this.hideBottomBar.bind(this);
  }

  showBottomBar() {
    this.setState({
      bottomBarIsHidden: false,
    });
  }

  hideBottomBar(event) {
    const e = event.toElement || event.relatedTarget;
    if(e && e.parentNode.classList) {
      if (
        e.parentNode.classList.contains('small-tile') 
        || 
        e.classList.contains('small-tile')
        ||
        e.classList.contains('bottom-bar')
        ) {
        return;
      }
    }
    this.setState({
      bottomBarIsHidden: true,
    });
  }

  render() {
    return (
      <div>
        <Container selectedTiles={this.state.selectedTiles}/>
        <HoverArea showBottomBar={this.showBottomBar}/>
        <BottomBar tiles={this.state.numOfTiles} isHidden={this.state.bottomBarIsHidden} hideBottomBar={this.hideBottomBar}/>
      </div>
    );
  }
}

export default App;
