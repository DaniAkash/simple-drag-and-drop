import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SmallTile from '../Tile/SmallTile';

class BottomBar extends Component {

    static propTypes = {
        isHidden: PropTypes.bool.isRequired,
        tiles: PropTypes.array.isRequired,
    }

    render() {
        return (
            <div className={`bottom-bar ${this.props.isHidden? 'hidden':''}`}>
                {
                    this.props.tiles.map((each, index) => <SmallTile key={index}/>)
                }
            </div>
        )
    }
}

export default BottomBar;