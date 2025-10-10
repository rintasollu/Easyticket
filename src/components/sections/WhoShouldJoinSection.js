// src/components/sections/WhoShouldJoinSection.js
import Image from 'next/image';
import Link from 'next/link';

// Data untuk 6 kartu
const joinData = [
    { 
        title: "Tempat Wisata Keluarga", 
        imageSrc: "/images/Logotempatwisata.svg", 
        textHeight: 'h-24 md:h-24',
        href: "#" 
    },
    { 
        title: "Wisata Waterpark", 
        imageSrc: "/images/Logowisatawaterpark.svg", 
        textHeight: 'h-12 md:h-12',
        href: "#" 
    },
    { 
        title: "Taman rekreasi", 
        imageSrc: "/images/Logotamankreasi.svg", 
        textHeight: 'h-12 md:h-12',
        href: "#" 
    },
    { 
        title: "Desa wisata dan agrowisata", 
        imageSrc: "/images/Logodesaagro.svg", 
        textHeight: 'h-24 md:h-24',
        href: "#" 
    },
    { 
        title: "Venue atau event", 
        imageSrc: "/images/Logovenuedanevent.svg", 
        textHeight: 'h-12 md:h-12',
        href: "#" 
    },
    { 
        title: "And more...", 
        imageSrc: "/images/Andmoreee.svg",
        textHeight: 'h-12 md:h-12',
        fullWidthText: true,
        href: "#" 
    },
];

const JoinCard = ({ title, imageSrc, textHeight, fullWidthText, href }) => {
    // Styling Card Outer
    const cardClasses = `
        box-border flex flex-row items-center p-2 md:p-3 gap-2
        w-full h-auto min-h-[172px] md:h-[172px] md:w-[400px] /* Lebar 400px di desktop */
        bg-white/60 backdrop-blur-sm border border-white rounded-2xl 
        transition-transform duration-300 hover:scale-[1.01] shadow-lg
    `;
    
    const textClasses = `
        font-[Podkova] font-medium text-[28px] leading-[42px] text-[#362063]
        ${fullWidthText ? 'text-center w-full' : 'w-full md:w-[250px] text-left'}
    `;
    
    // UKURAN IKON
    const imageWrapperClasses = `
        flex-shrink-0 relative w-[100px] h-[100px] 
        ${fullWidthText ? 'hidden' : 'block'}
    `;

    return (
        <a href={href} className="block w-full mx-auto md:w-auto">
            <div className={cardClasses}>
                
                {/* 1. Gambar/Icon */}
                {!fullWidthText && (
                    <div className={imageWrapperClasses}>
                        <Image 
                            src={imageSrc} 
                            alt={`Ikon untuk ${title}`} 
                            width={100}
                            height={100}
                            className="object-contain w-full h-full"
                        />
                    </div>
                )}
                
                {/* 2. Teks */}
                <p className={textClasses}>
                    {title}
                </p>

            </div>
        </a>
    );
};


const WhoShouldJoinSection = () => {
    return (
        <section className="relative py-20">
            {/* Background blur ungu (TIDAK BERUBAH) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-purple-600 opacity-80 blur-3xl rounded-full z-0"></div>

            {/* Konten utama */}
            <div className="container relative z-10 px-4 mx-auto text-center">
                <h2 className="text-4xl font-bold text-white">Who Should Join?</h2>
                
                {/* Grid Kartu Fitur */}
                <div 
                    // Menggunakan grid-cols-1 di mobile, sm:grid-cols-2 untuk tablet kecil, dan lg:grid-cols-2 untuk desktop
                    className="grid w-full max-w-4xl grid-cols-1 gap-6 mx-auto mt-12 sm:grid-cols-2 lg:grid-cols-2" 
                >
                    {joinData.map((item, index) => (
                        <JoinCard 
                            key={index} 
                            title={item.title} 
                            imageSrc={item.imageSrc} 
                            textHeight={item.textHeight}
                            fullWidthText={item.fullWidthText}
                            href={item.href}
                        />
                    ))}
                </div>
                
                {/* Tombol Join Us Now (DIGANTI DARI SVG KE TEKS + TAILWIND) */}
                <div className="flex justify-center mt-12">
                    <Link 
                        href="#" 
                        className="flex flex-row justify-center items-center p-4 md:px-5 md:py-4 gap-2 
                                   w-full max-w-[468px] h-[80px] rounded-2xl
                                   transition-transform duration-300 hover:scale-[1.02]"
                        
                        style={{
                            background: '#8C52FF',
                            border: '1px solid #441F8D',
                            boxShadow: '4px 5px 0px #441F8D',
                            width: '468px',
                        }}
                    >
                        <span className="text-white text-center font-medium font-[Podkova] text-[32px] leading-[48px] w-full" style={{ fontWeight: 500, fontSize: '32px', lineHeight: '48px' }}>
                            Join Us Now — It&apos;s 100% FREE
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhoShouldJoinSection;