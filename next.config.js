/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel already sends Strict-Transport-Security; these cover the rest.
  // No Content-Security-Policy yet: the inline theme script would need a
  // hash or nonce, so that's a separate change.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
