/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static exports for GitHub Pages
  distDir: 'out', // Output directory for build artifacts
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  trailingSlash: true, // Add trailing slashes to URLs
  basePath: process.env.NODE_ENV === 'production' ? '/thedan-ai-landing' : '', // For GitHub Pages subdirectory
};

export default nextConfig;
