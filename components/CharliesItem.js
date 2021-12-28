import Link from "next/link";

const CharliesItem = ({ data: { url, name } }) => {
  return (
    <Link href={url}>
      <div className="relative flex justify-center select-none">
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
        <div className="h-24 px-12 font-bold text-white text-2xl flex items-center z-10 pointer-events-none">
          {name}
        </div>
      </div>
    </Link>
  );
};

export default CharliesItem;
