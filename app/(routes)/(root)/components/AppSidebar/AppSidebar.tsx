"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";

import { routesPlatform, routesTeacher } from "./AppSidebar.data";

export function AppSidebar() {
  const state = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/icon.png" alt="logo" width={36} height={36} />
          {state.open && <span className="text-xl font-semibold">Academy</span>}
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarMenu className="space-y-2">
            <SidebarMenuItem>
              {routesPlatform.map(({ title, url, icon }) => (
                <SidebarMenuButton className="mb-2" key={title} asChild>
                  <Link href={url} className="flex items-center gap-2">
                    <div className="p-1 rounded-md">{icon}</div>
                    <span>{title}</span>
                  </Link>
                </SidebarMenuButton>
              ))}
            </SidebarMenuItem>
          </SidebarMenu>

          <SidebarMenu className="mt-4">
            <SidebarGroupLabel>Teacher</SidebarGroupLabel>
            <SidebarMenuItem>
              <SidebarMenuSub>
                {routesTeacher.map(({ title, url, icon }) => (
                  <SidebarMenuSubItem className="mb-2" key={title}>
                    <SidebarMenuSubButton
                      href={url}
                      className="flex items-center gap-2"
                    >
                      <div className="p-1 rounded-md">{icon}</div>
                      <span>{title}</span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
