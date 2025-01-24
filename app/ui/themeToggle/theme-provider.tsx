"use client"
 
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // const [mounted, setMounted] = React.useState(false);

  // React.useEffect(() => {
  //   setMounted(true); // Wait for hydration to complete
  // }, []);

  // if (!mounted) {
  //   return <div suppressHydrationWarning />; // Prevent rendering until hydration
  // }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
