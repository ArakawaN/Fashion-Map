import { useRouter } from "next/router";
import { useAuthContext } from "./authProvider";

export const AuthGuard = ({ children }) => {
  const user = useAuthContext();
  const router = useRouter();

  if (user === undefined) {
    return <div>読み込み中...</div>;
  }

  if (user === null) {
    router.push("/");
    return null;
  }

  return <>{children}</>;
};
