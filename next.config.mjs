import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve("./src/app"), // Adjusted alias pointing to 'src'
    };
    return config;
  },
};

export default nextConfig;
