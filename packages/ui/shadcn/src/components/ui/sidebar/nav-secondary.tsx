"use client";

import { type Icon } from "@tabler/icons-react";
import * as React from "react";

import { Sidebar } from "./sidebar";

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string;
    url: string;
    icon: Icon;
  }[];
} & React.ComponentPropsWithoutRef<typeof Sidebar.Group>) {
  return (
    <Sidebar.Group {...props}>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {items.map((item) => (
            <Sidebar.MenuItem key={item.title}>
              <Sidebar.MenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          ))}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  );
}
