import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="min-h-screen p-12 background: bg-orange-200">
      <Nav />
      <div className="pt-12 pl-12 pr-12">
        <AnimatePresence mode='wait'>
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
      </div>
    </div>
  )
}
