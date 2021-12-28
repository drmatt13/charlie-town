import Link from "next/link";

const CharliesItem = ({ data: { url, name } }) => {
  return (
    <Link href={url}>
      <div className="relative mb-12 flex justify-center select-none float-left">
        <img
          className="cursor-pointer absolute top-0 h-full blur-sm"
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
        <div className="w-64 h-24 px-12 font-bold text-white text-2xl flex justify-center items-center z-10 pointer-events-none truncate">
          {name}
        </div>
      </div>
    </Link>
  );
};

export default CharliesItem;
