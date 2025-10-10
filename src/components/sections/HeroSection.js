// src/components/sections/HeroSection.js
import Image from 'next/image';
import { FaTiktok, FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="relative w-full px-4 pt-20 pb-40 text-center">
    
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 flex items-center justify-between p-6 mx-auto max-w-7xl">
            
            {/* KELOMPOK LOGO DI KIRI (Berisi dua tombol Aksi terpisah) */}
            <div className="flex items-center gap-3">
                
                {/* TOMBOL 1: Logoeasyticket (Fixed: Menggunakan <Link>) */}
                <Link href="/" aria-label="Kembali ke Halaman Utama" className="transition-opacity duration-300 hover:opacity-80">
                    <Image
                        src="/icons/Logoeasyticket.svg"
                        alt="Easyticket Logo"
                        width={41}
                        height={40}
                    />
                </Link>
                
                 {/* --------------------------------------------------------- */}
                {/* BUBBLE CHAT MITRA BARU (RESPONSIVE) */}
                {/* --------------------------------------------------------- */}
                <div 
                    aria-label="Mitra Easyticket" 
                    // PERUBAHAN DI SINI: Ukuran W/H responsif
                    className="flex-shrink-0 flex items-center justify-center rounded-md mitra-bubble ml-2 md:ml-4
                               w-28 h-8 md:w-[150px] md:h-[40px] text-xs md:text-[12px] p-1"
                    style={{
                        background: 'linear-gradient(180deg, #F3EDFF 0%, #EADFFF 50%, #F3EDFF 100%)',
                        border: '1px solid #362063',
                    }}
                >
                    {/* Teks Mitra Easyticket */}
                    <span 
                        // PERUBAHAN DI SINI: Ukuran teks disesuaikan
                        className="font-normal font-[Podkova] leading-none text-[#362063] whitespace-nowrap text-[10px] md:text-[12px]"
                        style={{ 
                            fontWeight: 400,
                            letterSpacing: '0.05em' 
                        }} 
                    >
                        Mitra Easyticket
                    </span>
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

     {/* -------------------------------------------------------------------------- */}
        {/* HERO CONTENT: JUDUL & DESKRIPSI (MOBILE & DESKTOP TERPISAH) */}
        {/* -------------------------------------------------------------------------- */}
        <div className="relative z-40 flex flex-col items-center justify-center px-4 pt-16 mt-8 w-full md:pt-0 md:mt-0"> 
            
            {/* ======================================================= */}
            {/* 1. KONTEN MOBILE/BLUR (< 768px) */}
            {/* ======================================================= */}
            <div 
                // KUNCI: Mobile position (top: 40px) & display
                className="flex flex-col items-center mx-auto gap-4 
                           absolute left-1/2 top-[1px] transform -translate-x-1/2 /* <-- POSISI MOBILE NAIK KE 40px */
                           w-[350px] h-[250px] p-2
                           bg-white/50 backdrop-blur-[10px] border border-white rounded-xl
                           md:hidden" /* <-- Hanya tampil di mobile */
            >
                {/* Frame 124 (Wadah Judul Mobile) */}
                <div className="flex flex-col items-center w-full">
                    <h1 
                        className="font-bold text-center text-[#362063] font-[DM Sans]
                                   text-[28px] leading-[42px] w-full max-w-[312px]"
                    >
                        Go digital, boost your ticket sales
                    </h1>
                    <div className="flex flex-row justify-center items-end gap-4 h-[42px] w-full max-w-[225px] mx-auto">
                        <p className="font-bold text-center text-[#362063] font-[DM Sans] text-[28px] leading-[42px] w-[59px]">with</p>
                        <Image src="/images/Logoungueasyticket.svg" alt="Easyticket Logo Ungu" width={265} height={57} className="w-[149px] h-auto mb-1" />
                    </div>
                </div>
                <p 
                    className="font-normal text-center text-[#66626E] font-[DM Sans] w-full 
                               text-[16px] leading-[20px] max-w-[312px] pt-2 mx-auto"
                >
                    Jual tiket online lebih mudah, lebih cepat, dan lebih luas jangkauannya — **tanpa biaya di awal!**
                </p>
            </div>
        
            {/* ======================================================= */}
            {/* 2. KONTEN DESKTOP (>= 768px) */}
            {/* ======================================================= */}
            <div 
                // KUNCI: Display desktop & pemusatan kuat
                className="hidden md:block mx-auto w-full max-w-7xl" /* <-- Hanya tampil di desktop */
            >
                <div 
                    // Frame 126 (Desktop Styling): Dicentang agar rata tengah total
                    className="flex flex-col items-center mx-auto gap-6 p-0 w-full max-w-[794px]"
                >
                    {/* Frame 124 (Wadah Judul Desktop) */}
                    <div className="flex flex-col items-center w-full max-w-[794px]">
                        <h1 
                            // KUNCI: max-w [550px] agar menjadi 2 baris, mx-auto untuk memusatkan h1
                            className="font-bold text-center text-[#362063] font-[DM Sans]
                                       text-[40px] leading-[83px] w-full max-w-[900px] mx-auto"
                        >
                            Go digital, boost your ticket sales
                        </h1>
                        <div className="flex flex-row justify-center items-end gap-4 h-[78px] w-full max-w-[385px] mx-auto mt-[-10px]">
                            <p className="font-bold text-center text-[#362063] font-[DM Sans] text-[40px] leading-[78px] w-[101px]">with</p>
                            <Image src="/images/Logoungueasyticket.svg" alt="Easyticket Logo Ungu" width={265} height={57} className="w-[265px] h-auto mb-1" />
                        </div>
                    </div>
                    <p 
                        className="font-normal text-center text-[#66626E] font-[DM Sans] w-full 
                                   text-[20px] leading-[32px] max-w-[590px] mx-auto"
                    >
                        Jual tiket online lebih mudah, lebih cepat, dan lebih luas jangkauannya — **tanpa biaya di awal!**
                    </p>
                </div>
            </div>
            
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
            <div className="relative hidden px-8 py-4 rounded-full shadow-lg md:inline-block bg-white/40 backdrop-blur-sm absoluteright-0">
                
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
        <div className="relative block max-w-sm mx-auto top-40 md:hidden">
                
                {/* Lapisan 1: Gambar Bgputih.svg (sebagai background) */}
                <Image
                    src="/images/Bgputih.svg" // File SVG kustom pengganti background
                    alt="Trusted by Background Mobile"
                    width={350} // Sesuaikan lebar agar proporsional di mobile
                    height={100} // Sesuaikan tinggi
                    className="w-full h-auto opacity-90 rounded-xl"
                />
                
                {/* Lapisan 2: Label Trusted by (Mobile) - Ditempatkan absolut di atas Bgputih.svg */}
                <div 
                    className="absolute z-20" 
                    style={{ left: '0', top: '0', transform: 'translate(-20%, -50%)' }}
                    >

                    <Image 
                        src="/images/Trustedby.svg" 
                        alt="Trusted by" 
                        width={80} 
                        height={20} 
                    />
                </div>
                
                  {/* === KONTROL 2: LOGO MITRA (VIEWPORT SCROLLABLE) === */}
                  <div 
                            className="absolute inset-0 flex items-center p-4 pt-6" 
                        >
                            
                            {/* Viewport Scrollable Utama (Wajib untuk overflow) */}
                            {/* PERUBAHAN DI SINI: Tambahkan translate-y-4 untuk menggeser ke bawah */}
                            <div className="w-full overflow-x-auto overflow-y-hidden whitespace-nowrap opacity-4 no-scrollbar translate-y-0">
                            
                                {/* List logo yang disusun horizontal (Flex container) */}
                                <div className="flex gap-2 px-4 py-2"> 
                                    {[
                                        { src: 'Hamaka.svg', alt: 'Hamaka', href: '#' },
                                        { src: 'Kampungeropa.svg', alt: 'Kampung Eropa', href: '#' },
                                        { src: 'Logokiddo.svg', alt: 'Kiddoland', href: '#' },
                                        { src: 'Parimas.svg', alt: 'Parimas', href: '#' },
                                        { src: 'Diengjeep.svg', alt: 'Dieng Jeep', href: '#' },
                                        { src: 'Motionstudio.svg', alt: 'Motion Studio', href: '#' },
                                    ].map((logo) => (
                                        <a key={logo.alt} href={logo.href} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 block transition-transform duration-200 hover:scale-110" aria-label={`Link to ${logo.alt}`}>
                                            {/* UKURAN SPESIFIK DITERAPKAN DI SINI: 100x60px */}
                                            <div className="relative" style={{ width: '100px', height: '60px' }}> 
                                                <Image src={`/images/${logo.src}`} alt={logo.alt} layout="fill" objectFit="contain" />
                                            </div> 
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        {/* Tombol Aksi */}
        <div className="relative z-20 flex flex-col items-center justify-end gap-4 mt-64 md:mt-10">
            
            {/* KONTAINER TOMBOL AKSI: Paksa vertikal (flex-col) di mobile, lalu horizontal (md:flex-row) di desktop */}
            <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
                
                {/* Kontainer untuk Free Registration Fee & Daftar Sekarang */}
                <div className="relative">
                    {/* Label Free Registration Fee */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 rounded-md px-2 py-0.5 text-xs font-semibold text-gray-800 whitespace-nowrap z-10">
                        Free registration fee!
                    </div>
                    
                    {/* TOMBOL DAFTAR MITRA SEKARANG (REPLIKASI FIGMA) */}
                    <Link 
                        href="#" 
                        // Menggunakan kelas untuk ukuran, font, dan warna isi
                        className="inline-flex items-center justify-center 
                                w-[260px] h-[61px] px-5 py-4 
                                font-['DM_Sans'] font-normal 
                                text-white bg-[#8C52FF] rounded-[16px] 
                                transition-transform duration-300 hover:scale-105"
                        
                        // Inline Style untuk mereplikasi border dan box-shadow yang unik
                        style={{
                            // Replikasi box-shadow: 4px 5px 0px #441F8D
                            boxShadow: '4px 5px 0 0 #441F8D',
                            // Replikasi border: 1px solid #441F8D
                            border: '1px solid #441F8D', 
                            // Menggunakan nilai px tepat untuk font-size dan line-height (diperlukan untuk DM Sans)
                            fontSize: '18px', 
                            lineHeight: '29px',
                        }}
                    >
                        Daftar Mitra Sekarang
                    </Link>
                </div>
                
                {/* Teks "Atau" (Teks biasa) */}
                <p className="my-3 font-sans font-medium text-black-600 md:my-0">Atau</p>
                
                {/* TOMBOL PELAJARI SELENGKAPNYA (REPLIKASI FIGMA) */}
                <Link 
                    href="#" 
                    // Menggunakan kelas untuk ukuran, font, dan warna
                    className="inline-flex items-center justify-center 
                                w-[258px] h-[61px] px-5 py-4 
                                font-['DM_Sans'] font-normal 
                                text-[#362063] bg-transparent rounded-[16px] 
                                border border-[#362063] 
                                transition-transform duration-300 hover:scale-105"
                    
                    // Inline Style untuk menjamin ukuran dan font-size yang spesifik
                    style={{
                        // Replikasi border: 1px solid #362063
                        borderColor: '#362063', 
                        // Replikasi border-radius: 16px
                        borderRadius: '16px',
                        // Menggunakan nilai px tepat untuk font-size dan line-height
                        fontSize: '18px', 
                        lineHeight: '29px',
                        // Warna teks spesifik
                        color: '#362063', 
                    }}
                >
                    Pelajari Selengkapnya
                </Link>
            </div>
        </div>

        {/* -------------------------------------------------------------------------- */}
        {/* BAGIAN YANG DIMODIFIKASI: Ticket Cards (Rotasi Balik pada Gambar) */}
        {/* -------------------------------------------------------------------------- */}
        <div className="absolute bottom-[-80px] w-full max-w-7xl left-1/2 -translate-x-1/2 px-4 md:px-8 z-0">
            <div className="relative flex items-end justify-between">
                
                {/* KARTU CITRAHARMONI (LEFT) */}
                <div className="w-[45%] md:w-[30%] -rotate-12 transform absolute left-[-1%] md:left-[-7%] transition-transform duration-300 hover:scale-105 hover:-rotate-6 hidden md:block -translate-y-[95px]">
                    
                    {/* Frame 16 (Card Container) */}
                    <div 
                        className="flex flex-col items-start p-2 pb-3 gap-2 w-[285px] h-[349px] bg-white border border-[#F9F1FD] rounded-xl"
                    >
                        {/* Rectangle 10 (Image Area) */}
                        <div 
                            className="w-[269px] h-[202px] rounded-lg overflow-hidden relative" 
                        >
                            {/* ROTASI BALIK: Menggunakan rotate-12 untuk menetralkan -rotate-12 dari parent */}
                            <Image
                                src="images/Keluargacemara.svg" 
                                alt="Keluarga Cemara"
                                width={269}
                                height={202}
                               className="absolute top-0 left-0 w-full h-full object-cover transform rotate-[8deg] scale-110"  
                            />
                        </div>

                        {/* Frame 15 (Content Block) */}
                        <div 
                            className="flex flex-col items-start px-2 gap-2 w-[269px]"
                        >
                            {/* Title */}
                            <p 
                                className="font-medium text-base leading-[21px] text-black font-[DM Sans]"
                            >
                                CitraHarmoni Waterpark
                            </p>

                            {/* Frame 14 (Price Group) */}
                            <div 
                                className="flex flex-col items-start gap-1"
                            >
                                {/* Price Label */}
                                <p 
                                    className="font-normal text-xs leading-4 text-[#8A8491] font-[DM Sans]"
                                >
                                    TIket mulai dari
                                </p>
                                {/* Price Value */}
                                <p 
                                    className="font-normal text-lg leading-[23px] text-[#473558] font-[DM Sans]"
                                >
                                    IDR 20.000
                                </p>
                            </div>

                            {/* Frame 13 (Button) */}
                            <button 
                                className="flex flex-row justify-center items-center py-2 px-3 gap-2 w-[253px] h-[39px] bg-[#FFFF3E] border border-[#D5D52C] rounded-lg cursor-pointer mt-1"
                            >
                                {/* Button Text */}
                                <p 
                                    className="font-normal text-lg leading-[23px] text-[#473558] font-[DM Sans]"
                                >
                                    Beli tiket sekarang
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* KARTU KIDDOLAND (RIGHT) */}
                <div className="w-[45%] md:w-[21%] rotate-12 transform absolute right-[-2%] md:right-[-5%] transition-transform duration-300 hover:scale-105 hover:rotate-6 hidden md:block -translate-y-20">
                    
                    {/* Frame 127 (Card Container) */}
                    <div 
                        className="flex flex-col items-start p-1 pb-1 gap-2 w-[283px] h-[349px] bg-white border border-[#F9F1FD] rounded-xl"
                    >
                      {/* Rectangle 10 (Image Area) */}
<div 
    className="w-[269px] h-[202px] rounded-lg overflow-hidden relative" 
>
    {/* PERUBAHAN DI SINI: Rotasi diatur ke +24deg (untuk kemiringan +12deg) dan geser ke kanan (+translate-x-2) */}
    <Image
        src="images/Arenakiddoland.svg" 
        alt="Arena Kiddoland"
        width={269}
        height={202}
        // Rotasi total +24deg (mengandung rotasi balik + rotasi target +12deg)
        // Geser ke kanan +translate-x-2, dan ditambahkan scale-110
        className="absolute top-0 left-0 w-full h-full object-cover transform -rotate-[7deg] scale-110" 
    />
</div>

                        {/* Frame 15 (Content Block) */}
                        <div 
                            className="flex flex-col items-start px-2 gap-2 w-[269px]"
                        >
                            {/* Title */}
                            <p 
                                className="font-medium text-base leading-[21px] text-black font-[DM Sans]"
                            >
                                Kiddoland Pallangga
                            </p>

                            {/* Frame 14 (Price Group) */}
                            <div 
                                className="flex flex-col items-start gap-1"
                            >
                                {/* Price Label */}
                                <p 
                                    className="font-normal text-xs leading-4 text-[#8A8491] font-[DM Sans]"
                                >
                                    TIket mulai dari
                                </p>
                                {/* Price Value */}
                                <p 
                                    className="font-normal text-lg leading-[23px] text-[#473558] font-[DM Sans]"
                                >
                                    IDR 20.000
                                </p>
                            </div>

                            {/* Frame 13 (Button) */}
                            <button 
                                className="flex flex-row justify-center items-center py-2 px-3 gap-2 w-[253px] h-[39px] bg-[#FFFF3E] border border-[#D5D52C] rounded-lg cursor-pointer mt-1"
                            >
                                {/* Button Text */}
                                <p 
                                    className="font-normal text-lg leading-[23px] text-[#473558] font-[DM Sans]"
                                >
                                    Beli tiket sekarang
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* -------------------------------------------------------------------------- */}

        </section>
    );
}

export default HeroSection;