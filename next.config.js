/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com','images.unsplash.com'],
    formats: ['image/webp']
  },  
}



module.exports = nextConfig
