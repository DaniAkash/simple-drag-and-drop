import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DropArea extends Component {

  static propTypes = {
    isDragging: PropTypes.bool.isRequired,
    isDropZone: PropTypes.bool.isRequired,
    xCord: PropTypes.number.isRequired,
    yCord: PropTypes.number.isRequired,
    setDropZone: PropTypes.func.isRequired,
  }

  render() {
    const visibility = this.props.isDragging ? 'visible': 'hidden';

    const dropZone = this.props.isDropZone ? 'dropzone': '';

    const enterDrop = () => this.props.setDropZone([this.props.xCord, this.props.yCord]);
    const exitDrop = () => this.props.setDropZone(['','']);

    return(
      <div
        className={`drop-area ${visibility} ${dropZone}`}
        onDragEnter={enterDrop}
        onDragLeave={exitDrop}
      />
    );
  }

}

export default DropArea;
