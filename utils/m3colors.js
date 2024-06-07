import { argbFromHex, themeFromSourceColor, applyTheme } from "https://esm.run/@material/material-color-utilities";

// Get the theme from a hex color
const theme = themeFromSourceColor(argbFromHex('#00427f'));

// Check if the user has dark mode turned on
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Apply the theme to the body by updating custom properties for material tokens
applyTheme(theme, {target: document.body, dark: systemDark});