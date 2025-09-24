// src/app/layout.js

import { Poppins } from 'next/font/google'; // Pastikan Anda menggunakan font yang sesuai
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

export const metadata = {
  title: 'Easyticket',
  description: 'Go digital, boost your ticket sales with easyticket',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Perubahan ada di baris di bawah ini */}
      <body 
        className={`${poppins.className} bg-gradient-to-b from-[#F3F0FF] to-[#E5DFFF]`}
      >
        {children}
      </body>
    </html>
  );
}