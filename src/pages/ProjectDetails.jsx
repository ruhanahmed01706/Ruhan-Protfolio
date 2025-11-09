import React from 'react'
import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects.json'


export default function ProjectDetails(){
const { id } = useParams()
const proj = projects.find(p => String(p.id)===id)
if(!proj) return <div className="container mx-auto p-8">Project not found</div>


return (
<div className="container mx-auto px-4 py-12">
<div className="grid md:grid-cols-2 gap-8">
<img src={proj.image} alt={proj.name} className="w-full h-96 object-cover rounded" />
<div>
<h2 className="text-3xl font-bold">{proj.name}</h2>
<p className="mt-4">{proj.description}</p>
<p className="mt-4 font-semibold">Features:</p>
<ul className="list-disc ml-5">
{proj.features.map((f,i)=>(<li key={i}>{f}</li>))}
</ul>
<p className="mt-3">Rating: {proj.rating} / 5</p>
<div className="flex gap-2 mt-6">
<a href={proj.github} target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
<a href={proj.liveLink} target="_blank" rel="noreferrer" className="btn btn-primary">Open Live</a>
<Link to="/" className="btn btn-ghost">Back</Link>
</div>
</div>
</div>
</div>
)
}