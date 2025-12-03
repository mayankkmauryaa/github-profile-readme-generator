import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  i18n: {
    locales: ['en', 'de', 'es', 'fr', 'pt-BR'],
    defaultLocale: 'en'
  },
}

export default nextConfig
