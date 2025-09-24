// src/components/sections/WhyJoinSection.js
export default function WhyJoinSection() {
  return (
    <section className="bg-purple-600 px-4 py-20 text-center text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-4xl font-bold">Why Join Easyticket.id?</h2>
        <p className="mx-auto mb-12 max-w-3xl">
          Kami adalah platform penjualan tiket online berbasis cloud, dirancang untuk membantu tempat wisata menjual tiket lebih efektif, tanpa ribet. Dengan EasyTicket, Anda bisa:
        </p>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-white/20 p-6 backdrop-blur-sm">Terima pembayaran online & QRIS</div>
          <div className="rounded-xl bg-white/20 p-6 backdrop-blur-sm">Kelola tiket dan kunjungan dari dashboard</div>
          <div className="rounded-xl bg-white/20 p-6 backdrop-blur-sm">Akses laporan penjualan secara real-time</div>
          <div className="rounded-xl bg-white/20 p-6 backdrop-blur-sm md:col-span-1 lg:col-auto">Kurangi antrean, tingkatkan kepuasan pengunjung</div>
          <div className="rounded-xl bg-white/20 p-6 backdrop-blur-sm md:col-span-1 lg:col-auto">Promosi bareng EasyTicket gratis</div>
        </div>
      </div>
    </section>
  );
}