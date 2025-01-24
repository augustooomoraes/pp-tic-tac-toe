"use client"
 
import { useState, useEffect} from "react"
import { useTheme } from "next-themes";
import { FaRegMoon, FaRegSun } from "react-icons/fa6";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="
        flex items-center
        px-2 rounded-md
        hover:text-link-hover dark:hover:text-link-hoverDark
        hover:bg-surface-secondary dark:hover:bg-surface-secondaryDark
        transition-colors duration-300
        hover:cursor-pointer
      "
      onClick={
        mounted
          ? () => setTheme(theme === 'dark' ? 'light' : 'dark')
          : undefined
      }
    >
      {
        mounted
          ? theme === "dark"
            ? <FaRegSun className="w-4 md:w-8"/>
            : <FaRegMoon className="w-4 md:w-8"/>
          : <></>
      }
    </div>
  )
}
