import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface IReactQueryProvider {
	children: React.ReactNode
}

const qeuryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export function ReactQueryProvider({ children }: IReactQueryProvider) {
	return (
		<QueryClientProvider client={qeuryClient}>
			{children}
		</QueryClientProvider>
	)
}
