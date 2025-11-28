/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 16 Features
  reactStrictMode: true,
  experimental: {
    // Enable Cache Components ("use cache")
    dynamicIO: true,
    // Enable React Compiler (automatic memoization)
    reactCompiler: true,
    // Faster dev restarts with Turbopack
    turbopackFileSystemCacheForDev: true,
  },
}

module.exports = nextConfig
