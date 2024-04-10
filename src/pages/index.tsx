import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";

// this is a house now it creating   //  when anything new in the house the house rebuild( state , props)
const Home = () => {
  const [posts, setPosts] = useState([]); // when state or props update in components then  it rerender

  useEffect(() => {
    const getAllPost = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ); // first fetch
      console.log("response--->", response);
      const data = await response.json(); // json() method works for get the json data , and convert the json into javascript object format
      console.log("data----->", data);
      setPosts(data);
    };
    getAllPost();
  }, []); // two parameter ( function , dependency) // state , props , empty [] ( dependencies)

  console.log("Post state---->", posts);
  return (
    <>
      <Navbar />
      <h1 className="text-gray-800 text-3xl font-semibold text-center my-5">
        All Posts
      </h1>
      <section className="grid grid-cols-4 gap-5 mx-20 my-14">
        {posts?.map((item: any) => {
          return (
            <div className="bg-blue-400/20 border border-blue-600 rounded-lg p-3 space-y-2 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="">
                <h1 className="text-3xl font-semibold text-gray-700">
                  {item?.id}
                </h1>
                <h3 className="text-lg font-semibold text-blue-900">
                  {item?.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">{item?.body}</p>
              <Link
                href={`post/${item?.id}`}
                className="text-slate-200 font-semibold hover:underline hover:text-blue-700 bg-red-500 p-1 rounded-lg inline-block "
              >
                Read more
              </Link>
            </div>
          );
        })}
      </section>
      <Footer />
    </>
  );
};

export default Home;
