// src/components/sections/SpecialOfferSection.js
import OfferPill from '@/components/ui/OfferPill'; // <-- Path diperbaiki

export default function SpecialOfferSection() {
  return (
    <section className="px-4 py-20 text-center"> {/* <-- Background dihapus */}
      <h2 className="mb-4 text-4xl font-bold text-purple-600">Special Offer for New Partners!</h2>
      <p className="mx-auto mb-12 max-w-2xl text-gray-600">
        Limited-time opportunity: Become one of our Early Access Merchants and enjoy exclusive benefits!
      </p>
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
        <OfferPill text="Garansi 100 tiket pertama terjual" color="purple" />
        <OfferPill text="Bebas biaya registrasi & bebas platform fee selama 3 bulan pertama" color="yellow" />
        <OfferPill text="Gratis materi promosi: poster, video, dan konten sosial media" color="pink" />
        <OfferPill text="Free training & akses dashboard pengelolaan tiket dan data pengunjung" color="blue" />
        <OfferPill text="Dana cepat cair ke rekening (maks. 3 hari kerja)" color="red" />
        <OfferPill text="Jangkauan lebih luas — tampil di platform & promosi EasyTicket" color="orange" />
      </div>
      <p className="mt-12 italic text-gray-500">"We help you sell more — without adding more work."</p>
    </section>
  );
}