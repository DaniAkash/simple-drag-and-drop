import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UnselectDropArea extends Component {

  static propTypes = {
    isDropZone: PropTypes.bool.isRequired,
    setUnselectedDropZone: PropTypes.func.isRequired,
    unSelectTile: PropTypes.func.isRequired,
  }

  render() {
    const dropZone = this.props.isDropZone ? 'dropzone': '';

    const enterDrop = () => this.props.setUnselectedDropZone(true);
    const exitDrop = () => this.props.setUnselectedDropZone(false);
    const dragOver = event => event.preventDefault();
    const dropped = () => this.props.unSelectTile();

    return(
      <div
        className={`unselect-drop-area ${dropZone}`}
        onDragEnter={enterDrop}
        onDragLeave={exitDrop}
        onDragOver={dragOver}
        onDrop={dropped}
      />
    );
  }

}

export default UnselectDropArea;
