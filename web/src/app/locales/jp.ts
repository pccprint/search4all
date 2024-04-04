import { LocaleType } from "./index";

const jp: LocaleType = {
  Err: {
    429: "申し訳ありませんが、最近のリクエストが多すぎます。後ほど再試行してください。",
    500: "申し訳ありませんが、サーバーが過負荷の可能性があります。後ほど再試行してください。",
  },
  Title: {
    home: "ホーム",
  },
  Search: {
    placeholder: "何でも聞いてください...",
  },
  Footer: {
    statement:
      "回答は大規模な言語モデルによって生成されます。正確性を再確認してください。",
  },
  Relates: {
    no_related_questions: "関連する質問はありません。",
    related: "関連性",
  },
  Answer: {
    answer: "回答",
  },
  Sources: {
    sources: "情報源",
  },
};

export default jp;
