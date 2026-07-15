import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Certification badge hosts (Credly for AWS, Oracle CertView).
    remotePatterns: [
      { protocol: "https", hostname: "images.credly.com" },
      { protocol: "https", hostname: "brm-workforce.oracle.com" },
    ],
  },
};

export default nextConfig;
