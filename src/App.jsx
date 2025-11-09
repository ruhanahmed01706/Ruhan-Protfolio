import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'


import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


export default function App(){
const location = useLocation()
return (
<div className="flex flex-col min-h-screen">
<Navbar />
<main className="flex-1">
<AnimatePresence mode="wait">
<Routes location={location} key={location.pathname}>
<Route path="/" element={<Home />} />
<Route path="/project/:id" element={<ProjectDetails />} />
</Routes>
</AnimatePresence>
</main>
<Footer></Footer>
</div>
)
}