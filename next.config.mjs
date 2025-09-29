/** @type {import('next').NextConfig} */
const nextConfig = {
    // 1. Tambahkan base path (nama repositori)
    basePath: '/Easyticket',
    
    // 2. Tentukan jalur aset statis
    assetPrefix: '/Easyticket/',
    
    // 3. Opsional: Hapus trailing slash jika tidak diperlukan
    trailingSlash: true,
    
    output: 'export', // Penting: Mengaktifkan output statis (static export)
  };
  
  module.exports = nextConfig;