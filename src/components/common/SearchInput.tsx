/* eslint-disable react/display-name */
"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

import { Input } from "@/components/ui/input";
import { getHostOsName } from "@/lib/utils";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { DialogTitle } from "../ui/dialog";
import {
  interviewNavigationData as interviewNavs,
  resourcesNavigationData as resourcesNavs,
  toolsNavigationData as toolsNavs,
} from "@/constants/common/navigation-data";
import { useTheme } from "next-themes";

export function SearchInput() {
  const [isMac, setIsMac] = useState(false);
  const [open, setOpen] = useState(false);

  const { theme, setTheme } = useTheme();

  const handleShowDialog = () => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  };

  const handleGetOsName = () => {
    setIsMac(getHostOsName() === "MacOS");
  };

  const handleCommandSelect = (url: string) => {
    setOpen(false);
    redirect(url);
  };

  useEffect(handleShowDialog, []);
  useEffect(handleGetOsName, []);

  return (
    <div className="w-full max-w-sm">
      <div className="relative">
        <Input
          type="search"
          id="search"
          placeholder="Search Resources"
          className="pr-12"
          onFocus={() => setOpen(true)}
        />
        <kbd className="pointer-events-none absolute right-1.5 top-2.5 hidden h-5 select-none items-center gap-1 rounded-md border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">{isMac ? "⌘" : "Ctrl"}</span>K
        </kbd>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle hidden>Search for Tools or Resources</DialogTitle>
        <CommandInput placeholder="Search for Tools/Resources" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Common Actions">
            <CommandItem
              onSelect={() => {
                setTheme(theme === "light" ? "dark" : "light");
                setOpen(false);
              }}
            >
              Toggle Dark Mode
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Interview Prepration">
            {interviewNavs.map((navData) => (
              <CommandItem
                key={navData.url}
                onSelect={() => handleCommandSelect(navData.url)}
              >
                {navData.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Tools">
            {toolsNavs.map((navData) => (
              <CommandItem
                key={navData.url}
                onSelect={() => handleCommandSelect(navData.url)}
              >
                {navData.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="External Resources">
            {resourcesNavs.map((navData) => (
              <CommandItem
                key={navData.url}
                onSelect={() => handleCommandSelect(navData.url)}
              >
                {navData.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
