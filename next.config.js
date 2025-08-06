
// ============================================
// next.config.js  
// ============================================
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'localhost',
      'onlybrands.oohfixer.com',
      // Add your image domains here
    ],
  },
  // Enable if you need PWA later
  // webpack: (config) => {
  //   config.resolve.fallback = {
  //     ...config.resolve.fallback,
  //     fs: false,
  //   };
  //   return config;
  // },
};
