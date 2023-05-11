import Head from 'next/head';
import Link from 'next/link';
import {motion} from 'framer-motion';

export default function Home() {
  return (
    <div className="h-full">
      <Head>
        <title>ketki. (2023)</title>
        <meta name="description" content="Landing page"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <section className="flex flex-1 md:flex-row flex-col items-center md:text-4xl text-2xl">
            <div className="flex-1">
              <p className="font-bold">hello.</p>
              <p>before you start, take a few seconds to breathe.</p>
            </div>
            <div className="py-24 flex flex-1 items-center justify-center space-x-8 md:right-0">
              <motion.div
                className="w-24 h-24 bg-red-500 rounded-full"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0, duration: 3, repeat: Infinity,  repeatType: 'reverse', repeatDelay: 2}}
              />
              <motion.div
                className="w-36 h-36 bg-red-600 rounded-full"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1, duration: 3, repeat: Infinity, repeatType: 'reverse', repeatDelay: 2}}
              />
              <motion.div
                className="w-12 h-12 bg-red-400 rounded-full"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 2, duration: 3, repeat: Infinity,  repeatType: 'reverse', repeatDelay: 2}}
              />
            </div>
          </section>
          <section className="flex items-center justify-center">
            <Link href="/about" className="underline hover:no-underline">ready? let's head in! {'>'}</Link>
          </section>
      </main>
    </div>
  )
}
