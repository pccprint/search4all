const cn = {
  Err: {
    429: "请求过于频繁，请稍后再试",
    500: "抱歉，我们可能负载过重，请稍后再试。",
  },
  Title: {
    home: "首页",
  },
  Search: {
    placeholder: "有问必答...",
  },
  Footer: {
    statement: "这是由大语言模型提供的答案, 请务必核实正确性。",
  },
  Relates: {
    no_related_questions: "没有相关问题。",
    related: "相关",
  },
  Answer: {
    answer: "答案",
  },
  Sources: {
    sources: "来源",
  },
};

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type LocaleType = typeof cn;
export type PartialLocaleType = DeepPartial<typeof cn>;

export default cn;
