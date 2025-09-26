// src/components/sections/WhyJoinSection.js
import Image from 'next/image';

const WhyJoinSection = () => {
  return (
    <section className="relative py-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2000px] h-[650px] bg-brand-purple opacity-80 blur-3xl rounded-full z-0"></div>

      {/* Konten utama yang berada di atas layer ungu */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <h2 className="text-4xl font-bold text-white">Why Join Easyticket.id?</h2>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-white opacity-90">Kami adalah platform penjualan tiket online berbasis cloud, dirancang untuk membantu tempat wisata menjual tiket lebih efektif, tanpa ribet.</p>
        <p className="mt-2 text-lg text-white opacity-90">Dengan EasyTicket, Anda bisa:</p>
        
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
    {[
        { src: 'Tikketqris.svg', alt: 'Terima pembayaran online & QRIS', href: '#' },
        { src: 'Kelolatiket.svg', alt: 'Kelola tiket dan kunjungan dari dashboard', href: '#' },
        { src: 'Akseslaporan.svg', alt: 'Akses laporan penjualan secara real-time', href: '#' },
        { src: 'Kurangiantrean.svg', alt: 'Kurangi antrean, tingkatkan kepuasan pengunjung', href: '#' },
        { src: 'Promosi barang.svg', alt: 'Promosi bareng EasyTicket gratis', href: '#' },
    ].map((feature) => (
        <a 
          key={feature.alt} 
          href={feature.href}
          className="block transition-transform duration-300 hover:scale-105 hover:opacity-90"
        >
            <div className="flex-shrink-0">
                <Image
                    src={`/images/${feature.src}`}
                    alt={feature.alt}
                    width={300}
                    height={100}
                />
            </div>
        </a>
    ))}
</div>
        
      </div>
    </section>
  );
};

export default WhyJoinSection;