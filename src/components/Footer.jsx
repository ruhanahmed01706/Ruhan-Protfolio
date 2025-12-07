import React from 'react'


export default function Footer() {
    return (
        <footer className="py-6 bg-gray-400 flex">
            <div className="container mx-auto px-4 text-center">
                <p>© {new Date().getFullYear()} <span className='text-orange-300'>Ruhan Ahmed.</span> All rights reserved.</p>
            </div>
            <div className='text-2xl '>
                <a href="https://github.com/ruhanahmed01706" className='text-white bg-gray-700 rounded-full'><i class="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/md-ruhan-ahmed-21a692390/" className='text-white bg-blue-700 mx-2'><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://www.facebook.com/md.ruhan.ahmed.533192" className='text-white bg-blue-700 rounded-full'><i class="fa-brands fa-facebook"></i></a>
            </div>
        </footer>
    )
}