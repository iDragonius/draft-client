import axios from 'axios'
import { GetServerSideProps } from 'next'
import React from 'react'
import { QueryClient, dehydrate, useQuery } from 'react-query'
export async function fetchProduct() {
	return (await axios.get('https://jsonplaceholder.typicode.com/todos/1')).data
}
interface TestProps {
	id: string
}
export default function Test() {
	const { data, isLoading, isError } = useQuery<TestProps>(
		'product-1',

		fetchProduct,
		{
			staleTime: Infinity,
			keepPreviousData: true,
			refetchOnWindowFocus: false,
		}
	)
	if (isLoading) {
		return <div>Loading...</div>
	}
	if (isError) {
		return <div>Loading...</div>
	}
	return <div>{data?.id}</div>
}

export const getServerSideProps: GetServerSideProps = async ctx => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery(['product-1'], fetchProduct)

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	}
}
