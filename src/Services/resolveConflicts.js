const resolveConflicts = (container, cord) => {

  const x = cord[0], y = cord[1];
  if(container[x][y]) {

    for(let i = 0; i < container[x].length; i++) {
      if(!container[x][i]) {
        container[x][i] = 1;
        break;
      }
    }

  } else {
    container[x][y] = 1;
  }

  return container;
};

export default resolveConflicts;
