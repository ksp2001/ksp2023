import { useState } from 'react';
import Head from 'next/head';
import { motion as m } from 'framer-motion';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

export default function About() {
    const [currentTab, setCurrentTab] = useState<'experience' | 'projects'>('experience');

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: 'easeInOut' }} exit={{ opacity: 0 }}>
            <Head>
                <title>about.</title>
            </Head>
            <section className="flex md:flex-row flex-col mt-3 items-center">
                <div className="flex-1">
                    <div>
                        <div className="font-bold md:text-6xl text-4xl">i'm ketki!</div>
                        <div className="md:text-5xl text-3xl">i like languages, react & negative and liminal spaces.</div>
                    </div>
                    <div className="md:w-52 w-0 md:h-52 h-0 bg-gradient-to-bl from-red-500 to-red-300 rounded-full md:-mt-40 md:-ml-20" />
                </div>
                <div className="flex-1 flex flex-col space-y-4">
                    <div className='ml-5 rounded-md md:-mb-28 md:mt-0 mt-4'>
                        <div className="flex flex-row justify-end space-x-2 mb-4">
                            <div><button onClick={() => setCurrentTab('experience')} className={`md:text-2xl text-xl font-bold hover:text-red-500 ${currentTab === 'experience' ? 'text-red-500 underline' : 'text-black'}`}>experience</button></div>
                            <div><button onClick={() => setCurrentTab('projects')} className={`md:text-2xl text-xl font-bold hover:text-red-500 ${currentTab === 'projects' ? 'text-red-500 underline' : 'text-black'}`}>projects</button></div>
                        </div>
                        {currentTab === 'experience' ? <Experience /> : <Projects />}
                    </div>
                </div>
            </section>
            <div>
                I am currently <b>open to work</b>.
                <div className='flex space-x-1'>
                    <a href="https://www.linkedin.com/in/ketki-panse/" className="hover:text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                    </a>
                    <a href="https://github.com/ksp2001" className="hover:text-red-500 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>
                </div>
            </div>
        </m.div>
    )
}