/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',               // BẮT BUỘC: xuất ra static HTML
  trailingSlash: true,            // Để GitHub Pages load chính xác
  images: {
    unoptimized: true,            // Images static
  },
  basePath: isProd ? '/blog_website' : '',
  assetPrefix: isProd ? '/blog_website/' : '',
};

module.exports = nextConfig;
