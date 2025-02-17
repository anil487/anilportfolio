import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "anilkumarmahato.com.np"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "anilkumarmahato.com.np",
        pathname: "/portfolio_anil/public/images",
      },
    ],
  },
}

export default nextConfig

