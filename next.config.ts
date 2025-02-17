import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "anilkumarmahato.com.np"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "anilkumarmahato.com.np",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig

