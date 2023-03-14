/** @type {import('next').NextConfig} */

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_BASE_LANG = "ko";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `${API_BASE_URL}/movie/popular?api_key=${process.env.API_KEY}&language=${API_BASE_LANG}&page=1`,
      },
      {
        source: "/api/movies/:id",
        destination: `${API_BASE_URL}/movie/:id?api_key=${process.env.API_KEY}&language=${API_BASE_LANG}`,
      },
    ];
  },
};

module.exports = nextConfig;
