import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F9FAFB', // Background default
        foreground: '#1F2937', // Warna teks utama
        primary: '#1E3A8A', // Warna utama biru
        secondary: '#9333EA', // Warna aksen ungu
        accent: '#FACC15', // Warna aksen kuning
        dark: '#1E293B', // Warna gelap untuk footer
        light: '#F3F4F6', // Warna terang untuk elemen UI
        footerBg: '#FBFBFB', // Background footer
        footerText: '#5E626F', // Warna teks footer
        footerTitle: '#111827', // Warna judul di footer
        gradientStart: '#26C2B9',
        gradientEnd: '#288BE7',
        cyan: {
          500: '#06b6d4',
        },
        teal: {
          500: '#14b8a6',
        },
        backgroundImage: {
          headerPattern: "url('/images/d4c5da9953baca7f5d85f4d6f313f927.png')",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Font utama
        mono: ['Roboto Mono', 'monospace'], // Font monospaced
      },
      spacing: {
        18: '4.5rem', // Tambahkan spacing custom
        22: '5.5rem',
      },
      boxShadow: {
        card: '0 10px 15px rgba(0, 0, 0, 0.2)',
        button: '0 2px 4px rgba(0, 0, 0, 0.1)', // Shadow untuk tombol
      },
      borderRadius: {
        xl: '1rem', // Tambahkan border radius besar
      },
      backgroundImage: {
        gradientHeader: 'linear-gradient(to right, #26C2B9, #288BE7)', // Gradien header
        headerPattern: "url('/images/d4c5da9953baca7f5d85f4d6f313f927.png')", // Gambar background header
      },
    },
  },
  plugins: [],
};

export default config;
