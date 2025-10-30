/** @type {import('next').NextConfig} */
const nextConfig = {
    // ...existing config...
    trailingSlash: true,
    // optional: set NEXT_PUBLIC_ASSET_PREFIX to "/repo-name" in Actions if needed
    assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '',
};

module.exports = nextConfig;
