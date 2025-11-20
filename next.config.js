/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    basePath: isProd ? '/PersonalBlog' : '',
    assetPrefix: isProd ? '/PersonalBlog' : '',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
