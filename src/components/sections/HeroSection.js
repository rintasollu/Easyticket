// src/components/sections/HeroSection.js
import Image from 'next/image';
import { FaTiktok, FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link'; // Wajib untuk Next.js Link
const HeroSection = () => {
  return (
    <section
      className="relative w-full px-4 pt-20 pb-40 text-center"
    >
     {/* Header */}
<header className="absolute top-0 left-0 right-0 flex items-center justify-between p-6 mx-auto max-w-7xl">
    
    {/* KELOMPOK LOGO DI KIRI (Berisi dua tombol Aksi terpisah) */}
    <div className="flex items-center gap-3">
        
    {/* KELOMPOK LOGO DI KIRI (Berisi dua tombol Aksi terpisah) */}
<div className="flex items-center gap-3">
    
    {/* TOMBOL 1: Logoeasyticket (Fixed: Menggunakan <Link>) */}
    <Link href="/" aria-label="Kembali ke Halaman Utama" className="transition-opacity duration-300 hover:opacity-80">
        {/* Tidak perlu div tambahan di dalam Link ini */}
        <Image
            src="/icons/Logoeasyticket.svg"
            alt="Easyticket Logo"
            width={41}
            height={40}
        />
    </Link>
    
    {/* TOMBOL 2: Logomitra (Tetap <a> karena href='#' bukan navigasi internal) */}
    <a href="#" aria-label="Mitra Easyticket" className="transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
        <Image
            src="/icons/Logomitra.svg"
            alt="Mitra Easyticket"
            width={122}
            height={32}
        />
    </a>
</div>
</div>
        {/* KELOMPOK IKON DI KANAN */}
        <div className="flex items-center gap-4">
            
            {/* IKON SOSIAL: Sembunyikan di Mobile, Tampil di MD ke atas */}
            <div className="items-center hidden gap-4 text-2xl text-purple-600 md:flex">
                <a href="#" aria-label="TikTok" className="p-2 transition-all duration-300 rounded-full hover:bg-purple-600 hover:text-white"><FaTiktok /></a>
                <a href="#" aria-label="Facebook" className="p-2 transition-all duration-300 rounded-full hover:bg-purple-600 hover:text-white"><FaFacebook /></a>
                <a href="#" aria-label="Instagram" className="p-2 transition-all duration-300 rounded-full hover:bg-purple-600 hover:text-white"><FaInstagram /></a>
            </div>
            
            {/* IKON HAMBURGER: Tampil di Mobile, Sembunyi di MD ke atas */}
            <button className="p-2 text-purple-600 transition-all duration-300 rounded-full hover:bg-purple-100 md:hidden">
                <Image 
                    src="/images/Hamburger.svg" // Path ke SVG kustom Anda
                    alt="Menu" 
                    width={40} 
                    height={40} 
                />
            </button>
        </div>
      </header>

      {/* HERO CONTENT: Judul dan Teks Deskripsi */}
      <div className="relative z-40 flex flex-col justify-center px-4 mt-8"> 
        
        {/* Kontainer Gambar Judul */}
        <a href="#" className="inline-block mx-auto transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
            
            {/* 1. GAMBAR UNTUK DESKTOP (Godigital.svg) - Tampil hanya di MD ke atas */}
            <Image
                src="/images/Godigital.svg"
                alt="Go digital, boost your ticket sales with easyticket"
                width={794}
                height={245}
                className="hidden w-full h-auto max-w-2xl md:block" // Hidden di mobile, block di MD+
            />

            {/* 2. GAMBAR UNTUK MOBILE (Framegodigital.svg) - Tampil hanya di Mobile */}
            <Image
                src="/images/Framegodigital.svg" // Pastikan path ini benar
                alt="Go digital, boost your ticket sales with easyticket"
                width={600} // Sesuaikan ukuran untuk mobile
                height={400} // Sesuaikan ukuran untuk mobile
                className="block max-w-sm md:hidden **filter blur-sm**" // Block di mobile, hidden di MD+
            />
        </a>
</div>
      {/* DEKORASI BARU DITAMBAHKAN DI SINI */}
<Image
    src="/icons/Ellipse.svg"
    alt="Decorative Ellipse"
    width={30} // Sesuaikan ukuran
    height={30} // Sesuaikan ukuran
    className="absolute top-[11%] right-[24%] z-0 w-10 h-10 md:w-10 md:h-11"
/>
<Image
    src="/icons/Rectangle.svg"
    alt="Decorative Rectangle"
    width={100} // Sesuaikan ukuran
    height={100} // Sesuaikan ukuran
    className="absolute bottom-[43%] right-[27%] z-10 w-16 h-16 md:w-24 md:h-24"
/>
<Image
    src="/icons/Vector.svg"
    alt="Decorative Vector"
    width={130} // Sesuaikan ukuran
    height={100} // Sesuaikan ukuran
    className="absolute top-[37%] left-[5%] z-10 w-16 h-16 md:w-24 md:h-24"
/>
{/* TRUSTED BY SECTION */}
<div className="relative z-50 mt-16 text-center">
    
    {/* 1. VERSI DESKTOP (MD KE ATAS): CSS Backdrop-blur + Logo Asli */}
    {/* Disembunyikan di mobile (hidden), ditampilkan di md ke atas (md:inline-block) */}
    <div className="relative hidden px-8 py-4 rounded-full shadow-lg md:inline-block bg-white/40 backdrop-blur-sm">
        
        {/* Label Trusted By (Desktop) */}
        <div className="absolute top-0 translate-x-4 -translate-y-1/2 left-1">
            <Image src="/images/Trustedby.svg" 
            alt="Trusted by" 
            width={95} 
            height={30} />
        </div>

        {/* Logo Mitra (Looping Asli - Desktop Size) */}
        <div className="flex items-center justify-center px-4 gap-x-4 sm:gap-x-6 md:gap-x-8">
            {[
                { src: 'Hamaka.svg', alt: 'Hamaka', href: '#' },
                { src: 'Kampungeropa.svg', alt: 'Kampung Eropa', href: '#' },
                { src: 'Logokiddo.svg', alt: 'Kiddoland', href: '#' },
                { src: 'Parimas.svg', alt: 'Parimas', href: '#' },
                { src: 'Diengjeep.svg', alt: 'Dieng Jeep', href: '#' },
                { src: 'Motionstudio.svg', alt: 'Motion Studio', href: '#' },
            ].map((logo) => (
                <a 
                    key={logo.alt} 
                    href={logo.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block transition-transform duration-200 hover:scale-110"
                    aria-label={`Link to ${logo.alt}`}
                >
                    <div className="relative w-16 h-10 md:h-16 md:w-32"> 
                        <Image
                            src={`/images/${logo.src}`}
                            alt={logo.alt}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </a>
            ))}
        </div>
    </div>

    {/* 2. VERSI MOBILE (DI BAWAH MD): Bgputih.svg sebagai background + Logo asli di atasnya */}
    {/* Tampil di Mobile (block), disembunyikan di MD ke atas (md:hidden) */}
    <div className="relative block max-w-sm mx-auto -top-2 md:hidden"> 
        
        {/* Lapisan 1: Gambar Bgputih.svg (sebagai background) */}
        <Image
            src="/images/Bgputih.svg" // File SVG kustom pengganti background
            alt="Trusted by Background Mobile"
            width={350} // Sesuaikan lebar agar proporsional di mobile
            height={100} // Sesuaikan tinggi
            className="w-full h-auto opacity-90 rounded-xl"
        />
        
        {/* Lapisan 2: Logo Mitra (Mobile) - Ditempatkan absolut di atas Bgputih.svg */}
        <div 
            className="absolute z-20" 
            style={{ left: '0', top: '0', transform: 'translate(-20%, -50%)' }} // Diubah menjadi tengah atas
            >

     <Image 
                src="/images/Trustedby.svg" 
                alt="Trusted by" 
                width={80} 
                height={20} 
            />
        </div>
        
        {/* === KONTROL 2: LOGO MITRA (VIEWPORT SCROLLABLE) === */}
        {/* Kita menggunakan div ini sebagai Viewport utama untuk scrolling logo */}
        <div 
            className="absolute inset-0 flex items-center p-2 pt-6" // Posisi logo di tengah vertikal dan berjarak dari label
        >
    
            {/* Viewport Scrollable Utama (Wajib untuk overflow) */}
            <div className="w-full overflow-x-auto overflow-y-hidden whitespace-nowrap opacity-4 no-scrollbar"> 
            
                {/* List logo yang disusun horizontal (Flex container) */}
                <div className="flex gap-2 px-4 py-2"> 
                    {/* ULANGI LOOPING LOGO DENGAN UKURAN SPESIFIK */}
                    {[
                        { src: 'Hamaka.svg', alt: 'Hamaka', href: '#' },
                        { src: 'Kampungeropa.svg', alt: 'Kampung Eropa', href: '#' },
                        { src: 'Logokiddo.svg', alt: 'Kiddoland', href: '#' },
                        { src: 'Parimas.svg', alt: 'Parimas', href: '#' },
                        { src: 'Diengjeep.svg', alt: 'Dieng Jeep', href: '#' },
                        { src: 'Motionstudio.svg', alt: 'Motion Studio', href: '#' },
                    ].map((logo) => (
                        <a 
                            key={logo.alt} 
                            href={logo.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex-shrink-0 block transition-transform duration-200 hover:scale-110"
                            aria-label={`Link to ${logo.alt}`}
                        >
                            {/* UKURAN SPESIFIK DITERAPKAN DI SINI: 100x60px */}
                            <div 
                                className="relative" 
                                style={{ width: '100px', height: '60px' }} 
                            > 
                                <Image
                                    src={`/images/${logo.src}`}
                                    alt={logo.alt}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div> 
                        </a>
                    ))}
                </div>
            </div>
        </div>
        </div>
        </div>
{/* Tombol Aksi */}
<div className="relative z-20 flex flex-col items-center justify-end gap-4 mt-10">
    
    {/* KONTAINER TOMBOL AKSI: Paksa vertikal (flex-col) di mobile, lalu horizontal (md:flex-row) di desktop */}
    <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
        
        {/* Kontainer untuk Free Registration Fee & Daftar Sekarang */}
        <div className="relative">
            {/* Label Free Registration Fee */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 rounded-md px-2 py-0.5 text-xs font-semibold text-gray-800 whitespace-nowrap z-10">
                Free registration fee!
            </div>
            <a href="#" className="inline-block transition-transform cursor-pointer hover:scale-105">
                <Image
                src="/images/Daftarsekarang.svg" 
                alt="Daftar Mitra Sekarang"
                width={220} // Sesuaikan dengan ukuran asli SVG Anda
                height={50}  // Sesuaikan dengan ukuran asli SVG Anda
                />
            </a>
        </div>
        
        {/* Gambar 'Atau' */}
        {/* Tambahkan margin vertikal di mobile, hilangkan margin horizontal di desktop */}
        <Image
            src="/images/Atau.svg"
            alt="Atau"
            width={40} 
            height={20}
            className="my-3 md:my-0" // Memberi jarak vertikal (margin-y) di mobile
        />
        
        {/* Tombol Pelajari Selengkapnya */}
        <a href="#" className="inline-block transition-transform cursor-pointer hover:scale-105">
            <Image
            src="/images/Pelajariselengkapnya.svg" 
            alt="Pelajari Selengkapnya"
            width={220} // Sesuaikan dengan ukuran asli SVG Anda
            height={50}  // Sesuaikan dengan ukuran asli SVG Anda
            />
        </a>
    </div>
</div>

      
      {/* Ticket Cards */}
      <div className="absolute bottom-[-80px] w-full max-w-7xl left-1/2 -translate-x-1/2 px-4 md:px-8 z-30">
        <div className="relative flex items-end justify-between">
            
          {/* KARTU CITRAHARMONI: Ditambahkan 'hidden' dan 'md:block' */}
          <div className="w-[45%] md:w-[30%] -rotate-12 transform absolute left-[-1%] md:left-[-3%] transition-transform duration-300 hover:scale-105 hover:-rotate-6 hidden md:block">
            <Image
              src="/images/Citraharmoni.svg" 
              alt="CitraHarmoni Waterpark"
              width={283}
              height={349}
              className="w-full h-auto"
            />
          </div>
          
          {/* KARTU KIDDOLAND: Ditambahkan 'hidden' dan 'md:block' */}
          <div className="w-[45%] md:w-[30%] rotate-12 transform absolute right-[-2%] md:right-[-5%] transition-transform duration-300 hover:scale-105 hover:rotate-6 hidden md:block">
            <Image
              src="/images/Kiddoland.svg"
              alt="Kiddoland Pallangga"
              width={283}
              height={349}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;