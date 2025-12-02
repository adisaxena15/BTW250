/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/BTW250" : "",
  assetPrefix: isProd ? "/BTW250/" : "",
};

export default nextConfig;
