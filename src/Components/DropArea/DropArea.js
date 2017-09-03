import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DropArea extends Component {

  static propTypes = {
    isDragging: PropTypes.bool.isRequired,
    isDropZone: PropTypes.bool.isRequired,
  }

  render() {
    const visibility = this.props.isDragging ? 'visible': 'hidden';

    const dropZone = this.props.isDropZone ? 'dropzone': '';

    return(
      <div className={`drop-area ${visibility} ${dropZone}`} draggable={true}/>
    );
  }

}

export default DropArea;
