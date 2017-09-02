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
            <div className={`bottom-bar ${this.props.isHidden? 'hidden':''}`} ref={'_bottomBar'}>
                {
                    this.props.tiles.map((each, index) => <SmallTile key={index}/>)
                }
            </div>
        )
    }

    componentDidMount() {
        this.refs._bottomBar.addEventListener('mouseout', this.props.hideBottomBar);
    }
}

export default BottomBar;