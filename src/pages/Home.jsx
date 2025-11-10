import React from 'react'
import Banner from '../Components/Banner'
import Projects from '../Components/Projects'
import About from '../Components/About'
import Contact from '../Components/Contact'


export default function Home(){
return (
<div className='w-11/12 mx-auto'>
<Banner />
<Projects />
<About/>
<Contact />
</div>
)
}