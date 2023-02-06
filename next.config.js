const withInterceptStdout = require("next-intercept-stdout");

nextConfig = withInterceptStdout(
  {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false;
        config.resolve.fallback.child_process = false;
        config.resolve.fallback.net = false;
        config.resolve.fallback.dns = false;
        config.resolve.fallback.tls = false;
      }
      return config;
    },
    reactStrictMode: true,
  },
  (text) => (text.includes("Duplicate atom key") ? "" : text)
);

module.exports = nextConfig;
