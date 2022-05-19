const isInList = (element: any, list: any[]) => {
  for (let e of list) if (element[0] == e[0] && element[1] == e[1]) return true;
  return false;
};

export default isInList;
