/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images:{
    domains: [
      'e-cdns-images.dzcdn.net', 
      'cdns-images.dzcdn.net', 
      "i.postimg.cc"
    ],
  }
};

module.exports = nextConfig;
