import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve("./src/app"), // Adjusted alias pointing to 'src'
      "@assets": path.resolve("public/assets"), // Adjusted alias pointing to 'public/assets'
      "@default_holder": path.resolve("public/assets/cover"),
    };
    return config;
  },
};

export default nextConfig;
