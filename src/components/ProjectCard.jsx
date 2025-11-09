import React from 'react'
import { Link } from 'react-router-dom'


export default function ProjectCard({ project }) {
    return (
        <div className="card bg-base-100 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 shadow-md p-4">
            <img src={project.image} alt={project.name} className="rounded-md mb-3 h-44 w-full object-cover" />
            <h3 className="font-semibold text-lg">{project.name}</h3>
            <p className="text-sm text-muted mb-3">{project.description}</p>
            <div className="flex justify-between items-center">
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline">View Project</a>
                <Link to={`/project/${project.id}`} className="btn btn-sm btn-primary">View Details</Link>
            </div>
        </div>
    )
}