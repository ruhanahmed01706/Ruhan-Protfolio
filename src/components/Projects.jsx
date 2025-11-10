import React from 'react'
import projectsData from '../data/projects.json'
import ProjectCard from './ProjectCard'





export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">My Projects</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map(p => <ProjectCard key={p.id} project={p} />)}
                </div>
            </div>
        </section>
    )
}