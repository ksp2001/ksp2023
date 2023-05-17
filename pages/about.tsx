import ExpCard from '@/components/ExpCard';
import Head from 'next/head';

export default function About() {
    return(
        <>
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
            <div className="flex-1">
                <div className='ml-5 md:[height:28rem] md:overflow-y-scroll rounded-md md:-mb-24 md:mt-0 mt-4'>
                    <ul className=" text-5xl space-y-3">
                        <li>
                            <ExpCard 
                                    date="SEPT 2022 - MAY 2023" 
                                    title="Shopify Mobile Polaris" 
                                    position="Mobile Developer" 
                                    tags={["react native","typescript","graphql", "mode"]}
                                >
                                    <>
                                        Building out the components library for Shopify's mobile app, working across the board with teams to increase consistency across Shopify mobile surfaces. Created dynamically generated documentation for the library. Was part of the efforts to extract the core library into a package outside of the immediate app. Also took initiative to improve accessibility of components in the library, collecting data and identifying biggest problem areas to help guide direction of the a11y project.
                                    </>
                            </ExpCard>
                        </li>
                        <li>
                            <ExpCard 
                                    date="JAN 2022 - AUG 2022" 
                                    title="Shop Pay" 
                                    position="Mobile Intern" 
                                    tags={["react native","graphql","reanimate"]}
                            >
                                <>
                                    Worked on shipping several fast paced consumer-facing projects, including carbon offsets tracking for Shop Pay, the first iteration of <a href="https://help.shop.app/hc/en-us/articles/5052986190612-Shop-Cash" className="hover:no-underline underline">Shop Cash</a> and <a href="https://twitter.com/ShopifyPlus/status/1624053043116253184" className="hover:no-underline underline">Shop Cash Boosts</a> to bring cashback to merchants customers of Shop Pay. Also increased efforts to make Shop Pay accessible for large text and text-to-speech users.
                                </>
                            </ExpCard>
                        </li>
                        <li>
                            <ExpCard 
                                    date="MAY 2021 - DEC 2021" 
                                    title="Shopify Orders Checkout" 
                                    position="Backend Intern" 
                                    tags={["ruby","ruby on rails","graphql", "mysql"]}
                                >
                                    <>
                                        Working to profile and increase efficiency in the backend checkout processes, increasing overall speed of checkout process by implementing faster data structures and reducing object duplication.
                                    </>
                            </ExpCard>
                        </li>
                        <li>
                            <ExpCard 
                                date="MAY 2020 - APR 2021" 
                                title="Shopify Insights Web" 
                                position="Frontend Intern" 
                                tags={["react","typescript","graphql"]}
                            >
                                <>
                                    Implementing clean and informative reports, graphs, charts and analytics dashboard to help merchants easily understand their business at a glance, including working on <a href="https://twitter.com/ShopifyDevs/status/1332368272226885632" className="hover:no-underline underline">BFCM2020 liveview</a>. Also improved accessibility of components in the open source <a href="https://polaris-viz.shopify.com/?path=/story/intro--page" className="hover:no-underline underline">Polaris Viz library</a>.
                                </>
                            </ExpCard>
                        </li> 
                        <li>
                            <div className="text-sm">View my full resume <a href="https://drive.google.com/file/d/1NO-2-REJEy-641fih_cd9g0EBR_im-KG/view?usp=sharing" className="underline hover:no-underline hover:text-red-500">here</a>.</div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <div>
            I am currently <b>open to work</b>.
            <div className='flex space-x-1'>
                <a href="https://www.linkedin.com/in/ketki-panse/" className="hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                </a>
                <a href="https://github.com/ksp2001" className="hover:text-red-500 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                </a>
            </div>
        </div>
        </>
    )
}