import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UnselectDropArea extends Component {

  static propTypes = {
    isDropZone: PropTypes.bool.isRequired,
    setUnselectedDropZone: PropTypes.func.isRequired,
  }

  render() {
    const dropZone = this.props.isDropZone ? 'dropzone': '';

    const enterDrop = () => this.props.setUnselectedDropZone(true);
    const exitDrop = () => this.props.setUnselectedDropZone(false);

    return(
      <div
        className={`unselect-drop-area ${dropZone}`}
        onDragEnter={enterDrop}
        onDragLeave={exitDrop}
      />
    );
  }

}

export default UnselectDropArea;
