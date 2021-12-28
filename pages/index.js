import { useEffect, useRef } from "react";

export default function Home() {
  return (
    <>
      <style jsx>{`
        .snap-x::-webkit-scrollbar {
          // display: none;
        }
      `}</style>
      <div className="h-full pt-[4rem]">
        <div className="w-screen flex overflow-x-auto h-96 bg-pink-400 px-[25vw] gap-8 snap-x">
          <div className="bg-sky-500 w-[calc(100vw/2)] aspect-video snap-center"></div>
          <div className="bg-sky-500 w-[calc(100vw/2)] aspect-video snap-center"></div>
          <div className="bg-sky-500 w-[calc(100vw/2)] aspect-video snap-center"></div>
        </div>
      </div>
    </>
  );
}
