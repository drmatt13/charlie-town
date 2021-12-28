import { useState } from "react";
import Head from "next/head";

// components
import CharliesItem from "../components/CharliesItem";

export default function Index() {
  const [data, setData] = useState([
    {
      name: "Facebook",
      url: "http://www.facebook.com/",
    },
    {
      name: "Instagram",
      url: "http://www.instagram.com/",
    },
    {
      name: "Youtube",
      url: "http://www.youtube.com/",
    },
    {
      name: "Gmail",
      url: "http://www.gmail.com/",
    },
  ]);

  return (
    <>
      <Head>
        <title>Charlie Town</title>
      </Head>
      <style jsx>{`
        h1 {
          text-shadow: -1px -1px 0 #1111, 1px -1px 0 #1111, -1px 1px 0 #1111,
            1px 1px 0 #1111;
        }
      `}</style>
      <h1 className="p-8 text-5xl font-bold">fucking homepage</h1>
      <div className="text-center mt-8">
        <div className="container">
          {data.map((data, index) => (
            <CharliesItem key={index} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}
