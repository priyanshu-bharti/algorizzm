"use client";

import {
  Download,
  FileJson,
  FileSpreadsheet,
  Plus,
  Share,
  SquarePen,
} from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AddEntryButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-violet-600 dark:bg-violet-300">
          Add entry <Plus />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Create New</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SquarePen /> Create New Entry
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FileSpreadsheet /> Import Bulk From XLSX
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FileJson /> Import Bulk From JSON
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Download /> Download Import Template
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Share /> Export JSON
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddEntryButton;
