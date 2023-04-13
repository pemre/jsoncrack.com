const withBundleAnalyzer =
  process.env.ANALYZE === "true"
    ? require("@next/bundle-analyzer")({
        enabled: process.env.ANALYZE === "true",
      })()
    : x => x;

const debug = process.env.NODE_ENV !== "production";

/**
 * @type {import('next').NextConfig}
 */
const config = {
  assetPrefix: !debug ? '/jsoncrack.com/' : '',
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = withBundleAnalyzer(config);
