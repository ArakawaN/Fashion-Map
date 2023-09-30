import Head from "next/head";

export default function Layout({ children, title = "Default title" }) {
  return (
    <div className="flex flex-col  min-h-screen text-white font-sans bg-gray-300  ">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex flex-row flex-wrap justify-center items-center w-screen ">
        {children}
      </main>

      <footer className="w-full h-10 mt-5 flex justify-center items-end text-gray-500 text-sm  bottom-0 ">
        @Arakawa Naoya
      </footer>
    </div>
  );
}
