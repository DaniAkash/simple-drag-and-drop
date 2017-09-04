import React, { Component } from 'react';
import './App.css';

import HoverArea from './Components/HoverArea/HoverArea';
import BottomBar from './Components/BottomBar/BottomBar';
import Container from './Components/Container/Container';

const numberOfTiles=5;
const initialContainer = [
  [1, 0, 0],
  [1, 0, 1],
  [1, 1, 1]
];

class App extends Component {

  state = {
    numOfTiles: Array(numberOfTiles).fill(1),
    bottomBarIsHidden: true,
    selectedTiles: initialContainer,
    dropZone: ['',''],
    isUnselectedDropZone: false,
    isUnselectedDragging: false,
    isSelectedDragging: false,
    draggedTile: {
      // type: 'selected' || 'unselected',
      // cord: [0, 1],
      // index: 2,
    }
  }

  constructor() {
    super();

    this.showBottomBar = this.showBottomBar.bind(this);
    this.hideBottomBar = this.hideBottomBar.bind(this);
    this.selectedDragStart = this.selectedDragStart.bind(this);
    this.selectedDragEnd = this.selectedDragEnd.bind(this);
    this.unselectedDragStart = this.unselectedDragStart.bind(this);
    this.unselectedDragEnd = this.unselectedDragEnd.bind(this);
    this.setDropZone = this.setDropZone.bind(this);
    this.setUnselectedDropZone = this.setUnselectedDropZone.bind(this);
    this.selectTile = this.selectTile.bind(this);
    this.unSelectTile = this.unSelectTile.bind(this);
    this.setDraggedTile = this.setDraggedTile.bind(this);
    this.clearOldTile = this.clearOldTile.bind(this);
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
      isSelectedDragging: true,
      bottomBarIsHidden: false,
    });
    this.setDraggedTile({
      type: 'selected',
      cord,
    });
  }

  selectedDragEnd(cord) {
    this.setState({
      isSelectedDragging: false,
      bottomBarIsHidden: true,
      isUnselectedDropZone: false,
    });
    setTimeout(() => { // ToDo: Must execute after event ends
      this.setDraggedTile({});
    }, 300);
  }

  unselectedDragStart(index) {
    this.setState({
      isUnselectedDragging: true,
    });
    this.setDraggedTile({
      type: 'unselected',
      index,
    });
  }

  unselectedDragEnd(index) {
    this.setState({
      isUnselectedDragging: false,
    });
    setTimeout(() => { // ToDo: Must execute after event ends
      this.setDraggedTile({});
    }, 300);
  }

  setDropZone(cord) {
    this.setState({
      dropZone: cord,
    });
  }

  setUnselectedDropZone(status) {
    this.setState({
      isUnselectedDropZone: status,
    });
  }

  selectTile(cord) {
    const selectedTiles = JSON.parse(JSON.stringify(this.state.selectedTiles)); // ToDo: Find a better way to clone the array
    const x = cord[0], y=cord[1];
    selectedTiles[x][y] = 1;
    this.setState({selectedTiles});
    setTimeout(() => {
      this.clearOldTile(); // ToDo: Must excecute after drop event is complete.
    }, 100);
  }

  unSelectTile() {
    const numOfTiles = [...this.state.numOfTiles, 1];
    this.setState({numOfTiles});
    setTimeout(() => {
      this.clearOldTile(); // ToDo: Must excecute after drop event is complete.
    }, 100);
  }

  setDraggedTile(tile) {
    this.setState({
      draggedTile: tile
    });
  }

  clearOldTile() {
    if(this.state.draggedTile.type === 'selected') {
      const selectedTiles = JSON.parse(JSON.stringify(this.state.selectedTiles)); // ToDo: Find a better way to clone the array
      const x = this.state.draggedTile.cord[0], y= this.state.draggedTile.cord[1];
      selectedTiles[x][y] = 0;
      this.setState({selectedTiles});
    } else {
      const numOfTiles = [...this.state.numOfTiles];
      numOfTiles.splice(this.state.draggedTile.index, 1);
      this.setState({numOfTiles});
    }
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
          setDropZone={this.setDropZone}
          selectTile={this.selectTile}
          draggedTile={this.state.draggedTile}
        />
        <HoverArea
          showBottomBar={this.showBottomBar}
        />
        <BottomBar
          tiles={this.state.numOfTiles}
          isHidden={this.state.bottomBarIsHidden}
          hideBottomBar={this.hideBottomBar}
          unselectedDragStart={this.unselectedDragStart}
          unselectedDragEnd={this.unselectedDragEnd}
          isSelectedDragging={this.state.isSelectedDragging}
          isUnselectedDropZone={this.state.isUnselectedDropZone}
          setUnselectedDropZone={this.setUnselectedDropZone}
          unSelectTile={this.unSelectTile}
          draggedTile={this.state.draggedTile}
        />
      </div>
    );
  }
}

export default App;
