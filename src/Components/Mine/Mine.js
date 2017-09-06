import React from 'react';

const Mine = ({
  isActivated,
  activateMine,
  deactivateMine,
  xCord,
  yCord,
  isHidden,
  hideMine,
  showMine,
}) => {

  const visibility = isActivated || isHidden ? 'hidden' : 'visible';

  const enterDrop = () => activateMine([xCord, yCord]);
  const cursorEnter = () => hideMine([xCord, yCord]);

  return (
    <div
      className={`mine ${visibility}`}
      onDragEnter={enterDrop}
      style={{left: `${(yCord*200)+60}px`}}
      onMouseEnter={cursorEnter}
    />
  );
};

export default Mine;
