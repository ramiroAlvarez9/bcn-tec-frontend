/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "perimeterinstitute.ca",
        pathname: '**',
      },
    ],
  },  
};





// "https://pics.craiyon.com/2023-11-14/dTh6GhCgTK2OB_mBISa-gg.webp"

export default nextConfig;
