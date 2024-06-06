import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      style={{ border: "none"}}
    >
      {theme === "light" ? (
        <>
          <Sun
            className="h-[1.2rem] w-[1.2rem] text-blue"
          />
          <span className="sr-only">Switch to dark mode</span>
        </>
      ) : (
        <>
          <Moon
            className="h-[1.2rem] w-[1.2rem] text-white"
          />
          <span className="sr-only">Switch to light mode</span>
        </>
      )}
    </Button>
  );
}
