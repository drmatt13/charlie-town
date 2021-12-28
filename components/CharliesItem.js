import Link from "next/link";

const CharliesItem = ({ data: { url, name } }) => {
  return (
    <Link href={url}>
      <div className="relative mb-12 h-24 w-64 flex justify-center select-none float-left">
        <img
          className="pointer-events-none absolute top-0 h-full blur-sm"
          src={`http://www.google.com/s2/favicons?domain=${url}`}
          alt={name}
          draggable="false"
        />
        <style jsx>{`
          div {
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
              1px 1px 0 #000;
          }
        `}</style>
        <div className="w-1/3 mx-1/2 group cursor-pointer">
          <div className="absolute w-full h-full left-0 font-bold text-white text-2xl group-hover:text-3xl flex justify-center items-center z-10 pointer-events-none truncate transition-all">
            {name}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CharliesItem;
