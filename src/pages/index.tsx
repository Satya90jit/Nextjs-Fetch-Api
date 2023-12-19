import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { useEffect, useState } from "react";

// this is a house now it creating   //  when anything new in the house the house rebuild( state , props)

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPost = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ); // first fetch

      // console.log("response--->", response);

      const data = await response.json();

      // console.log("data---->", data);
      setPosts(data);
    };
    getAllPost();
  }, []); // two parameter ( function , dependency) // state , props , empty [] ( dependencies)

  console.log("Post state---->", posts);
  return (
    <>
      <Navbar />
      <section className="grid grid-cols-4 gap-5 mx-20 my-20">
        {posts?.map((item: any) => {
          return (
            <div className="bg-blue-400/20 border border-blue-600 rounded-lg p-3 space-y-2">
              <h3 className="text-lg font-semibold text-blue-900">
                {item?.title}
              </h3>
              <p className="text-gray-600 text-sm">{item?.body}</p>
            </div>
          );
        })}
      </section>
      <Footer />
    </>
  );
}
