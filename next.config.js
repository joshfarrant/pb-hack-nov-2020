const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withPWA = require('next-pwa');

// The order of these is important
const plugins = [
  withPWA({
    pwa: {
      dest: 'public',
    },
  }),
  withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  }),
];

const nextConfig = {
  pageExtensions: ['ts', 'tsx'],
  // experimental: {
  //   modern: true,
  // },
};

module.exports = withPlugins(plugins, nextConfig);
