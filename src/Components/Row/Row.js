import React from 'react';

import SelectedTile from '../Tile/SelectedTile';
import DropArea from '../DropArea/DropArea';

const Row = ({ items, xCord, dropZone, isUnselectedDragging, isSelectedDragging }) => (
  <div className={'row'}>
    {
      items.map((each, index) => {
        if (each === 1) {
          return <SelectedTile key={index} />;
        } else {
          let yCord = index, isDropZone = false;
          if (dropZone[0] === xCord && dropZone[1] === yCord) {
            isDropZone = true;
          }
          return (
            <DropArea
              key={index}
              isDragging={isUnselectedDragging || isSelectedDragging}
              isDropZone={isDropZone}
              xCord={xCord}
              yCord={yCord}
            />
          );
        }
      })
    }
  </div>
);

export default Row;
