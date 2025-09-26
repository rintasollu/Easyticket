// src/components/sections/WhoShouldJoinSection.js
import Image from 'next/image';

const WhoShouldJoinSection = () => {
  return (
   // Mengubah background utama menjadi putih dan menjadikannya relative container
   <section className="relative py-20">
   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-brand-purple opacity-80 blur-3xl rounded-full z-0"></div>

      {/* Konten utama yang berada di atas layer Backgroundbulat.svg */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <h2 className="text-4xl font-bold text-white">Who Should Join?</h2>
        
        {/* Mengganti grid 6 kotak teks menjadi grid 6 gambar SVG */}
        <div className="grid max-w-4xl grid-cols-1 gap-6 mx-auto mt-12 sm:grid-cols-2 lg:grid-cols-3">
  {[
    { src: "/images/Tempatwisata.svg", alt: "Tempat Wisata Keluarga", href: "#" },
    { src: "/images/Wisatawaterpark.svg", alt: "Wisata Waterpark", href: "#" },
    { src: "/images/Tamanrekreasi.svg", alt: "Taman rekreasi", href: "#" },
    { src: "/images/Desawisataagro.svg", alt: "Desa wisata dan agrowisata", href: "#" },
    { src: "/images/Venueevent.svg", alt: "Venue atau event", href: "#" },
    { src: "/images/Andmoreee.svg", alt: "And more...", href: "#" },
  ].map((item) => (
    <a key={item.alt} href={item.href} className="block transition-transform duration-300 hover:scale-105">
      <Image src={item.src} alt={item.alt} width={300} height={150} className="w-full h-auto" />
    </a>
  ))}
</div>
        
        {/* Mengganti tombol Join Us Now dengan gambar SVG */}
        <div className="flex justify-center mt-12">
  <a href="#" className="block transition-transform duration-300 hover:scale-105">
    <Image
      src="/images/Joinusnow.svg"
      alt="Join Us Now — It's 100% FREE"
      width={350}
      height={60}
      className="w-full h-auto max-w-sm cursor-pointer"
    />
  </a>
</div>
      </div>
    </section>
  );
};

export default WhoShouldJoinSection;