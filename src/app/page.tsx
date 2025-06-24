import React from "react";

const Home = () => {
  // h-[calc(100vh-52px)]
  return (
    <div className=" h-[690px] rounded-b-md flex flex-col pt-20 gap-2 items-center text-48px 2xl:text-[44px] w-full bg-gray-300">
      Box width - 1536px
      <div className="flex flex-col gap-1 items-center 2xl:hidden">
        <p>Hello from Home </p>
        <p>Text Size - 48px</p>
      </div>
      <div className="hidden flex-col gap-1 items-center 2xl:flex">
        <p>Hello from Home </p>
        <p>Text Size - 44px</p>
      </div>
      overall height - 742px
    </div>
  );
};

export default Home;
