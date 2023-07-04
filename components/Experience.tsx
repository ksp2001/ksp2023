import ExpCard from "./ExpCard";

function Experience() {
    return (
        <ul className="text-5xl space-y-3 md:[height:28rem] md:overflow-y-scroll">
            <li>
                <ExpCard
                    date="SEPT 2022 - MAY 2023"
                    title="Shopify Mobile Polaris"
                    position="Mobile Developer"
                    tags={["react native", "typescript", "graphql", "mode"]}
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
                    tags={["react native", "graphql", "reanimate"]}
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
                    tags={["ruby", "ruby on rails", "graphql", "mysql"]}
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
                    tags={["react", "typescript", "graphql"]}
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
    )
}

export default Experience;