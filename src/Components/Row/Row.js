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
  hiddenMine,
  hideMine,
  showMine,
}) => {

  const rowItems = [];

  for(let i = 0; i < items.length; i++) {
    let yCord = i;

    let isDropZone = false;
    if (dropZone[0] === xCord && dropZone[1] === yCord) {
      isDropZone = true;
    }

    let isDragging = false;
    if (activatedMine[0] === xCord && activatedMine[1] === yCord) {
      isDragging= true;
    }

    if(i===0) {
      rowItems.push(
        <DropArea
          key={i+2000}
          isDragging={isDragging}
          isDropZone={isDropZone}
          xCord={xCord}
          yCord={yCord}
          setDropZone={setDropZone}
          selectTile={selectTile}
          deactivateMine={deactivateMine}
        />
      );
    }

    if(items[i] === 1) {
      rowItems.push(
        <SelectedTile
          key={i}
          xCord={xCord}
          yCord={yCord}
          selectedDragStart={selectedDragStart}
          selectedDragEnd={selectedDragEnd}
          draggedTile={draggedTile}
        />
      );
    }

    if(i!==0) {
      rowItems.push(
        <DropArea
          key={i+1000}
          isDragging={isDragging}
          isDropZone={isDropZone}
          xCord={xCord}
          yCord={yCord}
          setDropZone={setDropZone}
          selectTile={selectTile}
          deactivateMine={deactivateMine}
        />
      );
    }

  }

  return (

    <div className={'row'}>
      {
        rowItems
      }
      {
        items.indexOf(0) > -1
        ||
        (draggedTile.cord && draggedTile.cord[0] === xCord)
        ?
          items.map((each, index) => {
            let yCord = index;

            let isActivated = false;
            if(activatedMine[0] === xCord && activatedMine[1] === yCord) {
              isActivated = true;
            }

            let isHidden = false;
            if(hiddenMine[0] === xCord && hiddenMine[1] === yCord) {
              isHidden = true;
            }

            return (
              <Mine
                key={index}
                isActivated={isActivated}
                activateMine={activateMine}
                deactivateMine={deactivateMine}
                xCord={xCord}
                yCord={yCord}
                isHidden={isHidden}
                hideMine={hideMine}
                showMine={showMine}
              />
            );
          })
        :
          null
      }
    </div>
  );
};

export default Row;
