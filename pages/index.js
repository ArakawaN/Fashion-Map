import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
// ↓ CSR 用として初期化してあるものインポート
import firebase from "../firebase/clientApp";
import { doc, getDocs, serverTimestamp, setDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInAnonymously,
  sendEmailVerification,
} from "firebase/auth";
import { useRouter } from "next/router";
import GoogleLogin from "../components/GoogleLogin";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //  パスワード ベースのアカウントを作成する
  const createUser = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("名前とメッセージを入力してください");
      return;
    }
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        sendEmailVerification(user);
        alert("ユーザー登録完了しました。");
        // console.log(user);
        router.push("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorCode}:${errorMessage}`);
      });
    setEmail("");
    setPassword("");
  };

  const signInWithEmailAndPassword = async () => {
    e.preventDefault();
    const auth = getAuth();
    if (!email || !password) {
      alert("名前とメッセージを入力してください");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      router.push("/home");
    } catch (e) {
      alert(`エラーが発生しました。${e}`);
    }
  };

  //Firebase 匿名認証を行う
  const anonymouslyLogin = async () => {
    const auth = getAuth();
    await signInAnonymously(auth)
      .then(() => {
        // Signed in..
        router.push("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  };

  return (
    <div className="container">
      <Head>
        <title>Next.js / Firestore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="title">Fashion Map</h1>
      <p className="description">名前とメッセージを入力してください。</p>
      <div className="labelBox">
        <form>
          <label>
            メールアドレス：
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            パスワード：
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button onClick={createUser}>
            <a>Create User</a>
          </button>
          <button onClick={signInWithEmailAndPassword}>
            <a>LogIn</a>
          </button>
        </form>
      </div>

      <div>
        <Link href="/login">
          <a>アカウントがある方</a>
        </Link>
      </div>

      <div>
        <GoogleLogin />
      </div>

      <div>
        <button onClick={anonymouslyLogin}>ログインせず始める</button>
      </div>
    </div>
  );
}
