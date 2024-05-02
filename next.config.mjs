/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gw.alipayobjects.com"
      }
    ]
  }
};

export default nextConfig;
