import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
    transpilePackages: ['socket.io']

};

export default withNextIntl(nextConfig);
