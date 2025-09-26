import Image from 'next/image';

const SpecialOffer = () => {
  return (
    <section className="relative py-20">
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
        
        {/* Daftar Benefit Baru */}
        <div className="relative flex flex-col items-center mt-10 space-y-4">
            {[
                { 
                    src: 'Garansi100.svg', 
                    alt: 'Garansi 100 tiket pertama terjual', 
                    width: 343, height: 53, 
                    className: '-rotate-1 -translate-x-4',
                    href: '#'
                },
                { 
                    src: 'Bebasbiaya.svg', 
                    alt: 'Bebas biaya registrasi & bebas platform fee selama 3 bulan pertama', 
                    width: 661, height: 53, 
                    className: 'rotate-1 -translate-x-4',
                    href: '#'
                },
                { 
                    src: 'Gratismateri.svg', 
                    alt: 'Gratis materi promosi: poster, video, dan konten sosial media', 
                    width: 594, height: 53, 
                    className: '-rotate-1 -translate-x-4',
                    href: '#'
                },
                { 
                    src: 'Freetraining.svg', 
                    alt: 'Free training & akses dashboard pengelolaan tiket dan data pengunjung', 
                    width: 466, height: 53, 
                    className: '-rotate-1 -translate-x-2',
                    href: '#'
                },
                { 
                    src: 'Danacepat.svg', 
                    alt: 'Dana cepat cair ke rekening (maks. 3 hari kerja)', 
                    width: 619, height: 53, 
                    className: 'rotate-1 -translate-x-3',
                    href: '#'
                },
                { 
                    src: 'Jangkauanluas.svg', 
                    alt: 'Jangkauan lebih luas — tampil di platform & promosi EasyTicket', 
                    width: 600, height: 53, 
                    className: '-rotate-1 -translate-x-5',
                    href: '#'
                },
            ].map((benefit) => (
                <a 
                    key={benefit.alt} 
                    href={benefit.href}
                    className={`relative flex justify-center transition-transform duration-300 hover:scale-105 ${benefit.className}`}
                >
                    <Image
                        src={`/images/${benefit.src}`}
                        alt={benefit.alt}
                        width={benefit.width}
                        height={benefit.height}
                        className="object-contain"
                    />
                </a>
            ))}
        </div>
        
        <p className="mt-12 text-xl italic font-semibold text-purple-950">"We help you sell more — without adding more work."</p>
      </div>
    </section>
  );
};

export default SpecialOffer;