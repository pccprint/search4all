import React, { FC } from "react";

export const Logo: FC = () => {
  return (
    <div className="flex gap-4 items-center justify-center cursor-default select-none relative">
      <div className="h-10 w-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-search"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="#00abfb"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      </div>
      <div className="text-center font-medium text-2xl md:text-3xl text-zinc-950 relative text-nowrap">
        Search4All
      </div>
      <div className="transform scale-75 origin-left border items-center rounded-lg bg-gray-100 px-2 py-1 text-xs font-medium text-zinc-600">
        beta
      </div>
    </div>
  );
};
