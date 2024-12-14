"use client";

import clsx from "clsx";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Input } from "@/components/ui/input";
import { NoScrollArea } from "@/components/ui/no-scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  interviewNavigationData,
  resourcesNavigationData,
  toolsNavigationData,
} from "@/constants/common/navigation-data";

import { Branding } from "../common/Branding";

export function AppSidebar() {
  const pathName = usePathname();
  const styles = {
    activeNavItem: "underline text-violet-700 dark:text-violet-300",
    inactiveNavItem: "",
  };

  return (
    <Sidebar className="bg-sidebar p-2">
      <SidebarHeader>
        <div className="hidden md:block">
          <Branding />
        </div>
      </SidebarHeader>

      <NoScrollArea>
        <SidebarContent>
          <SidebarGroup>
            <Input
              className="block w-full md:hidden"
              placeholder="Search Tools/Resources"
            />
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Interview Preparation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {interviewNavigationData.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        className={clsx(
                          pathName === item.url
                            ? styles.activeNavItem
                            : styles.inactiveNavItem,
                        )}
                        href={item.url}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Available Tools</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {toolsNavigationData.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        className={clsx(
                          pathName === item.url
                            ? styles.activeNavItem
                            : styles.inactiveNavItem,
                        )}
                        href={item.url}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>More Resources</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {resourcesNavigationData.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} target="_blank">
                        <item.icon />
                        <span>{item.title}</span>
                        <LinkIcon className="opacity-35" />
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </NoScrollArea>
    </Sidebar>
  );
}
