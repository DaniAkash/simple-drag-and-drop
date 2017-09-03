import React from 'react';

const selectedTile = ({xCord, yCord, selectedDragStart, selectedDragEnd}) => {

  const startDrag = () => selectedDragStart([xCord, yCord]);
  const stopDrag = () => selectedDragEnd([xCord, yCord]);

  return (
    <div className={'selected-tile'} draggable={true} onDrag={startDrag} onDragEnd={stopDrag}/>
  );
};

export default selectedTile;
