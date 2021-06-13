import React, { useImperativeHandle, Ref } from "react";

type ListProps<ItemType> = {
  items: ItemType[];
  innerRef?: Ref<{ yideng(item: ItemType): void }>;
};

function App<ItemType>(props: ListProps<ItemType>) {
  useImperativeHandle(props.innerRef, () => ({
    yideng() {},
  }));

  return null;
}
export default App;
