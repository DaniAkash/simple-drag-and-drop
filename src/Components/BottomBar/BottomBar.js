import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SmallTile from '../Tile/SmallTile';
import UnselectDropArea from '../UnselectDropArea/UnselectDropArea';

class BottomBar extends Component {

  static propTypes = {
    isHidden: PropTypes.bool.isRequired,
    tiles: PropTypes.array.isRequired,
    unselectedDragStart: PropTypes.func.isRequired,
    unselectedDragEnd: PropTypes.func.isRequired,
    isSelectedDragging: PropTypes.bool.isRequired,
    isUnselectedDropZone: PropTypes.bool.isRequired,
    setUnselectedDropZone: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className={`bottom-bar ${this.props.isHidden ? 'hidden' : ''}`} ref={'_bottomBar'}>
        {
          this.props.isSelectedDragging
          ?
            <UnselectDropArea
              isDropZone={this.props.isUnselectedDropZone}
              setUnselectedDropZone={this.props.setUnselectedDropZone}
            />
          :
            null
        }
        {
          this.props.tiles.map((each, index) => (
            <SmallTile
              key={index}
              index={index}
              unselectedDragStart={this.props.unselectedDragStart}
              unselectedDragEnd={this.props.unselectedDragEnd}
            />
          ))
        }
      </div>
    );
  }

  componentDidMount() {
    this.refs._bottomBar.addEventListener('mouseout', this.props.hideBottomBar);
  }
}

export default BottomBar;
