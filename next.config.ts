import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/uk",
        permanent: false,
      },
      {
        source: "/dlya-koho",
        destination: "/uk/dlya-koho",
        permanent: false,
      },
      {
        source: "/dydaktyka",
        destination: "/uk/dydaktyka",
        permanent: false,
      },
      {
        source: "/kontakty",
        destination: "/uk/kontakty",
        permanent: false,
      },
      {
        source: "/potentsial",
        destination: "/uk/potentsial",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;