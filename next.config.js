/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})
const nextConfig = {
	reactStrictMode: true,
	skipMiddlewareUrlNormalize: true,
	i18n,
	images: {
		domains: ['localhost'],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		})

		return config
	},
}

module.exports = nextConfig
