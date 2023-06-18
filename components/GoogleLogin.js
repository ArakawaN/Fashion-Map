import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { auth, provider } from "../firebase/clientApp";
import Cookie from "universal-cookie";
import { useRouter } from "next/router";
import Image from "next/image";

const cookie = new Cookie();

const Login = () => {
  const router = useRouter();

  const loginWithGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const options = { path: "/" };
        cookie.set("access_token", token, options);
        router.push("/home");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`エラー:${errorMessage}`);
      });
  };
  return (
    <div>
      <p>Googleログイン</p>
      <Image
        src="/google.png"
        width={30}
        height={30}
        priority={false}
        alt="google icon"
        onClick={loginWithGoogle}
      />
    </div>
  );
};

export default Login;
