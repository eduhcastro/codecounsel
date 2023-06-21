/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["https://xxxx.supabase.co"]
  },
  async redirects() {
    return [
      {
        permanent: false,
        source: '/index',
        destination: '/',
      },
    ]
  },
}

