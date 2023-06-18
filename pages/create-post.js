import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/clinentApp";
import { useRouter } from "next/router";
import { getPosition } from "../lib/getPosition";

const CreatePost = () => {
  const router = useRouter();

  const [storeName, setStoreName] = useState();
  const [location, setLocation] = useState([]);
  const [review, setReview] = useState();

  const createPost = async () => {
    await addDoc(collection(db, "stores"), {
      storeName: storeName,
      location: location,
      review: review,
      auth: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    router.push("/");
  };

  return (
    <div className="flex flex-col h-full w-9/12 h-96 bg-gray-300 text-black p-3  m-8 gap-3 ">
      <h1 className="mb-3 text-2xl">お店登録</h1>
      <div className="flex flex-col mb-7 h-8 gap-2">
        <label htmlFor="storeName">店舗名</label>
        <input
          type="text"
          id="storeName"
          placeholder="店舗名"
          className="p-1"
          onChange={(e) => setStoreName(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-10 h-8 gap-2 ">
        <label htmlFor="storeName">場所</label>
        <input
          type="text"
          id="storeName"
          placeholder="場所"
          className="p-1"
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className="text-start text-sm" onClick={getPosition}>
          位置情報取得
        </button>
      </div>
      <div className="flex flex-col mt-2 mb-3 gap-2">
        <label htmlFor="review">レビュー</label>
        <textarea
          type="text"
          id="review"
          placeholder="レビュー"
          className="p-1"
          onChange={(e) => setReview(e.target.value)}
        />
      </div>
      <button className="text-center" onClick={createPost}>
        投稿
      </button>
    </div>
  );
};

export default CreatePost;
