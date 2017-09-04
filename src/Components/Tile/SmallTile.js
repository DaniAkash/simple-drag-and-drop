import React from 'react';

const SmallTile = ({ index, unselectedDragStart, unselectedDragEnd, draggedTile }) => {

  const startDrag = () => unselectedDragStart(index);
  const stopDrag = () => unselectedDragEnd(index);

  let isBeingDragged = '';

  if(
    draggedTile.type
    &&
    draggedTile.type === 'unselected'
    &&
    draggedTile.index === index
  ) {
    isBeingDragged = 'being-dragged';
  }

  return (
    <div
      className={`small-tile ${isBeingDragged}`}
      draggable={true}
      onDrag={startDrag}
      onDragEnd={stopDrag}
    />
  );
};

export default SmallTile;
