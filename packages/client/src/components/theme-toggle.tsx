import { useTheme } from "@/components/providers/theme-provider";
import { Button, DropdownMenu } from "@org/shadcn";
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";

export const ModeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="ghost" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <DropdownMenu.Item
          onClick={() => {
            setTheme("light");
          }}
          className={theme === "light" ? "bg-accent" : ""}
        >
          <SunIcon className="mr-2 h-4 w-4" />
          Light
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={() => {
            setTheme("dark");
          }}
          className={theme === "dark" ? "bg-accent" : ""}
        >
          <MoonIcon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={() => {
            setTheme("system");
          }}
          className={theme === "system" ? "bg-accent" : ""}
        >
          <MonitorIcon className="mr-2 h-4 w-4" />
          System
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};
