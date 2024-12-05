import { defineEventHandler } from "h3";
import { h, renderSSR } from "nano-jsx";

import { atom, useAtomValue } from "@zedux/react";

const countAtom = atom("counter", 0);

export default defineEventHandler(() => {
  const count = useAtomValue(countAtom);

  const html = renderSSR(() => <h1>Nitro + nano-jsx works! {count}</h1>);
  return html;
});
