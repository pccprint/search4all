"use client";
import { getSearchUrl } from "@/app/utils/get-search-url";
import { ArrowRight, ArrowUp } from "lucide-react";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import { useSearchParams } from "next/navigation";
import Locale from "../locales";

interface SearchProps {
  useContinueButton?: boolean; // true: 使用“继续对话”按钮; false: 使用“新的搜索”按钮
}
export const Search: FC<SearchProps> = ({ useContinueButton = false }) => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const old_rid = decodeURIComponent(searchParams.get("rid") || "");
  const handleNewSearch = () => {
    // 可以在这里重置任何需要的状态，以准备一个新的搜索
    if (value) {
      setValue(""); // 清空搜索框
      router.push(getSearchUrl(encodeURIComponent(value), nanoid()));
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (value) {
          setValue("");
          const rid = useContinueButton ? old_rid : nanoid();
          router.push(getSearchUrl(encodeURIComponent(value), rid));
        }
      }}
    >
      <label
        className="relative bg-white flex items-center justify-center border ring-8 ring-zinc-300/20 py-2 px-2 rounded-lg gap-2 focus-within:border-zinc-300"
        htmlFor="search-bar"
      >
        <input
          id="search-bar"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
          placeholder={Locale.Search.placeholder}
          className="px-2 pr-6 w-full rounded-md flex-1 outline-none bg-white"
        />
        <button
          type="submit"
          className="w-auto py-1 px-2 bg-black border-black text-white fill-white active:scale-95 border overflow-hidden relative rounded-xl"
        >
          {useContinueButton ? <ArrowUp size={16} /> : <ArrowRight size={16} />}
        </button>
      </label>
    </form>
  );
};
