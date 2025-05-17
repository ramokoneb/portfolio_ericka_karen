
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#6CAAD9",
          dark: "#1A3554",
          light: "#94C1E7",
          darker: "#122D4D"
        },
        secondary: {
          DEFAULT: "#94C1E7",
          foreground: "#1A3554"
        },
        muted: {
          DEFAULT: "#94C1E7",
          foreground: "#122D4D"
        },
        accent: {
          DEFAULT: "#6CAAD9",
          foreground: "#1A3554"
        },
        card: "hsl(var(--card))",
        popover: "hsl(var(--popover))",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            h1: {
              fontSize: '1.75rem',
              lineHeight: '2rem',
              fontWeight: '700',
            },
            h2: {
              fontSize: '1.5rem',
              lineHeight: '1.75rem',
              fontWeight: '600',
            },
            h3: {
              fontSize: '1.25rem',
              lineHeight: '1.5rem',
              fontWeight: '600',
            },
            p: {
              fontSize: '1rem',
              lineHeight: '1.5rem',
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
