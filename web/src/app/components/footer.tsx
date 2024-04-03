import { Mails } from "lucide-react";
import { FC } from "react";
import Locale from "../locales";
export const Footer: FC = () => {
  return (
    <div className="text-center flex flex-col items-center text-xs text-zinc-700 gap-1">
      <div className="text-zinc-400">{Locale.Footer.statement}</div>
      <div className="flex gap-2 justify-center">
        <div>
          <a
            className="text-blue-500 font-medium inline-flex gap-1 items-center flex-nowrap text-nowrap"
            href="https://lepton.ai/"
          >
            <Mails size={8} />
            Lepton AI
          </a>
        </div>
        <div>if you need a performant and scalable AI cloud!</div>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 mt-2 text-zinc-400">
        <a
          className="hover:text-zinc-950"
          href="https://github.com/fatwang2/search4all"
        >
          Github
        </a>
        <a
          className="hover:text-zinc-950"
          href="https://twitter.com/fatwang2ai"
        >
          Twitter
        </a>
      </div>
    </div>
  );
};
