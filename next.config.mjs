/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cryptospro.com.br",
        port: "",
        pathname: "/planetas/**",
      },
    ],
  },
};

export default nextConfig;
