import React from 'react';

const SmallTile = ({ index, unselectedDragStart, unselectedDragEnd }) => {

  const startDrag = () => unselectedDragStart(index);
  const stopDrag = () => unselectedDragEnd(index);

  return (
    <div
      className="small-tile"
      draggable={true}
      onDrag={startDrag}
      onDragEnd={stopDrag}
    />
  );
};

export default SmallTile;
