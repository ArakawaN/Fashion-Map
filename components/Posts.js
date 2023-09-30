import Link from "next/link";
import { useStoreContext } from "../pages/home";

const Posts = ({ store }) => {
  const { addStore, setAddStore } = useStoreContext();

  console.log(store.id);
  return (
    <div className="flex   justify-center items-center  h-80  w-1/3 bg-white text-black bg-gray-800  mt-10 mx-10 p-10 ">
      <Link href={`/store/{store.id}`}>
        <div className=" p-4">
          <h1 className="m-3 ">{store.storeName}</h1>
          <p>場所:{store.location}</p>
          <div>
            <h2>レビュー</h2>
            {/* <p>{store.review}</p> */}
          </div>

          {/* <p>{store.auth.username}</p> */}
        </div>
      </Link>
    </div>
  );
};

export default Posts;
