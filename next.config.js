/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/countries',
        permanent: true,
      },
      {
        source: '/country',
        destination: '/countries',
        permanent: true,
      },
    ];
  },
  experimental: {
    appDir: true,
  },
  env: {
    countryApi: 'https://restcountries.com/v3.1',
  }
};

module.exports = nextConfig;
