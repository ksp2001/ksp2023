import { ReactElement } from "react";

interface ProjectCardProps {
    title: string;
    children: ReactElement;
    github: string;
    project?: string;
    tags: string[];
    image: string;
}
export default function ProjectCard({ title, github, project, children, tags, image }: ProjectCardProps) {
    return (
        <div className='hover:ml-2 hover:from-red-400 hover:to-red-200 hover:bg-gradient-to-tr rounded-md p-6 bg-opacity-5 bg-red-500'>
            <div className="flex flex-row space-x-2">
                <div className="w-1/4 h-min"><img src={image} className="rounded-md overflow-clip"></img></div>
                <div className="w-3/4">
                    <a href={project}><div className="text-base font-bold text-red-900" role="heading" aria-level={1}>
                        {title}
                    </div></a>
                    <div className="text-xs text-justify">(<a href={github} className="underline hover:no-underline">github</a> / {project ? <a href={project} className="underline hover:no-underline">project</a> : ''})</div>
                    <div className="text-sm text-justify pt-1">{children}</div>
                    <div className=" inline-flex flex-wrap text-xs space-x-1 pt-0 mt-0">
                        {tags.map(value => (<div className="rounded-full bg-gradient-to-r from-red-600 to-red-400 px-1 " key={value}>{value}</div>))}
                    </div>
                </div>
            </div>
        </div>
    )
}