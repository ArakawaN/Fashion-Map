import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect, createContext, useContext } from "react";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    try {
      const auth = getAuth();
      return onAuthStateChanged(auth, (user) => {
        // console.log(user);
        setUser(user);
      });
    } catch (e) {
      alert(`エラーが発生しました。${e}`);
      setUser(undefined);
    }
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
