const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'shop',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {},
        exposes: {
          './Featured': './pages/featured.js',
          './Search': './pages/search.js',
          './test/one': './pages/test/one.js',
          './test/two': './pages/test/two.js',
          './test/three': './pages/test/three.js',
        },
        shared: {
          '@emotion/': {
            eager: true,
            requiredVersion: false,
            singleton: true,
          },
          '@chakra-ui/': {
            eager: true,
            requiredVersion: false,
            singleton: true,
          },
        },
        extraOptions: {
          exposePages: true
        },
      })
    );

    return config;
  },
}

module.exports = nextConfig
