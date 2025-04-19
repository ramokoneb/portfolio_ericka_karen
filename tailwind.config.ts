
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
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        'nerd-purple': '#1A1F2C',
        'nerd-accent': '#8B5CF6',
        'cult-gold': '#FFD700',
        'tech-blue': '#1EAEDB',
        'matrix-green': '#00FF41',
      },
      backgroundImage: {
        'circuit-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.8 8.544 15.214 9.96l9.9-9.96h-2.77zm22.284 0L53.8 9.173 52.384 10.59l-9.9-9.9h2.143zm-16.627 0L17.8 10.2 19.214 11.617 29.757 0h-1.757zm10.97 0L48.8 11.83 47.384 13.244l-11.9-11.9h2.126zM33.313 0L21.8 11.513l1.414 1.414L34.87 0h-1.557zm-16.627 0L6.5 10.186l1.414 1.415L19.57 0h-2.884zm10.97 0L18.8 8.856 20.214 10.27 30.757 0h-3.1zM0 0l.828.828-1.415 1.415L0 2.828V0zm29.813 0L19 10.813 20.414 12.23 32.87 0h-3.057zm5.657 0L24.8 10.67l1.414 1.415L37.87 0h-2.4zM0 5.373l.828.828-1.415 1.415L0 8.2V5.374zm0 5.656l.828.828-1.415 1.415L0 13.86v-2.83zm0 5.657l.828.828-1.415 1.415L0 19.515v-2.83zm0 5.657l.828.828-1.415 1.415L0 25.172v-2.83zm0 5.657l.828.828-1.415 1.415L0 30.83v-2.83zm0 5.657l.828.828-1.415 1.415L0 36.487v-2.83zm0 5.657l.828.828-1.415 1.415L0 42.144v-2.83zm0 5.656l.828.828-1.415 1.415L0 47.8v-2.83zm0 5.657l.828.828-1.415 1.415L0 53.456v-2.83zm0 5.657l.828.828-1.415 1.415L0 59.112v-2.83zM54.627 60l.83-.828-1.415-1.415L51.8 60h2.827zm-49.254 0l-.83-.828L5.96 57.757 8.2 60H5.374zm43.597 0l3.657-3.657-1.414-1.414L46.143 60h2.828zm-37.94 0L7.372 56.343 8.787 54.93 13.857 60H11.03zm32.284 0L49.8 53.515l-1.414-1.414-7.9 7.9h2.83zm-26.657 0L10.2 53.515l1.414-1.414 7.9 7.9h-2.83zm5.657 0L13.8 51.456l1.414-1.414 9.9 9.9h-2.77zm22.284 0L53.8 50.827l-1.414-1.414-9.9 9.9h2.143zm-16.627 0L17.8 49.8l1.414-1.414L29.757 60h-1.757zm10.97 0L48.8 48.17l-1.414-1.414-11.9 11.9h2.126zm-16.627 0l-11.9-11.9 1.414-1.414L34.87 60h-1.557zm-5.657 0L6.5 49.814l1.414-1.414L19.57 60h-2.884zm10.97 0L18.8 51.144l1.414-1.414L30.757 60h-3.1zM0 60v-2.828l2.828 2.828H0zm29.813 0L19 49.187l1.414-1.414L32.87 60h-3.057zm5.657 0L24.8 49.33l1.414-1.414L37.87 60h-2.4z' fill='rgba(139, 92, 246, 0.05)' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        matrix: {
          '0%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
          '100%': { opacity: '0.3' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #8B5CF6' },
          '100%': { boxShadow: '0 0 20px #8B5CF6' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'matrix-fade': 'matrix 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
