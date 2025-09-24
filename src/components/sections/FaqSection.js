// src/components/sections/FaqSection.js
import FaqItem from "@/components/ui/FaqItem";

export default function FaqSection() {
    return (
        <section className="px-4 py-20">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-12 text-center text-4xl font-bold text-purple-600">
                    Frequently Asked Questions
                </h2>
                <div className="mx-auto max-w-3xl space-y-6">
                    <FaqItem
                        question="Apakah harus punya alat khusus?"
                        answer="Tidak. Bisa diakses lewat HP saja. Jika butuh alat seperti tripod gate, kami bisa bantu."
                    />
                    <FaqItem
                        question="Apakah ada biaya bulanan?"
                        answer="Tidak ada biaya bulanan. Anda hanya dikenakan platform fee dari setiap transaksi (setelah 3 bulan pertama)."
                    />
                    <FaqItem
                        question="Bagaimana sistem pencairan dananya?"
                        answer="Transparan dan cepat. Dana masuk langsung ke rekening mitra maksimal 3 hari kerja."
                    />
                </div>
            </div>
        </section>
    );
}