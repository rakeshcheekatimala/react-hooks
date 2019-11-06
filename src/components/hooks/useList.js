import { useState } from "react";

function useList(init) {
  const [list, setNames] = useState(init);
  return {
    list,
    removeItem(name) {
      let filteredList = list.filter(v => v.firstName !== name);
      setNames(filteredList);
    },
    updateItem(index, newVal) {
      let copyList = { ...list };
      copyList[index].firstName = newVal;
    }
  };
}

export default useList;
