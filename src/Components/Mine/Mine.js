import React from 'react';

const Mine = ({
  isActivated,
  activateMine,
  deactivateMine,
  xCord,
  yCord,
}) => {

  const visibility = isActivated ? 'hidden' : 'visible';

  const enterDrop = () => activateMine([xCord, yCord]);

  return (
    <div
      className={`mine ${visibility}`}
      onDragEnter={enterDrop}
      style={{left: `${(yCord*200)+100}px`}}
    />
  );
};

export default Mine;
