const CompressionPlugin = require('compression-webpack-plugin');
const nextConfig = {
  webpack: function(config) {
    config.plugins.push(new CompressionPlugin());    
    return config;
  },
  compress: true,
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com','images.unsplash.com'],
    formats: ['image/webp']
  },  
}



module.exports = nextConfig