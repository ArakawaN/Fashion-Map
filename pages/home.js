// import Posts from "../components/Posts";
import Maps from "../components/Maps";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/clientApp";
import Posts from "../components/Posts";

import { AuthGuard } from "../firebase/authGuard";
import Nav from "../components/Nav";
import { useEffect, useState, createContext, useContext } from "react";

const StoreContext = createContext();

export default function Home() {
  const [data, setData] = useState();
  const [addStore, setAddStore] = useState("");
  useEffect(() => {
    const getstores = async () => {
      try {
        const getStores = await getDocs(collection(db, "stores"));
        const stores = await getStores.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(stores);
        setData(stores);
        return stores;
      } catch (e) {
        alert(e);
      }
    };
    getstores();
  }, []);

  return (
    <AuthGuard>
      <StoreContext.Provider value={(addStore, setAddStore)}>
        <Nav />
        <Maps />
        {data ? (
          data.map((store) => (
            <Posts
              key={store.id}
              store={store}
              onClick={() => setAddStore(store)}
            />
          ))
        ) : (
          <div>読み込み中...</div>
        )}
      </StoreContext.Provider>
    </AuthGuard>
  );
}

export const useStoreContext = () => useContext(StoreContext);
