// src/components/sections/SpecialOfferSection.js
import Image from 'next/image';

const SpecialOffer = () => {
    // Data penawaran yang sudah disederhanakan dan diperbarui dengan properti styling
    const offers = [
        // Frame 140: Garansi 100
        { 
            text: 'Garansi 100 tiket pertama terjual', 
            width: '343px', 
            bg: '#8C52FF', 
            color: '#FFFFFF', 
            rotate: '-1deg', 
            shadow: '3px 5px 0px #441F8D', 
            border: '1px solid #441F8D',
            // href dihapus
        },
        // Frame 141: Bebas biaya
        { 
            text: 'Bebas biaya registrasi & bebas platform fee selama 3 bulan pertama', 
            width: '661px', 
            bg: '#FFCC32', 
            color: '#282828', 
            rotate: '1deg', 
            shadow: '-3px 5px 0px #282828', 
            border: '1px solid #282828',
            // href dihapus
        },
        // Frame 142: Gratis materi
        { 
            text: 'Gratis materi promosi: poster, video, dan konten sosial media', 
            width: '594px', 
            bg: '#D84695', 
            color: '#FFFFFF', 
            rotate: '-2deg', 
            shadow: '3px 5px 0px #821D54', 
            border: '1px solid #821D54',
            // href dihapus
        },
        // Frame 143: Free training
        { 
            text: 'Free training & akses dashboard pengelolaan tiket dan data pengunjung', 
            width: '692px', 
            bg: '#8C52FF', 
            color: '#FFFFFF', 
            rotate: '-1deg', 
            shadow: '-3px 5px 0px #441F8D', 
            border: '1px solid #441F8D',
            // href dihapus
        },
        // Frame 144: Dana cepat
        { 
            text: 'Dana cepat cair ke rekening (maks. 3 hari kerja)', 
            width: '465px', 
            bg: '#D84695', 
            color: '#FFFFFF', 
            rotate: '1deg', 
            shadow: '3px 5px 0px #821D54', 
            border: '1px solid #821D54',
            // href dihapus
        },
        // Frame 145: Jangkauan lebih luas
        { 
            text: 'Jangkauan lebih luas — tampil di platform & promosi EasyTicket', 
            width: '619px', 
            bg: '#FFCC32', 
            color: '#282828', 
            rotate: '-1deg', 
            shadow: '-3px 5px 0px #282828', 
            border: '1px solid #282828',
            // href dihapus
        },
    ];

    return (
        <section className="relative py-20">
            {/* Latar Belakang Peta Dekorasi (TIDAK BERUBAH) */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[450px] z-0 -translate-y-15">
                <Image
                    src="/icons/Peta.svg"
                    alt="Peta Dekorasi"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-100 pointer-events-none"
                />
            </div>
            
            <div className="container px-4 mx-auto text-center">
                <h2 className="text-4xl font-bold text-purple-500">Special Offer for New Partners!</h2>
                <p className="mt-4 text-purple-950">Limited-time opportunity: Become one of our Early Access Merchants and enjoy exclusive benefits!</p>
                
                {/* Daftar Benefit BARU (Menggunakan DIV Statis) */}
                <div className="relative flex flex-col items-center justify-center mt-10 space-y-4">
                    {offers.map((offer, index) => (
                        <div 
                            key={index} 
                            // Mengganti <a> dengan <div> dan menghapus kelas interaktif/hover
                            className="relative flex justify-center items-center p-2 md:p-[10px_16px] 
                                       w-full h-[53px] 
                                       font-['DM_Sans'] rounded-[16px] mx-auto cursor-default" /* Menambahkan cursor-default */
                            
                            style={{
                                maxWidth: offer.width, 
                                background: offer.bg,
                                border: offer.border,
                                boxShadow: offer.shadow,
                                transform: `rotate(${offer.rotate})`,
                            }}
                        >
                            <p 
                                // Ukuran teks 14px dan line-height 20px
                                className="font-medium text-[14px] leading-[20px] text-center w-full whitespace-normal"
                                style={{
                                    color: offer.color,
                                    fontWeight: (offer.text.includes('Garansi')) ? '500' : '400',
                                }}
                            >
                                {offer.text}
                            </p>
                        </div>
                    ))}
                </div>
                
                {/* KUTIPAN YANG DIMODIFIKASI */}
                <p 
                    className="mt-12 mx-auto w-full max-w-[579px] text-center"
                    style={{
                        fontFamily: 'Podkova', 
                        fontWeight: '500', 
                        fontSize: '24px', 
                        lineHeight: '32px',
                        color: '#362063',
                    }}
                >
                    &quot;We help you sell more &mdash; without adding more work.&quot;
                </p>
            </div>
        </section>
    );
};

export default SpecialOffer;