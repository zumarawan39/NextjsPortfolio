  import type { Config } from "tailwindcss";

  export default {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/stories/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      screens: {
        sm: { min: '250px', max: '576px' },
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        md: { min: '768px' },
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        lg: { min: '976px' },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        xl: { min: '1280px' },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        '2xl': { min: '1440px' },
      },
      // Add or modify the fontWeights property
      colors: {
        DEFAULT: '#F37B37',
        primary: '#14B8A6 ',
        secondary: '#F1F5F9',
        success: '#458F0E',
        warning: '#FFC008',
        danger: '#DC3545',
        white: '#fff',
        black: '#000',
        transparent: 'transparent',
        'white-opacity-8': 'rgba(255,255,255,0.65)',
        'black-opacity-6': 'rgba(0,0,0,0.65)',
        blue: '#1f75cb',
        teal: '#1e7a89',
        purple: '#2a5aa4',
        red: '#DC3545',
        'red-100': '#ffeeef',
        'red-200': '#ffdcdf',
        orange: '#F37B37',
        green: '#198754',
        'green-500': '#176D6D',
        'sky-blue': '#0DCAF0',
        'gray-dark': '#212529',
        gray: '#6C757D',
        'gray-light': '#9C9C9C',
        'gray-300': '#666666',
        'blue-100': '#E1EFFE',
        'blue-800': '#2E55B5',
        'gray-100': '#F3F4F6',
        'gray-200': '#DDDDDD',
        'gray-800': '#34354B',
        'gray-900': '#333333',
      },
      
      darkMode: 'class', 
      fontSize: {
        xsm: "10px",
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "22px",
        "2.5xl": "28px",
        "3xl": "30px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "60px",
        "7xl": "72px",
        "8xl": "96px",
        "9xl": "128px",
      },
      border: {
        red: "#DC3545 !important",
      },
      borderRadius: {
        DEFAULT: "8px",
        none: "0",
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.625rem",
        cxl: "0.7rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "7xl": "3.5rem",
        "8xl": "4rem",
        full: "9999px",
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],
      },
      borderWidth: {
        DEFAULT: "1px",
        "0": "0",
        "2": "2px",
        "3": "3px",
        "4": "4px",
        "6": "6px",
        "8": "8px",
      },
      divideWidth: {
        DEFAULT: "1px",
        "0": "0",
        "2": "2px",
        "3": "3px",
        "4": "4px",
        "6": "6px",
        "8": "8px",
      },
      lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
      },
      extend: {
        keyframes: {
          animateShadow: {
            "0%": { "box-shadow": "0 0 5px rgba(23,57,109)" },
            "100%": { "box-shadow": "0 0 20px rgba(23,57,109)" },
          },
        },
        zIndex: {
          "1": "1",
          "2": "2",
        },
        animation: {
          animateShadow: "animateShadow 4s ease-out infinite alternate",
        },
        minHeight: {
          fit: "fit-content",
        },
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
        },

        height: {
          "4xl": "670px",
        },
        fontWeights: {
          normal: 400,
          bold: 700,
        },
        borderWidth: {
          sm: "1px",
        },
        boxShadow: {
          DEFAULT: "0 0 20px rgba(23,57,109)",
          blue: "-1px 1px 15px 4px rgba(23,57,109)",
          "gray-light-md": "0 0 20px #c9c9c9",
        },
        fontFamily: {
          heading: ['var(--font-poppins)', 'sans-serif'],
          body: ['Inter', 'sans-serif'],       // e.g. if you like Inter for text
        },
      },
    },
    plugins: [
      function ({ addBase }: any) {
        addBase({
          "h1, h2, h3, h4, h5, h6, p, span": {
            color: "var(--foreground)",
          },
        });
      },
    ],
    
  } satisfies Config;
