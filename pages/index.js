import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
        h1::selection {
          color: red;
          background: yellow;
        }
      `}</style>
      <h1 className="inline-block p-8 mb-12 text-5xl font-bold hover:text-blue-500/10 transition-colors duration-300 ease-out">
        fucking homepage
      </h1>
      <div className="text-center">
        <div className="container flex flex-col items-start">
          <div>
            {data.map((data, index) => (
              <CharliesItem key={index} data={data} />
            ))}
          </div>
          <div className="flex w-full mb-12">
            <div>
              <Link href="https://kekma.net/">
                <div className="charlie_image mb-3 cursor-pointer hover:blur-sm transition-all duration-300 ease-out">
                  <Image src="/charlie1.jpg" width={200} height={200} />
                </div>
              </Link>
              <div className="relative bg-white w-[200px] h-16 group shadow">
                <p className="h-full w-full flex justify-center items-center">
                  Kill them all
                </p>
                <p className="bg-white absolute top-0 p-2 group-hover:opacity-0 transition-opacity duration-300">
                  A great day to go out and get some sunshine! 😎
                </p>
              </div>
            </div>
            <Link href="https://www.rollingstone.com/wp-content/uploads/2018/06/clown-update-82b264cf-694d-4804-be70-ff9e112b405d.jpg?resize=1800,1200&w=1200">
              <div
                className="flex-1 ml-5 cursor-pointer hover:invert"
                style={{
                  backgroundImage: `url("https://d1hfln2sfez66z.cloudfront.net/01-23-2020/t_feb1316d4bbd402584501d6ff95905c9_name_8BC68E20634D40AD8802255BEFFE4130.jpg")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
