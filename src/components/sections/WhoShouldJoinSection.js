// src/components/sections/WhoShouldJoinSection.js
import Image from 'next/image';

const JoinCard = ({ title, iconSrc }) => (
    <div className="flex items-center gap-4 rounded-2xl bg-white p-8 shadow-lg">
        <Image src={iconSrc} alt={title} width={64} height={64} />
        <span className="text-lg font-bold">{title}</span>
    </div>
);

export default function WhoShouldJoinSection() {
    return (
        <section className="px-4 py-20 text-center">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-12 text-4xl font-bold text-purple-600">Who Should Join?</h2>
                <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Ganti iconSrc dengan path ke ikon SVG Anda */}
                    <JoinCard title="Tempat Wisata Keluarga" iconSrc="/icons/wisata-keluarga.svg" />
                    <JoinCard title="Wisata Waterpark" iconSrc="/icons/waterpark.svg" />
                    <JoinCard title="Taman rekreasi" iconSrc="/icons/taman-rekreasi.svg" />
                    <JoinCard title="Desa wisata dan agrowisata" iconSrc="/icons/desa-wisata.svg" />
                    <JoinCard title="Venue atau event" iconSrc="/icons/venue.svg" />
                    <div className="flex items-center justify-center rounded-2xl bg-white/50 p-8 text-xl font-bold text-purple-500 shadow-lg">
                        And more...
                    </div>
                </div>
                <button className="transform mt-12 rounded-xl bg-purple-600 py-4 px-10 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-purple-700">
                    Join Us Now — It's 100% FREE
                </button>
            </div>
        </section>
    );
}