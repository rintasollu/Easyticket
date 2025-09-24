// src/components/sections/Footer.js
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-purple-700 px-8 pt-20 pb-8 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-bold">Need Help or Want to Talk First?</h2>
                    <p className="text-purple-200">"Contact our merchant team anytime."</p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-6 md:flex-row">
                        <a href="tel:082144057125" className="flex items-center gap-3 rounded-lg bg-green-500 py-3 px-6 font-bold text-white transition hover:bg-green-600">
                            <FaWhatsapp size={24} /> 0821 4405 7125
                        </a>
                        <a href="mailto:info@easyticket.id" className="flex items-center gap-3 rounded-lg bg-white py-3 px-6 font-bold text-gray-800 transition hover:bg-gray-100">
                            <FaEnvelope size={24} /> info@easyticket.id
                        </a>
                    </div>
                </div>

                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 border-t border-purple-500 pt-12 md:grid-cols-3">
                    <div>
                        <h3 className="mb-2 text-2xl font-bold">easyticket</h3>
                        <p className="text-sm text-purple-200">
                            Nikmati pengalaman liburan tanpa ribet! Beli tiket masuk tempat wisata favorit di seluruh Indonesia secara online, cepat, dan terpercaya.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-3 font-bold">Links</h4>
                        <ul className="space-y-2 text-sm text-purple-200">
                            <li><a href="#" className="hover:underline">Cara Beli Tiket</a></li>
                            <li><a href="#" className="hover:underline">Hubungi Kami</a></li>
                            <li><a href="#" className="hover:underline">FAQ</a></li>
                            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-3 font-bold">Alamat</h4>
                        <p className="text-sm text-purple-200">
                            Graha Boulevard Blok A1-1, Kawasan Summarecon Mutiara, Kec. Biringkanaya, Kota Makassar, Sulawesi Selatan 90243
                        </p>
                    </div>
                </div>

                <div className="mx-auto mt-12 flex flex-col items-center justify-between border-t border-purple-500 pt-6 text-sm text-purple-300 md:flex-row">
                    <div>
                        <h4 className="mb-2 font-semibold">Supported payment</h4>
                        <div className="flex items-center gap-4">
                            <span>QRIS</span>
                            <span>BRI</span>
                            <span>OVO</span>
                            <span>Gopay</span>
                        </div>
                    </div>
                    <p className="mt-6 md:mt-0">&copy; PT. BAHANA CIPTA TECHNOLOGY</p>
                </div>
            </div>
        </footer>
    );
}