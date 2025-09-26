import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Easyticket.id",
  description: "Go digital, boost your ticket sales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* Kontainer untuk background gradient */}
        {/* Tambahkan background ke sini, atau ke div di dalamnya */}
        {/* Contoh sederhana, bisa lebih kompleks dengan pseudo-elements */}
        <div className="relative min-h-screen overflow-hidden bg-brand-purple-light">
          {/* Elemen untuk gradient utama, akan menutupi seluruh halaman */}
          {/* Untuk gambar 1: Ini adalah gradient ungu muda ke pink/putih di bagian atas */}
          <div className="absolute top-0 left-0 w-full h-[120vh] bg-gradient-to-br from-[#f3efff] via-[#e5d4f7] to-[#d4c1f0] z-0"></div>
          
          {/* Elemen lingkaran atau splash warna yang terlihat di gambar */}
          {/* Lingkaran pink di kanan atas */}
          <div className="absolute h-48 rounded-full top-10 right-10 w-35 bg-brand-pink mix-blend-multiply opacity-30 blur-3xl animate-blob animation-delay-2000"></div>
          {/* Lingkaran kuning di kiri bawah (di sekitar section WhyJoin) */}
          <div className="absolute bottom-[-10rem] left-[-5rem] w-64 h-64 bg-brand-yellow rounded-full mix-blend-multiply opacity-30 blur-3xl animate-blob"></div>
          {/* Lingkaran ungu di kanan bawah (di sekitar section SpecialOffer) */}
          <div className="absolute bottom-[-20rem] right-[-10rem] w-72 h-72 bg-brand-purple rounded-full mix-blend-multiply opacity-20 blur-3xl animate-blob animation-delay-4000"></div>

          {/* Konten utama aplikasi Anda */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}