/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "5nxxrksz1w.ufs.sh",
      },
    ],
  },
}

export default nextConfig
