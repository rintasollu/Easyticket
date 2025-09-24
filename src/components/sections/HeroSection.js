// src/components/sections/HeroSection.js
import Image from 'next/image';
import { FaTiktok, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden px-4 pt-20 pb-40 text-center"
    >
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 mx-auto flex max-w-7xl items-center justify-between p-6">
        <div className="flex items-center gap-3">
          <Image
            src="/icons/Logoeasyticket.svg"
            alt="Easyticket Logo"
            width={41}
            height={40}
          />
          <Image
            src="/icons/Logomitra.svg"
            alt="Mitra Easyticket"
            width={122}
            height={32}
          />
        </div>
        <div className="flex items-center gap-6 text-2xl text-purple-600">
          <a href="#" aria-label="TikTok"><FaTiktok /></a>
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 mt-16">
        <div className="flex justify-center px-4">
          <Image
            src="/images/Godigital.svg"
            alt="Go digital, boost your ticket sales with easyticket"
            width={794}
            height={245}
            className="h-auto w-full max-w-2xl"
          />
        </div>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Jual tiket online lebih mudah, lebih cepat, dan lebih luas jangkauannya — tanpa biaya di awal!
        </p>
      </div>
      
      {/* Trusted By Section */}
      <div className="mt-16 text-center">
        <p className="mb-4 font-semibold text-purple-500">Trusted by</p>
        <div className="relative mx-auto flex max-w-4xl items-center justify-center">
          <Image 
            src="/images/Gambartengah.svg" 
            alt="Mitra terpercaya Easyticket" 
            width={996} 
            height={135} 
            className="h-auto w-full max-w-3xl rounded-xl object-contain"
          />
        </div>
      </div>

      {/* Tombol Aksi */}
      <div className="mt-8 flex flex-col items-center justify-center gap-4">
        <div className="relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-md bg-yellow-400 px-2 py-0.5 text-xs font-semibold text-gray-800">
            Free registration fee!
          </span>
          <a href="#" className="cursor-pointer transition-transform hover:scale-105 inline-block">
            <Image
              src="/images/Daftarmitra.svg" 
              alt="Daftar Mitra Sekarang"
              width={220}
              height={50}
            />
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-500">Atau</span>
          <button className="transform rounded-lg border border-purple-300 bg-white py-3 px-8 font-semibold text-purple-600 transition-transform hover:scale-105 hover:bg-purple-50">
            Pelajari Selengkapnya
          </button>
        </div>
      </div>

      {/* Ticket Cards */}
      <div className="absolute bottom-[-60px] left-1/2 w-full max-w-7xl -translate-x-1/2 px-4 md:px-8">
        <div className="relative flex items-end justify-between">
          <div className="w-[45%] md:w-[30%] -rotate-12 transform">
            <Image
              src="/images/Citraharmoni.svg" 
              alt="CitraHarmoni Waterpark"
              width={283}
              height={349}
              className="h-auto w-full"
            />
          </div>
          <div className="w-[45%] md:w-[30%] rotate-12 transform">
            <Image
              src="/images/Kiddoland.svg"
              alt="Kiddoland Pallangga"
              width={283}
              height={349}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}