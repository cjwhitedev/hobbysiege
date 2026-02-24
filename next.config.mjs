/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'docs',
  basePath: '/hobbysiege',
  images: {  
    unoptimized: true,
  },  
};

export default nextConfig;