import Layout from "../components/Layout";
// import Posts from "../components/Posts";
import Maps from "../components/Maps";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/clientApp";
import Posts from "../components/Posts";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthContext } from "../firebase/authProvider";
import { AuthGuard } from "../firebase/authGuard";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <AuthGuard>
      <Nav />
      {/* <Maps />
      {stores && stores.map((store) => <Posts key={store.id} store={store} />)} */}
    </AuthGuard>
  );
}

// export async function getStaticProps() {
//   const getStores = await getDocs(collection(db, "stores"));
//   const stores = getStores.docs.map((doc) => ({
//     ...doc.data(),
//     id: doc.id,
//   }));
//   console.log(stores);
//   return {
//     props: { stores },
//   };
// }
