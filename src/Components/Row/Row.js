import React from 'react';

import SelectedTile from '../Tile/SelectedTile';
import DropArea from '../DropArea/DropArea';
import Mine from '../Mine/Mine';

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
  draggedTile,
  activatedMine,
  activateMine,
  deactivateMine,
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
              draggedTile={draggedTile}
            />
          );
        } else {

          let isDropZone = false;
          if (dropZone[0] === xCord && dropZone[1] === yCord) {
            isDropZone = true;
          }

          let isDragging = false;
          if (activatedMine[0] === xCord && activatedMine[1] === yCord) {
            isDragging= true;
          }

          return (
            <DropArea
              key={index}
              isDragging={isDragging}
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
    <div className="mine-row">
      {
        items.map((each, index) => {
          let yCord = index;

          let isActivated = false;
          if(activatedMine[0] === xCord && activatedMine[1] === yCord) {
            isActivated = true;
          }

          return (
            <Mine
              key={index}
              isActivated={isActivated}
              activateMine={activateMine}
              deactivateMine={deactivateMine}
              xCord={xCord}
              yCord={yCord}
            />
          );
        })
      }
    </div>
  </div>
);

export default Row;
