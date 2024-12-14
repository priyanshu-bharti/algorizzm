import { useMemo } from "react";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  stackoverflowDark as darkTheme,
  stackoverflowLight as lightTheme,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

import c from "react-syntax-highlighter/dist/esm/languages/hljs/c";
import cpp from "react-syntax-highlighter/dist/esm/languages/hljs/cpp";
import java from "react-syntax-highlighter/dist/esm/languages/hljs/java";
import javascript from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import python from "react-syntax-highlighter/dist/esm/languages/hljs/python";
import typescript from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";

SyntaxHighlighter.registerLanguage("c", c);
SyntaxHighlighter.registerLanguage("cpp", cpp);
SyntaxHighlighter.registerLanguage("java", java);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("python", python);

/**
 * Provides an instance of syntax highlighter and the currently active syntax theme based on light/dark mode.
 * @param theme Theme string from the useTheme hook from `next/themes` package.
 * @returns Instance of Syntax Highlighter and syntax highlighter theme
 */
export const useSyntaxHighlighter = (theme?: string) => {
  if (!theme) theme = "light";

  // Memoize the value of the syntax highlighter unless user changes the theme.
  const getHighlighter = useMemo(
    () => ({
      SyntaxHighlighter,
      syntaxTheme: theme === "light" ? lightTheme : darkTheme,
    }),
    [theme],
  );

  return getHighlighter;
};
