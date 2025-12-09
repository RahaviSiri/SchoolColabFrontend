/** @type {import('next').NextConfig} */ // It gives IntelliSense, type checking, and auto-suggestions to your editor (VSCode).
const nextConfig = {
  experimental: {
    appDir: true, // Enables the App Router (app/ folder) features.
    serverComponentsExternalPackages: ["mongoose"], 
    // Normally, Next.js blocks some heavy node packages. By adding "mongoose" here, we allow it to be used in server components.
  },
  turbopack: {}, // Disables Turbopack, Next.js's new bundler, opting to use Webpack instead for compatibility or preference reasons.
  webpack(config) {
    config.experiments = {
      ...config.experiments, // It updates Webpack’s experiments settings without removing the existing ones.
      topLevelAwait: true, 
      // Enables the use of top-level await in modules, allowing for cleaner asynchronous code.
    };
    return config;
  },
  images: {
    domains: ["res.cloudinary.com"], 
  },
};

export default nextConfig;
