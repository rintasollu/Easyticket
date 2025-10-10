// src/components/sections/WhyJoinSection.js
import Image from 'next/image';

// Data fitur yang diperbarui menggunakan path gambar SVG spesifik
const featuresData = [
    { 
        title: 'Terima pembayaran online & QRIS', 
        imageSrc: '/images/Logoterima.svg',
    },
    { 
        title: 'Kelola tiket dan kunjungan dari dashboard', 
        imageSrc: '/images/Logokelola.svg',
    },
    { 
        title: 'Akses laporan penjualan secara real-time', 
        imageSrc: '/images/Logoakses.svg',
    },
    { 
        title: 'Kurangi antrean, tingkatkan kepuasan pengunjung', 
        imageSrc: '/images/Logokurangi.svg',
    },
    { 
        title: 'Promosi bareng EasyTicket gratis', 
        imageSrc: '/images/Logopromosi.svg',
    },
];

const FeatureCard = ({ title, imageSrc }) => {
    const isValidSrc = imageSrc && imageSrc.length > 0;
    
    // Mengganti <a> dengan <div> dan menghapus kelas interaktif (hover)
    return (
        <div 
            // Mengganti kelas 'hover:scale-[1.02]' dan 'box-border block transition-transform duration-300'
            className="box-border w-full max-w-sm md:w-[386px] h-22 md:h-[88px]"
        >
            <div 
                // Card Inner Styling
                className="flex flex-col items-start p-4 gap-2 h-full 
                           bg-white/80 backdrop-blur-sm border border-white rounded-xl shadow-md"
            >
                {/* Frame 133 (Image and Text Container) */}
                <div 
                  className="flex flex-row items-center gap-3 w-full md:w-[353px] h-[52px]"
                  //                                                              ^^^^^^^^^^^^ 
                >
                    {/* Image (56px x 56px) */}
                    <div 
                        className="flex-shrink-0 relative w-14 h-14 md:w-14 md:h-14"
                    >
                        {isValidSrc ? (
                            <Image 
                                src={imageSrc} 
                                alt={`Ikon untuk ${title}`} 
                                width={56} 
                                height={56} 
                                className="w-full h-full object-contain"
                            />
                        ) : (
                            <div className="w-full h-full bg-red-100 rounded-full flex items-center justify-center text-xs text-red-500">
                                !IMG
                            </div>
                        )}
                    </div>

                     {/* Feature Text */}
                     <p 
                        // PERUBAHAN DI SINI: Ditambahkan kelas text-left
                        className="font-normal text-[16px] leading-[23px] text-[#362063] font-[DM Sans] flex-grow text-left"
                        style={title.includes('pembayaran') ? { lineHeight: '32px' } : {}}
                    >
                        {title}
                    </p>
                </div>
            </div>
        </div>
    );
};


const WhyJoinSection = () => {
    return (
        <section className="relative pt-40 pb-20"> 
            {/* Latar Belakang Ungu (TIDAK BERUBAH) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2000px] h-[650px] bg-purple-600 opacity-80 blur-2xl rounded-full z-38"></div>

            {/* Konten utama yang berada di atas layer ungu */}
            <div className="container relative z-80 px-4 mx-auto text-center">
                <h2 className="text-4xl font-bold text-white z-90">Why Join Easyticket.id?</h2>
                <p className="max-w-3xl mx-auto mt-4 text-lg text-white opacity-90 z-90">Kami adalah platform penjualan tiket online berbasis cloud, dirancang untuk membantu tempat wisata menjual tiket lebih efektif, tanpa ribet.</p>
                <p className="mt-2 text-lg text-white opacity-90 z-90">Dengan EasyTicket, Anda bisa:</p>
                
                {/* Frame 137: WADAH UTAMA FITUR */}
                <div 
                    className="flex flex-wrap items-center justify-center gap-4 md:gap-5 mt-12 
                               w-full max-w-[1198px] mx-auto"
                >
                    {featuresData.map((feature, index) => (
                        <FeatureCard 
                            key={index}
                            title={feature.title} 
                            imageSrc={feature.imageSrc}
                        />
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default WhyJoinSection;