import React from 'react';

const selectedTile = ({xCord, yCord, selectedDragStart, selectedDragEnd, draggedTile}) => {

  const startDrag = () => selectedDragStart([xCord, yCord]);
  const stopDrag = () => selectedDragEnd([xCord, yCord]);

  let isBeingDragged = '';

  if(
    draggedTile.type
    &&
    draggedTile.type === 'selected'
    &&
    draggedTile.cord[0] === xCord
    &&
    draggedTile.cord[1] === yCord
  ) {
    isBeingDragged = 'being-dragged';
  }

  return (
    <div
      className={`selected-tile ${isBeingDragged}`}
      draggable={true}
      onDrag={startDrag}
      onDragEnd={stopDrag}
    />
  );
};

export default selectedTile;
