"use client";

import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Branding } from "../common/Branding";
import { ThemeToggle } from "./Theme";
import { SearchInput } from "../common/SearchInput";

export const AppNavbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex justify-between gap-4 border-b bg-background px-4 py-4">
      {/* Icon Buttons */}
      <div className="flex">
        {/* Sidebar Icon Button */}
        <div className="">
          <Tooltip delayDuration={1000}>
            <TooltipTrigger asChild>
              <SidebarTrigger />
            </TooltipTrigger>
            <TooltipContent>Toggle Sidebar</TooltipContent>
          </Tooltip>
        </div>

        {/* Theme Icon Button */}
        <div className="hidden md:block">
          <Tooltip delayDuration={1000}>
            <TooltipTrigger asChild>
              <ThemeToggle />
            </TooltipTrigger>
            <TooltipContent>Change Theme</TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* Branding and Search Bar */}
      <div className="flex flex-1 justify-center gap-4 md:flex-none lg:w-72">
        <div className="md:hidden">
          <Branding />
        </div>
        <SearchInput />
      </div>

      {/* Avatar and Dropdown */}
      <div className="flex items-center gap-2">
        <div className="hidden md:inline-block">
          <span className="text-sm">John Bradshaw</span>
        </div>

        <Avatar className="inline-block h-8 w-8 overflow-clip rounded-full">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};
