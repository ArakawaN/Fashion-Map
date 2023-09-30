import Link from "next/link";

import { useRouter } from "next/router";

import { signOut, getAuth } from "firebase/auth";
import { useAuthContext } from "../firebase/authProvider";

const Nav = () => {
  const router = useRouter();

  const user = useAuthContext();

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

        {user && (
          <>
            <li>{user.displayName}</li>
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
