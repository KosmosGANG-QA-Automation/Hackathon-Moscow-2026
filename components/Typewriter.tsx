"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ words }: { words: string[] }) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let w = 0;
    let len = words[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      len += deleting ? -1 : 1;
      setText(words[w].slice(0, len) || " ");

      let delay = deleting ? 35 : 75;
      if (deleting && len === 0) {
        deleting = false;
        w = (w + 1) % words.length;
      } else if (!deleting && len === words[w].length) {
        deleting = true;
        delay = 1800;
      }
      timer = setTimeout(step, delay);
    };

    timer = setTimeout(step, 1800);
    return () => clearTimeout(timer);
  }, [words]);

  return <span className="caret">{text}</span>;
}
