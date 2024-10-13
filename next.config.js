/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Optional: Uncomment if you're using image optimization features
  // images: {
  //   domains: ['yourdomain.com'], // add any external domains if needed
  // },
  
  async rewrites() {
    return [
      {
        source: "/atom.xml",
        destination: "/feed/atom.xml",
      },
      {
        source: "/feed.json",
        destination: "/feed/feed.json",
      },
      {
        source: "/atom",
        destination: "/feed/atom.xml",
      },
      {
        source: "/json",
        destination: "/feed/feed.json",
      },
    ];
  },

  // Adding webpack configurations to manage file watching
  webpack(config, { isServer }) {
    if (!isServer) {
      // Add custom file watching behavior
      config.watchOptions = {
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300, // Delay before rebuilding
      };
    }
    return config;
  },
};

module.exports = nextConfig;
