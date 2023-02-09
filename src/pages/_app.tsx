import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { wrapper } from '@/store'
import { NextPage } from 'next'
import { Component, ReactElement, ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
export default function App({ Component, ...rest }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props
  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>,
  )
}
