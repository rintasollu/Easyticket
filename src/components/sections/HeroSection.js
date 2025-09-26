// src/components/sections/HeroSection.js
import Image from 'next/image';
import { FaTiktok, FaFacebook, FaInstagram } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section
      className="relative w-full px-4 pt-20 pb-40 text-center"
    >
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 flex items-center justify-between p-6 mx-auto max-w-7xl">
      <a href="/" aria-label="Kembali ke Halaman Utama" className="transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
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
</a> 
        <div className="flex items-center gap-4">
    <a href="#" aria-label="TikTok" className="p-2 text-2xl text-purple-600 transition-all duration-300 rounded-full hover:bg-purple-600 hover:text-white">
        <FaTiktok />
    </a>
    <a href="#" aria-label="Facebook" className="p-2 text-2xl text-purple-600 transition-all duration-300 rounded-full hover:bg-purple-600 hover:text-white">
        <FaFacebook />
    </a>
    <a href="#" aria-label="Instagram" className="p-2 text-2xl text-purple-600 transition-all duration-300 rounded-full hover:bg-purple-600 hover:text-white">
        <FaInstagram />
    </a>
</div>
      </header>

      {/* Hero Content */}
      <div className="relative z-40 flex justify-center px-4">
  <a href="#" className="inline-block transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
    <Image
      src="/images/Godigital.svg"
      alt="Go digital, boost your ticket sales with easyticket"
      width={794}
      height={245}
      className="w-full h-auto max-w-2xl"
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
       {/* Trusted By Section */}
{/* z-index disesuaikan dengan kode asli Anda (z-50) */}
<div className="relative z-50 mt-16 text-center">
<div className="relative inline-block px-8 py-4 rounded-full shadow-lg bg-white/40 backdrop-blur-sm">
        <div className="absolute top-0 left-0 translate-x-4 -translate-y-1/2">
            <Image
                src="/images/Trustedby.svg"
                alt="Trusted by"
                width={95}
                height={30}
            />
        </div>
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
                    <div className="relative w-16 h-10 md:h-12 md:w-24">
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

     {/* Tombol Aksi */}
<div className="relative z-20 flex flex-col items-center justify-center gap-4 mt-8">
    <div className="flex items-center justify-center gap-4">
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
                height={50}  // Sesuaikan dengan ukuran asli SVG Anda
                />
            </a>
        </div>
        
        <Image
    src="/images/Atau.svg"
    alt="Atau"
    width={40}  // Sesuaikan dengan lebar asli SVG Anda
    height={20} // Sesuaikan dengan tinggi asli SVG Anda
    className="mx-2" // Menjaga jarak dari tombol
/>
        
        {/* Tombol Pelajari Selengkapnya */}
        <a href="#" className="inline-block transition-transform cursor-pointer hover:scale-105">
            <Image
            src="/images/Pelajariselengkapnya.svg" 
            alt="Pelajari Selengkapnya"
            width={220} // Sesuaikan dengan ukuran asli SVG Anda
            height={50}  // Sesuaikan dengan ukuran asli SVG Anda
            />
        </a>
    </div>
</div>

      
      {/* Ticket Cards */}
<div className="absolute bottom-[-80px] w-full max-w-7xl left-1/2 -translate-x-1/2 px-4 md:px-8 z-30">
        <div className="relative flex items-end justify-between">
        <div className="w-[45%] md:w-[30%] -rotate-12 transform absolute left-[-1%] md:left-[-3%] transition-transform duration-300 hover:scale-105 hover:-rotate-6">
    <Image
        src="/images/Citraharmoni.svg" 
        alt="CitraHarmoni Waterpark"
        width={283}
        height={349}
        className="w-full h-auto"
    />
</div>
<div className="w-[45%] md:w-[30%] rotate-12 transform absolute right-[-2%] md:right-[-5%] transition-transform duration-300 hover:scale-105 hover:rotate-6">
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

// Pastikan baris ini ada di bagian bawah file HeroSection.js
export default HeroSection;