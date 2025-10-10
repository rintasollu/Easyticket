// src/components/sections/FaqSection.js
import Image from 'next/image';

// Data FAQ (TIDAK BERUBAH)
const faqData = [
    // Pertanyaan 1 (PUTIH/UNGU MUDA) -> Rata Kiri
    {
        type: 'question',
        text: 'Apakah harus punya alat khusus?',
        width: '395px', // Desktop Width
        textWidth: '314px',
    },
    // Jawaban 1 (UNGU) -> Rata Kanan
    {
        type: 'answer',
        text: 'Tidak. Bisa diakses lewat HP saja. Jika butuh alat seperti tripod gate, kami bisa bantu.',
        width: '468px', // Desktop Width
        textWidth: '387px',
    },
    // Pertanyaan 2 -> Rata Kiri
    {
        type: 'question',
        text: 'Apakah ada biaya bulanan?',
        width: '339px',
        textWidth: '258px',
    },
    // Jawaban 2 -> Rata Kanan
    {
        type: 'answer',
        text: 'Tidak ada biaya bulanan. Anda hanya dikenakan platform fee dari setiap transaksi (setelah 3 bulan pertama).',
        width: '468px',
        textWidth: '387px',
    },
    // Pertanyaan 3 -> Rata Kiri
    {
        type: 'question',
        text: 'Bagaimana sistem pencairan dananya?',
        width: '449px',
        textWidth: '368px',
    },
    // Jawaban 3 -> Rata Kanan
    {
        type: 'answer',
        text: 'Transparan dan cepat. Dana masuk langsung ke rekening mitra maksimal 3 hari kerja.',
        width: '468px',
        textWidth: '387px',
    },
];

// Komponen Card FAQ (TIDAK BERUBAH)
const FaqCard = ({ type, text, width, textWidth }) => {
    const isQuestion = type === 'question';

    // Menentukan path ikon
    const iconPath = isQuestion ? '/images/Logotandatanya.svg' : '/images/Logocentangputih.svg';
    
    // Kelas umum untuk card
    const baseClasses = `
        box-border flex p-4 gap-2 md:gap-[9px] 
        h-auto rounded-lg shadow-sm transition-transform duration-300 hover:scale-[1.01] 
    `;

    // Kelas spesifik berdasarkan tipe (Question / Answer)
    const typeClasses = isQuestion
        ? `bg-[#EFE6FF] border border-white text-[#362063] items-center flex-row` // Pertanyaan (Kiri)
        : `bg-[#8C52FF] border border-[#642DD0] text-white items-start flex-row`; // Jawaban (Kanan)

    // Styling Icon (40px x 40px)
    const iconClasses = `
        flex-shrink-0 relative w-[40px] h-[40px]
    `;

    // Styling Teks (Rata Kiri di dalam kotak)
    const textClasses = `
        font-['DM_Sans'] font-medium text-[16px] leading-[20px] 
        w-full max-w-full flex-grow-0 text-left 
    `;
    
    const alignment = isQuestion ? 'items-center' : 'items-start';

    // KUNCI: Tata Letak Chat (Horizontal)
    const chatAlignment = isQuestion ? 'mr-auto ml-0' : 'ml-auto mr-0'; 

    return (
        <div 
            // KUNCI PERBAIKAN: Lebar diatur melalui inline style dan max-w di Tailwind
            className={`${baseClasses} ${typeClasses} ${alignment} ${chatAlignment} max-w-[85%] md:w-[${width}] md:max-w-none`}
            style={{ width: isQuestion ? width : width }}
        >
            <div className={iconClasses}>
                <Image
                    src={iconPath}
                    alt={isQuestion ? 'Tanda Tanya' : 'Centang'}
                    width={40}
                    height={40}
                    className="object-contain w-full h-full"
                />
            </div>
            {/* Lebar teks sekarang mengikuti lebar max-w container */}
            <p className={textClasses}>
                {text}
            </p>
        </div>
    );
};


const FaqSection = () => {
    return (
        <section className="relative py-20">
             {/* Background blur ungu (Milik Anda) */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-brand-purple opacity-80 blur-3xl rounded-full z-0"></div>

            {/* Konten utama */}
            <div className="container relative z-10 px-4 mx-auto text-center">
                
                {/* Judul FAQ yang terletak DI ATAS kotak buram */}
                <h2 
                    className="text-center text-white font-bold mx-auto w-full max-w-[658px]"
                    style={{
                        fontFamily: 'DM Sans',
                        fontWeight: '700',
                        fontSize: '48px',
                        lineHeight: '62px',
                        textShadow: '2px 3px 0px rgba(0, 0, 0, 0.25)',
                    }}
                >
                    Frequently Asked Questions
                </h2>
                
                {/* Container untuk Background Buram dan FAQ Cards */}
                <div 
                    // KUNCI PERBAIKAN: Container utama disetel ke h-auto (melalui pb-12/16)
                    className="relative mt-12 mx-auto w-full max-w-[650px] md:max-w-[700px] pb-12 md:pb-16" 
                > 
                    
                    {/* Rectangle 35 - Wadah Putih Buram untuk FAQ Cards SAJA */}
                    <div 
                        // PERUBAHAN DI SINI: Ditambahkan my-[-6] untuk mengurangi tinggi dari atas & bawah (total 48px)
                        className="absolute inset-0 z-0 w-full h-full border border-white bg-white/60 backdrop-blur-sm rounded-2xl my-[-6]"
                    ></div>

                    {/* FAQ Cards Container (Di atas kotak buram, dengan padding untuk menjauh dari tepi) */}
                    <div 
                        className="relative z-10 flex flex-col gap-6 p-4 md:p-10" 
                    >
                        {faqData.map((faq, index) => (
                            <FaqCard 
                                key={index}
                                type={faq.type}
                                text={faq.text}
                                width={faq.width}
                                textWidth={faq.textWidth}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FaqSection;