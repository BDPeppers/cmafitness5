/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  redirects: async () => {
    return [
      {
        source: "/Home",
        destination: "/",
        permanent: true,
      },
    ];
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
