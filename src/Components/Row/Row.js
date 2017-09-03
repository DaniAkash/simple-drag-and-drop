import React from 'react';

import SelectedTile from '../Tile/SelectedTile';
import DropArea from '../DropArea/DropArea';

const Row = ({items, xCord}) => (
    <div className={'row'}>
        {
            items.map((each, index) => {
                if(each === 1) {
                    return <SelectedTile key={index}/>;
                } else {
                    return <DropArea key={index} isDragging={true} isDropZone={true}/>;
                }
            })
        }
    </div>
);

export default Row;
