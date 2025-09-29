"use client";

import { IconDots, IconFolder, IconShare3, IconTrash, type Icon } from "@tabler/icons-react";

import { DropdownMenu } from "../dropdown-menu";
import { Sidebar, useSidebar } from "./sidebar";

export function NavDocuments({
  items,
}: {
  items: {
    name: string;
    url: string;
    icon: Icon;
  }[];
}) {
  const { isMobile } = useSidebar();

  return (
    <Sidebar.Group className="group-data-[collapsible=icon]:hidden">
      <Sidebar.GroupLabel>Documents</Sidebar.GroupLabel>
      <Sidebar.Menu>
        {items.map((item) => (
          <Sidebar.MenuItem key={item.name}>
            <Sidebar.MenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </Sidebar.MenuButton>
            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <Sidebar.MenuAction showOnHover className="data-[state=open]:bg-accent rounded-sm">
                  <IconDots />
                  <span className="sr-only">More</span>
                </Sidebar.MenuAction>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content
                className="w-24 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenu.Item>
                  <IconFolder />
                  <span>Open</span>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <IconShare3 />
                  <span>Share</span>
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item variant="destructive">
                  <IconTrash />
                  <span>Delete</span>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </Sidebar.MenuItem>
        ))}
        <Sidebar.MenuItem>
          <Sidebar.MenuButton className="text-sidebar-foreground/70">
            <IconDots className="text-sidebar-foreground/70" />
            <span>More</span>
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
      </Sidebar.Menu>
    </Sidebar.Group>
  );
}
