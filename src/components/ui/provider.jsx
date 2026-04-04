import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"

// Disable Chakra UI's CSS reset (preflight) so it doesn't break your pure Tailwind/CSS globals!
const customSystem = createSystem(defaultConfig, {
  preflight: false,
})

export function Provider(props) {
  return (
    <ChakraProvider value={customSystem}>
      {/* Force light mode to prevent dark-mode backgrounds from overriding your app */}
      <ThemeProvider attribute="class" forcedTheme="light" disableTransitionOnChange>
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  )
}
