import React from 'react'
import TypeLoop from './TypeLoop'
import profile from '../assets/profile.jpg'


const GITHUB = 'https://github.com/ruhanahmed01706'
const CV_LINK = '#your-cv-link'


export default function Banner(){
return (
<section id="home" className="min-h-screen flex items-center pt-20">
<div className="container mx-auto px-4">
<div className="grid md:grid-cols-2 items-center gap-8">
<div>
<h1 className="text-4xl md:text-6xl font-bold mb-3">I&apos;m a <TypeLoop  texts={["Ruhan Ahmmed","Fron-End Developer",]} /></h1>
<div className="text-2xl mb-4"></div>
<p className="max-w-xl mb-6">A passionate frontend developer building interactive & responsive user interfaces with React and Tailwind.</p>
<div className="flex gap-3">
<a href={GITHUB} target="_blank" rel="noreferrer" className="btn btn-outline transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 shadow-md p-4">View GitHub</a>
<a href={CV_LINK} target="_blank" rel="noreferrer" className="btn btn-primary transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 shadow-md p-4">Download CV</a>
</div>
</div>


<div className="flex justify-center md:justify-end">
<div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden ring ring-primary ring-offset-4">
<img src={profile} alt="Ruhan" className="object-cover w-full h-full" />
</div>
</div>
</div>
</div>
</section>
)
}