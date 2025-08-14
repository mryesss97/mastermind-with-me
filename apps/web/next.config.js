import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin('./i18n/config.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@mastermind-with-me/ui"],
};

export default withNextIntl(nextConfig);
