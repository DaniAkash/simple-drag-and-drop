import React from 'react';

import SelectedTile from '../Tile/SelectedTile';
import DropArea from '../DropArea/DropArea';

const Row = ({
  items,
  xCord,
  dropZone,
  isUnselectedDragging,
  isSelectedDragging,
  selectedDragStart,
  selectedDragEnd,
  setDropZone,
  selectTile,
}) => (
  <div className={'row'}>
    {
      items.map((each, index) => {
        let yCord = index;
        if (each === 1) {
          return (
            <SelectedTile
              key={index}
              xCord={xCord}
              yCord={yCord}
              selectedDragStart={selectedDragStart}
              selectedDragEnd={selectedDragEnd}
            />
          );
        } else {
          let isDropZone = false;
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
              setDropZone={setDropZone}
              selectTile={selectTile}
            />
          );
        }
      })
    }
  </div>
);

export default Row;
