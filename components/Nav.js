import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { auth, provider } from "../firebase/clientApp";
import { signOut, signInWithPopup, getAuth } from "firebase/auth";
import { useAuthContext } from "../firebase/authProvider";

const Nav = () => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(true);

  const user = useAuthContext();
  console.log(user);

  // console.log(user.auth.displayname);

  // const logIn = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const displayName = result.user.displayName;
  //       localStorage.setItem("isAuth", true);
  //       setIsAuth(true);
  //       router.push("/home");
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       alert(`エラー:${errorMessage}`);
  //     });
  // };

  // const logOut = () => {
  //   signOut(auth)
  //     .then(() => {
  //       localStorage.clear();
  //       setIsAuth(false);
  //       alert("ログアウトしました");
  //     })
  //     .catch((e) => {
  //       alert(`エラー:${e}`);
  //     });
  // };

  const logOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      alert("ログアウトしました");
      router.push("/");
    } catch (e) {
      alert(`エラーが発生しました。${e}`);
    }
  };

  return (
    <nav className="flex justify-between bg-gray-400 w-full h-12 p-2 mb-10">
      <h1 className="text-2xl ml-5 ">Fashion Map</h1>
      <ul className="flex flex-row justify-center items-center w-auto">
        <li className="mx-5">
          <Link href="/home">
            <a>Home</a>
          </Link>
        </li>

        {/* {user ? (
          <li className="mx-5">
            <button onClick={logIn}>logIn</button>
          </li>
        ) : (
          <>
            <li className="mx-5">
              <button onClick={logOut}>logout</button>
            </li>
            <li className="mx-5">
              <Link href="/create-post">
                <a>Post</a>
              </Link>
            </li>
          </>
        )} */}

        {user && (
          <>
            <li>{user.displayName}さん</li>
            <li>
              <button onClick={logOut}>ログアウト</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
