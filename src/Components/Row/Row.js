import React from 'react';

import SelectedTile from '../Tile/SelectedTile';

const Row = ({items}) => (
    <div className={'row'}>
        {
            items.map((each, index) => {
                if(each === 1) {
                    return <SelectedTile key={index}/>;
                } else {
                    return null;
                }
            })
        }
    </div>
);

export default Row;