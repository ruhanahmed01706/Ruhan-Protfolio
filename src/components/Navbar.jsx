import React from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function Navbar() {
    const [scrolled, setScrolled] = React.useState(false)
    const loc = useLocation()


    React.useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])


    return (
        <header className={`fixed w-full z-40 transition-all ${scrolled ? 'bg-black/40 shadow-sm' : 'nav-transparent'}`}>
            <div className="container mx-auto px-4 py-3 flex bg-gr items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link to="/" className=" font-bold"><span className='text-3xl text-orange-400'>Ruhan</span></Link>
                    <nav className="hidden md:flex gap-4 text-xl">
                        <a href="#home" className={`px-2  ${loc.hash === '#home' || loc.pathname === '/' ? 'text-primary font-semibold' : ''}`}>Home</a>
                        <a href="#projects" className={`px-2 ${loc.hash === '#projects' ? 'text-primary font-semibold' : ''}`}>Projects</a>
                        <a href="#about" className={`px-2 ${loc.hash === '#about' ? 'text-primary font-semibold' : ''}`}>About</a>
                        <a href="#contact" className={`px-2 ${loc.hash === '#contact' ? 'text-primary font-semibold' : ''}`}>Contact</a>
                    </nav>
                </div>
                <div className="flex items-center gap-3">
                    <a href="#contact" className="btn  btn-primary">Contact</a>
                    <a href="#" className="btn  btn-primary ">Hire Me</a>
                </div>
            </div>
        </header>
    )
}