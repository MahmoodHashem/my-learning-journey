import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "My Learning Journey",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "misterxcrypt.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Offside",
        body: "Overpass",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f8fafc",         // Very light blue-tinted white
          lightgray: "#e2e8f0",     // Light blue-gray
          gray: "#94a3b8",          // Medium blue-gray
          darkgray: "#475569",      // Darker blue-gray
          dark: "#1e293b",          // Very dark blue
          secondary: "#3b82f6",     // Vibrant blue
          tertiary: "#60a5fa",      // Lighter blue
          highlight: "rgba(59, 130, 246, 0.15)", // Transparent blue highlight
          textHighlight: "#3b82f688", // Semi-transparent blue text highlight
        },
        darkMode: {
          light: "#0f172a",         // Dark navy blue background
          lightgray: "#1e293b",     // Slightly lighter navy
          gray: "#64748b",          // Medium blue-gray
          darkgray: "#cbd5e1",      // Light blue-gray
          dark: "#f1f5f9",          // Off-white with blue tint
          secondary: "#60a5fa",     // Bright blue accent
          tertiary: "#93c5fd",      // Lighter blue accent
          highlight: "rgba(96, 165, 250, 0.2)", // Soft blue highlight
          textHighlight: "#3b82f6",  // Blue text highlight
        }
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
