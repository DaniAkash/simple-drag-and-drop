import React from 'react';
import SmallTile from '../Tile/SmallTile';

const BottomBar = ({tiles}) => (
    <div className="bottom-bar">
        {
            tiles.map((each, index) => (
                <SmallTile key={index}></SmallTile>
            ))
        }
    </div>
);

export default BottomBar;