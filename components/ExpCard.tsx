import { ReactElement } from "react";

interface ExpCardProps {
    date: string;
    title: string;
    position: string;
    children: ReactElement;
    tags: string[];
}
export default function ExpCard({date, title, position, children, tags}: ExpCardProps) {
    return(
        <div className='hover:ml-2 hover:from-red-400 hover:to-red-200 hover:bg-gradient-to-tr rounded-md p-6 bg-opacity-5 bg-red-500'>
            <div className="text-xs text-orange-800 font-semibold">{date}</div>
            <div className="text-sm font-bold" role="heading" aria-level={1}>{title}</div>
            <div className="text-sm" role="heading" aria-level={2}>{position}</div>
            <div className="text-sm text-justify pt-1">{children}</div>
            <div className="inline-flex text-xs text-center space-x-1">
                {tags.map(value => (<div className="rounded-full bg-gradient-to-r from-red-600 to-red-400 px-1 align-middle" key={value}>{value}</div>))}
            </div>
        </div>
    )
}