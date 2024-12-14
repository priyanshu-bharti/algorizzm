/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import dynamic from "next/dynamic";

import { Dropdown } from "@/components/common/Dropdown";
import { PageHeader } from "@/components/common/PageHeader";
import { Skeleton } from "@/components/ui/skeleton";
import { dsaDropdownMenu } from "@/constants/data-structures-algorithms/constants";
import { useCollapseTile } from "@/hooks/data-structures-algorithms/use-collapse-tile";
import { useQuestions } from "@/hooks/data-structures-algorithms/use-questions";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Plus } from "lucide-react";

const DsaQuestionTile = dynamic(
  () =>
    import("@/components/widgets/data-structures-algorithms/DsaQuestionTile"),
  { ssr: false, loading: () => <Skeleton className="h-44" /> },
);

export default function DataStructuresAlgorithmsPage() {
  const { questions } = useQuestions();

  const { expandedTiles, handleCollapseAll, handleExpandAll, toggleQuestion } =
    useCollapseTile();

  const dropdownMenuActions = {
    expandAll: () => handleExpandAll(questions),
    collapseAll: () => handleCollapseAll(questions),
    bulkExcel: () => {},
    bulkJson: () => {},
    import: () => {},
    export: () => {},
  };

  const dropdownListItems = dsaDropdownMenu.listItem.map((item) => ({
    ...item,
    onClick:
      dropdownMenuActions[item.onClick as keyof typeof dropdownMenuActions],
  }));

  return (
    <div className="grid gap-4">
      <Drawer>
        <PageHeader>
          <PageHeader.Heading>Algorithms & Data Structures</PageHeader.Heading>
          <PageHeader.Actions>
            <Dropdown
              listData={dsaDropdownMenu.data}
              listItems={dropdownListItems}
              variant={"ghost"}
            />
            <DrawerTrigger className="flex items-center justify-center gap-1 rounded-lg bg-violet-700 px-4 py-2 text-sm text-background transition-colors hover:bg-violet-900 dark:bg-violet-300 dark:hover:bg-violet-200">
              Add Question <Plus className="h-4 w-4" />
            </DrawerTrigger>
          </PageHeader.Actions>
        </PageHeader>

        {questions.map((question) => (
          <DsaQuestionTile
            isExpanded={
              expandedTiles.get(question.id) ? ["item-" + question.id] : []
            }
            questionEntry={question}
            key={question.id}
            handleToggle={() => toggleQuestion(question.id)}
          />
        ))}

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <div>Cancel</div>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
