import React from "react";

const Store = () => {
  const store = useStoreContext();
  console.log(store);

  if (!store) {
    return <div>読み込み中...</div>;
  }
  return <div>{store.storeName}</div>;
};

export default Store;
