import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen p-12 background: bg-orange-200">
      <Nav />
      <div className="pt-12 pl-12 pr-12">
        <Component {...pageProps} />
      </div>
    </div>
  )
}
