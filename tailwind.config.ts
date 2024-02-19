import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sora: ["Sora", "sans-serif"],
    },
    fontSize: {
      // 12px h-20px
      "paragraph-3": [
        "12px",
        {
          fontWeight: "400",
          lineHeight: "20px",
          letterSpacing: "0.32px",
        },
      ],
      "paragraph-3-600": [
        "12px",
        {
          fontWeight: "600",
          lineHeight: "20px",
          letterSpacing: "0.32px",
        },
      ],
      "paragraph-3-700": [
        "12px",
        {
          fontWeight: "700",
          lineHeight: "20px",
          letterSpacing: "0.32px",
        },
      ],
      "paragraph-3-800": [
        "12px",
        {
          fontWeight: "800",
          lineHeight: "20px",
          letterSpacing: "0.32px",
        },
      ],

      // 16px h-24px
      "paragraph-2": [
        "16px",
        {
          fontWeight: "400",
          lineHeight: "24px",
          letterSpacing: "0.32px",
        },
      ],
      "paragraph-2-600": [
        "16px",
        {
          fontWeight: "600",
          lineHeight: "24px",
          letterSpacing: "0.32px",
        },
      ],
      "paragraph-2-700": [
        "16px",
        {
          fontWeight: "700",
          lineHeight: "24px",
          letterSpacing: "0.32px",
        },
      ],
      "paragraph-2-800": [
        "16px",
        {
          fontWeight: "800",
          lineHeight: "24px",
          letterSpacing: "0.32px",
        },
      ],

      // 16px h-20px
      "button-text2": [
        "16px",
        {
          fontWeight: "400",
          lineHeight: "20px",
          letterSpacing: "0.32px",
        },
      ],
      "button-text2-600": [
        "16px",
        {
          fontWeight: "600",
          lineHeight: "20px",
          letterSpacing: "0.32px",
        },
      ],
      "button-text2-700": [
        "16px",
        {
          fontWeight: "700",
          lineHeight: "20px",
          letterSpacing: "0.32px",
        },
      ],
      "button-text2-800": [
        "16px",
        {
          fontWeight: "800",
          lineHeight: "20px",
          letterSpacing: "0.32px",
        },
      ],

      // 20px h-24px
      Underline: [
        "20px",
        {
          fontWeight: "400",
          lineHeight: "24px",
          letterSpacing: "-0.32px",
        },
      ],
      "Underline-600": [
        "20px",
        {
          fontWeight: "600",
          lineHeight: "24px",
          letterSpacing: "-0.32px",
        },
      ],
      "Underline-700": [
        "20px",
        {
          fontWeight: "700",
          lineHeight: "24px",
          letterSpacing: "-0.32px",
        },
      ],
      "Underline-800": [
        "20px",
        {
          fontWeight: "800",
          lineHeight: "24px",
          letterSpacing: "-0.32px",
        },
      ],
      "button-text": [
        "20px",
        {
          fontWeight: "400",
          lineHeight: "24px",
          letterSpacing: "0.32px",
        },
      ],
      "button-text-600": [
        "20px",
        {
          fontWeight: "600",
          lineHeight: "24px",
          letterSpacing: "0.32px",
        },
      ],
      "button-text-700": [
        "20px",
        {
          fontWeight: "700",
          lineHeight: "24px",
          letterSpacing: "0.32px",
        },
      ],
      "button-text-800": [
        "20px",
        {
          fontWeight: "800",
          lineHeight: "24px",
          letterSpacing: "0.32px",
        },
      ],

      // 20px h-28px
      "paragraph-1": [
        "20px",
        {
          fontWeight: "400",
          lineHeight: "28px",
          letterSpacing: "0.32px",
        },
      ],
      "paragraph-1-600": [
        "20px",
        {
          fontWeight: "600",
          lineHeight: "28px",
          letterSpacing: "0.32px",
        },
      ],
      "paragraph-1-700": [
        "20px",
        {
          fontWeight: "700",
          lineHeight: "28px",
          letterSpacing: "0.32px",
        },
      ],
      "paragraph-1-800": [
        "20px",
        {
          fontWeight: "800",
          lineHeight: "28px",
          letterSpacing: "0.32px",
        },
      ],

      // 16px h-20px
      "heading-h6": [
        "16px",
        {
          fontWeight: "400",
          lineHeight: "20px",
          letterSpacing: "-0.32px",
        },
      ],
      "heading-h6-600": [
        "16px",
        {
          fontWeight: "600",
          lineHeight: "20px",
          letterSpacing: "-0.32px",
        },
      ],
      "heading-h6-700": [
        "16px",
        {
          fontWeight: "700",
          lineHeight: "20px",
          letterSpacing: "-0.32px",
        },
      ],
      "heading-h6-800": [
        "16px",
        {
          fontWeight: "800",
          lineHeight: "20px",
          letterSpacing: "-0.32px",
        },
      ],

      // 20px h-24px
      "heading-h5": [
        "20px",
        {
          fontWeight: "400",
          lineHeight: "24px",
          letterSpacing: "-0.32px",
        },
      ],
      "heading-h5-600": [
        "20px",
        {
          fontWeight: "600",
          lineHeight: "24px",
          letterSpacing: "-0.32px",
        },
      ],
      "heading-h5-700": [
        "20px",
        {
          fontWeight: "700",
          lineHeight: "24px",
          letterSpacing: "-0.32px",
        },
      ],
      "heading-h5-800": [
        "20px",
        {
          fontWeight: "800",
          lineHeight: "24px",
          letterSpacing: "-0.32px",
        },
      ],

      // 20px h-28px
      "heading-h4": [
        "20px",
        {
          fontWeight: "400",
          lineHeight: "28px",
          letterSpacing: "-0.32px",
        },
      ],
      "heading-h4-600": [
        "20px",
        {
          fontWeight: "600",
          lineHeight: "28px",
          letterSpacing: "-0.32px",
        },
      ],
      "heading-h4-700": [
        "20px",
        {
          fontWeight: "700",
          lineHeight: "28px",
          letterSpacing: "-0.32px",
        },
      ],
      "heading-h4-800": [
        "20px",
        {
          fontWeight: "800",
          lineHeight: "28px",
          letterSpacing: "-0.32px",
        },
      ],

      // 28px h-32px
      "heading-h3": [
        "28px",
        {
          fontWeight: "400",
          lineHeight: "32px",
          letterSpacing: "-0.32px",
        },
      ],
      "heading-h3-600": [
        "28px",
        {
          fontWeight: "600",
          lineHeight: "32px",
          letterSpacing: "-0.32px",
        },
      ],
      "heading-h3-700": [
        "28px",
        {
          fontWeight: "700",
          lineHeight: "32px",
          letterSpacing: "-0.32px",
        },
      ],
      "heading-h3-800": [
        "28px",
        {
          fontWeight: "800",
          lineHeight: "32px",
          letterSpacing: "-0.32px",
        },
      ],

      // 32px h-40px
      "heading-h2": [
        "32px",
        {
          fontWeight: "400",
          lineHeight: "40px",
          letterSpacing: "-0.32px",
        },
      ],
      "heading-h2-600": [
        "32px",
        {
          fontWeight: "600",
          lineHeight: "40px",
          letterSpacing: "-0.32px",
        },
      ],
      "heading-h2-700": [
        "32px",
        {
          fontWeight: "700",
          lineHeight: "40px",
          letterSpacing: "-0.32px",
        },
      ],
      "heading-h2-800": [
        "32px",
        {
          fontWeight: "800",
          lineHeight: "40px",
          letterSpacing: "-0.32px",
        },
      ],

      // 36px h-44px
      "heading-h1": [
        "36px",
        {
          fontWeight: "400",
          lineHeight: "44px",
          letterSpacing: "-0.32px",
        },
      ],
      "heading-h1-600": [
        "36px",
        {
          fontWeight: "600",
          lineHeight: "44px",
          letterSpacing: "-0.32px",
        },
      ],
      "heading-h1-700": [
        "36px",
        {
          fontWeight: "700",
          lineHeight: "44px",
          letterSpacing: "-0.32px",
        },
      ],
      "heading-h1-800": [
        "36px",
        {
          fontWeight: "800",
          lineHeight: "44px",
          letterSpacing: "-0.32px",
        },
      ],

      // 40px h-48px
      "sub-heading": [
        "40px",
        {
          fontWeight: "400",
          lineHeight: "48px",
          letterSpacing: "-0.32px",
        },
      ],
      "sub-heading-600": [
        "40px",
        {
          fontWeight: "600",
          lineHeight: "48px",
          letterSpacing: "-0.32px",
        },
      ],
      "sub-heading-700": [
        "40px",
        {
          fontWeight: "700",
          lineHeight: "48px",
          letterSpacing: "-0.32px",
        },
      ],
      "sub-heading-800": [
        "40px",
        {
          fontWeight: "800",
          lineHeight: "48px",
          letterSpacing: "-0.32px",
        },
      ],

      // 28px h-32px
      "outilined-m": [
        "28px",
        {
          fontWeight: "400",
          lineHeight: "32px",
          letterSpacing: "-0.32px",
        },
      ],
      "outilined-m-600": [
        "28px",
        {
          fontWeight: "600",
          lineHeight: "32px",
          letterSpacing: "-0.32px",
        },
      ],
      "outilined-m-700": [
        "28px",
        {
          fontWeight: "700",
          lineHeight: "32px",
          letterSpacing: "-0.32px",
        },
      ],
      "outilined-m-800": [
        "28px",
        {
          fontWeight: "800",
          lineHeight: "32px",
          letterSpacing: "-0.32px",
        },
      ],

      // 28px h-32px
      "display-text-m": [
        "28px",
        {
          fontWeight: "400",
          lineHeight: "32px",
          letterSpacing: "-0.32px",
        },
      ],
      "display-text-m-600": [
        "28px",
        {
          fontWeight: "600",
          lineHeight: "32px",
          letterSpacing: "-0.32px",
        },
      ],
      "display-text-m-700": [
        "28px",
        {
          fontWeight: "700",
          lineHeight: "32px",
          letterSpacing: "-0.32px",
        },
      ],
      "display-text-m-800": [
        "28px",
        {
          fontWeight: "800",
          lineHeight: "32px",
          letterSpacing: "-0.32px",
        },
      ],

      // 48px h-56px
      outlined: [
        "48px",
        {
          fontWeight: "400",
          lineHeight: "56px",
          letterSpacing: "-0.32px",
        },
      ],
      "outlined-600": [
        "48px",
        {
          fontWeight: "600",
          lineHeight: "56px",
          letterSpacing: "-0.32px",
        },
      ],
      "outlined-700": [
        "48px",
        {
          fontWeight: "700",
          lineHeight: "56px",
          letterSpacing: "-0.32px",
        },
      ],
      "outlined-800": [
        "48px",
        {
          fontWeight: "800",
          lineHeight: "56px",
          letterSpacing: "-0.32px",
        },
      ],

      // 48px h-56px
      "display-text": [
        "48px",
        {
          fontWeight: "400",
          lineHeight: "56px",
          letterSpacing: "-0.32px",
        },
      ],
      "display-text-600": [
        "48px",
        {
          fontWeight: "600",
          lineHeight: "56px",
          letterSpacing: "-0.32px",
        },
      ],
      "display-text-700": [
        "48px",
        {
          fontWeight: "700",
          lineHeight: "56px",
          letterSpacing: "-0.32px",
        },
      ],
      "display-text-800": [
        "48px",
        {
          fontWeight: "800",
          lineHeight: "56px",
          letterSpacing: "-0.32px",
        },
      ],
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      neutral: "#404040",
      zinc: {
        100: "#F4F4F5",
        200: "#E4E4E7",
        300: "#D4D4D8",
        500: "#71717A",
        800: "#27272A",
      },
      error: "#EF4444",
    },
    boxShadow: {
      "card-shadow":
        "0px 6px 8px -6px rgba(24, 39, 75, 0.12), 0px 8px 16px -6px rgba(24, 39, 75, 0.08)",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
