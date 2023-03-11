import '@/styles/globals.scss'
import { LazyMotion, domAnimation } from 'framer-motion'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import localFont from 'next/font/local'
import { appWithTranslation } from 'next-i18next'
import { TTHoves } from '@/components/fonts'
function MemorialApp({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient()
	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<LazyMotion features={domAnimation}>
					<main className={`${TTHoves.variable} font-sans `}>
						<Component {...pageProps} />
					</main>
				</LazyMotion>
				<ReactQueryDevtools initialIsOpen={false} />
			</Hydrate>
		</QueryClientProvider>
	)
}

export default appWithTranslation(MemorialApp)
