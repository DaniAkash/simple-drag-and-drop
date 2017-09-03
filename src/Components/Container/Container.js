import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Row from '../Row/Row';

class Container extends Component {

  static propTypes = {
    selectedTiles: PropTypes.array.isRequired,
    dropZone: PropTypes.array.isRequired,
    isUnselectedDragging: PropTypes.bool.isRequired,
    isSelectedDragging: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <div className={'container'}>
        {
          this.props.selectedTiles.map((rowItems, index) =>
            <Row
              items={rowItems}
              key={index}
              xCord={index}
              dropZone={this.props.dropZone}
              isUnselectedDragging={this.props.isUnselectedDragging}
              isSelectedDragging={this.props.isSelectedDragging}
            />
          )
        }
      </div>
    );
  }
}

export default Container;
