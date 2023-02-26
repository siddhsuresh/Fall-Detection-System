import { ErrorFallbackProps, ErrorComponent, ErrorBoundary, AppProps } from "@blitzjs/next"
import { AuthenticationError, AuthorizationError } from "blitz"
import { withBlitz } from "src/blitz-client"
import "src/styles/globals.css"
import "src/core/styles/index.css"
import "@tremor/react/dist/esm/tremor.css"
import { MantineProvider } from "@mantine/core"
import { Suspense } from "react"

function RootErrorFallback({ error }: ErrorFallbackProps) {
  if (error instanceof AuthenticationError) {
    return <div>Error: You are not authenticated</div>
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent
        statusCode={(error as any)?.statusCode || 400}
        title={error.message || error.name}
      />
    )
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <ErrorBoundary FallbackComponent={RootErrorFallback}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          {getLayout(<Component {...pageProps} />)}
        </Suspense>
    </MantineProvider>
    </ErrorBoundary >
  )
}

export default withBlitz(MyApp)
