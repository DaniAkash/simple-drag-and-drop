import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UnselectDropArea extends Component {

  static propTypes = {
    isDropZone: PropTypes.bool.isRequired,
  }

  render() {
    const dropZone = this.props.isDropZone ? 'dropzone': '';

    return(
      <div
        className={`unselect-drop-area ${dropZone}`}
      />
    );
  }

}

export default UnselectDropArea;
