import React, { MouseEventHandler } from "react";
import clsx from "clsx";

import { DropDownMenuData, DropdownMenuListItem } from "@/lib/types";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";

export const Dropdown = ({
  listData,
  listItems,
  variant = "ghost",
}: {
  variant: "ghost" | "default";
  listData: DropDownMenuData;
  listItems: DropdownMenuListItem[];
}) => {
  const classes = {
    default:
      "bg-violet-600 dark:bg-violet-300 text-background hover:bg-violet-900 dark:hover:bg-violet-100",
    ghost: "bg-transparent hover:bg-muted text-foreground",
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className={cn([clsx(classes[variant])])}>
            {listData.name}
            <listData.icon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{listData.displayMessage}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {listItems.map((listItem) => (
            <DropdownMenuItem
              className="cursor-pointer"
              key={listItem.name}
              onClick={listItem.onClick as MouseEventHandler<HTMLDivElement>}
            >
              <listItem.icon /> {listItem.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
