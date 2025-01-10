"use client";

import clsx from "clsx";
import { Edit } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import Markdown from "react-markdown";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DsaQuestion } from "@/lib/types";
import { useSyntaxHighlighter } from "@/hooks/common/use-syntax-highlighter";
import { decodeCodeString } from "@/lib/utils";
import { DrawerTrigger } from "@/components/ui/drawer";

interface DsaQuestionTileProps {
  questionEntry: DsaQuestion;
  isExpanded: string[];
  handleToggle: () => void;
}

const DsaQuestionTile = ({
  questionEntry,
  isExpanded,
  handleToggle,
}: DsaQuestionTileProps) => {
  const { theme } = useTheme();
  const { SyntaxHighlighter, syntaxTheme } = useSyntaxHighlighter(theme);
  const colorClasses = {
    easy: "bg-green-600 dark:bg-green-300",
    medium: "bg-yellow-600 dark:bg-yellow-300",
    hard: "bg-red-600 dark:bg-red-300",
  };
  return (
    <Accordion
      type="multiple"
      value={isExpanded.length > 0 ? ["item-1"] : []}
      onValueChange={(value) => {
        if (value.length === 0 || value.includes("item-1")) handleToggle();
      }}
    >
      <AccordionItem
        className="rounded-xl border bg-background px-4 shadow-sm transition-colors hover:no-underline dark:shadow-none"
        value="item-1"
      >
        <AccordionTrigger>
          <div className="grid place-items-start gap-2">
            <div className="flex items-center gap-4">
              <div
                role="button"
                className="grid h-7 w-7 place-items-center rounded-md border transition-colors hover:bg-muted"
              >
                <DrawerTrigger asChild className="">
                  <Edit className="aspect-square h-4" />
                </DrawerTrigger>
              </div>
              <h2 className="text-lg font-bold">
                {questionEntry.questionName}
              </h2>
              <Badge
                className={clsx(
                  colorClasses[
                    questionEntry.difficulty as keyof typeof colorClasses
                  ],
                )}
              >
                {questionEntry.pattern}
              </Badge>
            </div>
            <div className="text-sm text-foreground/60">
              {questionEntry.problemStatement}
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          {questionEntry.solutions.length !== 0 ? (
            <Tabs defaultValue={questionEntry.solutions[0].name}>
              <TabsList>
                {questionEntry.solutions.map((sol, idx) => (
                  <TabsTrigger key={`${sol.name}${idx}`} value={sol.name}>
                    {sol.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {questionEntry.solutions.map((solution, idx) => (
                <TabsContent
                  className={""}
                  key={`${solution.answer}${idx}`}
                  value={solution.name}
                >
                  {solution.isCode ? (
                    <SyntaxHighlighter
                      language="typescript"
                      showLineNumbers
                      style={syntaxTheme}
                      wrapLongLines
                      customStyle={{ textWrap: "wrap", wordBreak: "break-all" }}
                    >
                      {decodeCodeString(solution.answer).trim()}
                    </SyntaxHighlighter>
                  ) : (
                    <Markdown className="text-wrap break-all">
                      {solution.answer}
                    </Markdown>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          ) : (
            <div>No solutions 🥺 Edit this question to add solution.</div>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default DsaQuestionTile;
