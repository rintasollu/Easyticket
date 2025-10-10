// src/components/sections/Footer.js
import { FiPhone, FiMail } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link'; // Ditambahkan jika Anda menggunakan Link

const Footer = () => {
    // Styling dan Data Tombol
    const contactButtons = [
        // Frame 162: Tombol WhatsApp
        {
            href: "tel:082144057125",
            text: '0821 4405 7125',
            icon: FiPhone, // Menggunakan FiPhone sebagai proxy untuk ikon WA (tabler-icon-brand-whatsapp)
            width: '319px',
            bg: '#25D366',
            color: '#FFFFFF',
            shadow: '3px 5px 0px #FFFFFF',
            borderColor: '#FFFFFF',
        },
        // Frame 163: Tombol Email
        {
            href: "mailto:info@easyticket.id",
            text: 'info@easyticket.id',
            icon: FiMail, // Menggunakan FiMail untuk ikon Mail (tabler-icon-mail)
            width: '364px',
            bg: '#FFFFFF',
            color: '#362063',
            shadow: '3px 5px 0px #362063',
            borderColor: '#362063',
        },
    ];

    return (
        // Mengubah background utama menjadi putih dan menjadikannya relative container
        <footer className="relative text-white">
            {/* Latar Belakang Dekoratif Blur Ungu */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1500px] h-[1600px] bg-brand-purple opacity-80 blur-3xl z-0"></div>

            {/* Konten utama yang berada di atas layer Backgroundlinear.svg */}
            <div className="relative z-10">
                <div className="py-16 text-center bg-transparent">
                    <h2 className="text-3xl font-bold">Need Help or Want to Talk First</h2>
                    <p className="mt-2 opacity-80">
  &quot;Contact our merchant team anytime.&quot;
</p>
                    
                    {/* AREA TOMBOL KONTAK BARU */}
                    <div className="flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row">
                        {contactButtons.map((button, index) => (
                            <a 
                                key={index}
                                href={button.href} 
                                // Kelas umum tombol
                                className="inline-flex flex-row items-center justify-center p-4 md:px-3 md:py-2 gap-2 
                                           transition-transform duration-300 hover:scale-105 
                                           h-[60px] rounded-[16px] box-border"
                                
                                // Inline Styles untuk dimensi, warna, border, dan shadow spesifik
                                style={{
                                    width: button.width, // Lebar Spesifik
                                    background: button.bg,
                                    color: button.color,
                                    border: `1px solid ${button.borderColor}`,
                                    boxShadow: button.shadow,
                                }}
                            >
                                {/* Ikon (48px x 48px) */}
                                <button.icon 
                                    className="w-8 h-8 md:w-12 md:h-12" // Ukuran ikon disesuaikan dengan 48px
                                    style={{ color: button.color }}
                                />

                                {/* Teks/Nomor/Email (32px, 32px line-height, Podkova) */}
                                <span 
                                    className="font-[Podkova] font-medium text-[32px] leading-[32px] text-center"
                                    style={{ color: button.color }}
                                >
                                    {button.text}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
                
                {/* Bagian Kolom Footer (TIDAK BERUBAH) */}
                <div className="container grid grid-cols-1 gap-8 px-8 py-12 mx-auto md:grid-cols-4">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold">easyticket</h3>
                        <p className="max-w-md mt-2 text-sm opacity-70">Nikmati pengalaman liburan tanpa ribet! Beli tiket masuk tempat wisata favorit di seluruh Indonesia secara online, cepat, dan terpercaya.</p>
                    </div>
                    <div>
                        <h4 className="mb-4 font-bold">Links</h4>
                        <ul className="space-y-2 text-sm opacity-70">
                            <li><a href="#" className="hover:opacity-100">Cara Beli Tiket</a></li>
                            <li><a href="#" className="hover:opacity-100">Hubungi Kami</a></li>
                            <li><a href="#" className="hover:opacity-100">FAQ</a></li>
                            <li><a href="#" className="hover:opacity-100">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:opacity-100">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 font-bold">Alamat</h4>
                        <a 
                            href="https://www.google.com/maps/search/?api=1&query=Graha+Boulevard+Blok+A1-1,+Kawasan+Summarecon+Mutiara,+Kec.+Biringkanaya,+Kota+Makassar,+Sulawesi+Selatan+90243"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-opacity duration-300 hover:opacity-80"
                        >
                            <p className="text-sm opacity-70">Graha Boulevard Blok A1-1, Kawasan Summarecon Mutiara, Kec. Biringkanaya, Kota Makassar, Sulawesi Selatan 90243</p>
                        </a>
                    </div>
                </div>
                
                {/* Bagian Bawah Footer (Copyright & Payments) - TIDAK BERUBAH */}
                <div className="border-t border-white/20">
                    <div className="container flex flex-col items-center justify-between px-8 py-6 mx-auto text-sm md:flex-row">
                        <a href="#" className="transition-opacity duration-300 hover:opacity-80">
                            <p className="mt-4 text-sm md:mt-0">© PT. BAHANA CIPTA TECHNOLOGY</p>
                        </a>
                        <div className="flex flex-col items-center gap-2 mt-4 text-center md:items-start md:text-left md:mt-0">
                            <p className="opacity-70">Supported payment:</p>
                            <div className="flex items-center gap-2">
                                {[
                                    { src: "/icons/QRIS.svg", alt: "QRIS", href: "#" },
                                    { src: "/icons/Brimo.svg", alt: "Brimo", href: "#" },
                                    { src: "/icons/Shopeepay.svg", alt: "Shopeepay", href: "#" },
                                    { src: "/icons/Ovo.svg", alt: "OVO", href: "#" },
                                    { src: "/icons/Gopay.svg", alt: "Gopay", href: "#" },
                                ].map((payment) => (
                                    <a 
                                        key={payment.alt} 
                                        href={payment.href} 
                                        className="transition-opacity duration-300 hover:opacity-80"
                                        aria-label={`Pembayaran via ${payment.alt}`}
                                    >
                                        <Image src={payment.src} alt={payment.alt} width={40} height={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;