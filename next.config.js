/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    countryApi: 'https://restcountries.com/v3.1',
  }
};

module.exports = nextConfig;
