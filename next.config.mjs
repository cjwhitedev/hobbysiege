import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js','mdx'],
  output: 'export',
  distDir: 'docs',
  basePath: '/hobbysiege',
  images: {
    unoptimized: true,
  }
}
 
const withMDX = createMDX();
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)