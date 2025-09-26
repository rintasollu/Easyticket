// src/components/sections/FaqSection.js
import Image from 'next/image';

const Faqsections = () => {
  return (
    // Mengubah background utama menjadi putih dan menjadikannya relative container
    <section className="relative py-20">
      
      {/* Konten utama yang berada di atas layer Backgroundlinear.svg */}
      <div className="container relative z-10 max-w-3xl px-4 mx-auto text-center">
        <h2 className="mb-12 text-4xl font-bold text-white">Frequently Asked Questions</h2>
        
        {/* Mengganti semua FAQ dengan satu gambar Apakahharus.svg */}
        <div className="flex justify-center">
          <Image
            src="/images/Apakahharus.svg" // Pastikan path ini benar
            alt="Frequently Asked Questions"
            width={10} // Sesuaikan lebar gambar
            height={20} // Sesuaikan tinggi gambar
            className="w-full h-auto max-w-3x1" // Sesuaikan max-w jika perlu
          />
        </div>
      </div>
    </section>
  );
};

export default Faqsections;