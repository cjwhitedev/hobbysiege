/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  distDir: 'docs',
  basePath: '/docs',
};

export default nextConfig;
