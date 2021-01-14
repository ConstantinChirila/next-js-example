const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({})

if (!process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
  throw new Error(
    'Please remember to supply github API token to your `.env.local` file.'
  )
}
