import React from "react";

const Store = () => {
  return <div></div>;
};

export default Store;

export async function getStaticProps() {
  const getStores = await getDocs(collection(db, "stores"));
  const stores = getStores.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log(stores);
  return {
    props: { stores },
  };
}
