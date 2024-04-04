"use client";
import { Footer } from "@/app/components/footer";
import { Logo } from "@/app/components/logo";
import { PresetQuery } from "@/app/components/preset-query";
import { Search } from "@/app/components/search";
import React from "react";
import { AllLangs, ALL_LANG_OPTIONS, changeLang, getLang } from "./locales";

export default function Home() {
  return (
    <div className="absolute inset-0 min-h-[500px] flex items-center justify-center">
      {/* 语言下拉菜单 */}
      <div className="absolute top-0 right-0 m-4">
        <select
          className="rounded border border-gray-300 text-zinc-400 bg-white p-1 shadow-sm text-sm"
          value={getLang()}
          onChange={(e) => {
            changeLang(e.target.value as any);
          }}
        >
          {AllLangs.map((lang) => (
            <option value={lang} key={lang}>
              {" "}
              {ALL_LANG_OPTIONS[lang]}{" "}
            </option>
          ))}
        </select>
      </div>
      <div className="relative flex flex-col gap-8 px-4 -mt-24">
        <Logo></Logo>
        <Search></Search>
        <div className="flex gap-2 flex-wrap justify-center">
          <PresetQuery query="Who said live long and prosper?"></PresetQuery>
          <PresetQuery query="Why do we only see one side of the moon?"></PresetQuery>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
