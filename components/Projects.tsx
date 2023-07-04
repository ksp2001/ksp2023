import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <ul className="text-5xl space-y-3 md:[height:28rem] md:overflow-y-scroll">
            <li>
                <ProjectCard
                    title="Canon Verse"
                    tags={["react", "node js", "openai", "tailwind"]}
                    github="https://github.com/ksp2001/canon-verse"
                    project="https://canon-verse-production.up.railway.app/"
                    image="/canonverse.png"
                >
                    <>
                        <p>Canon Verse uses OpenAI's GPT-3 API to generate a song as if written by a known singer based on prompts provided by user.</p>
                    </>
                </ProjectCard>
            </li>
            <li>
                <ProjectCard
                    title="emqueteati."
                    tags={["react native", "paho mqtt", "expo"]}
                    github="https://github.com/ksp2001/emqueteati"
                    project="https://play.google.com/store/apps/details?id=com.emqueteati.app"
                    image="/emqueteati.png"
                >
                    <>
                        <p>A cross-platform project to facilitate broker connections to publish and receive messages through the MQTT protocol, predominantly used for IoT applications, to send and receive data from sensors and other devices.</p>
                    </>
                </ProjectCard>
            </li>
        </ul>
    )
}

export default Projects;