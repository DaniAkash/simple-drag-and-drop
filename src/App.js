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
    dropZone: ['',''],
    isUnselectedDragging: false,
    isSelectedDragging: false,
  }

  constructor() {
    super();

    this.showBottomBar = this.showBottomBar.bind(this);
    this.hideBottomBar = this.hideBottomBar.bind(this);
    this.selectedDragStart = this.selectedDragStart.bind(this);
    this.selectedDragEnd = this.selectedDragEnd.bind(this);
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

  selectedDragStart(cord) {
    this.setState({
      isSelectedDragging: true
    });
  }

  selectedDragEnd(cord) {
    this.setState({
      isSelectedDragging: false
    });
  }

  render() {
    return (
      <div>
        <Container
          selectedTiles={this.state.selectedTiles}
          dropZone={this.state.dropZone}
          isUnselectedDragging={this.state.isUnselectedDragging}
          isSelectedDragging={this.state.isSelectedDragging}
          selectedDragStart={this.selectedDragStart}
          selectedDragEnd={this.selectedDragEnd}
        />
        <HoverArea
          showBottomBar={this.showBottomBar}
        />
        <BottomBar
          tiles={this.state.numOfTiles}
          isHidden={this.state.bottomBarIsHidden}
          hideBottomBar={this.hideBottomBar}
        />
      </div>
    );
  }
}

export default App;
