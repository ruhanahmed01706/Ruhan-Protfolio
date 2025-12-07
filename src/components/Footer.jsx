import React from 'react'


export default function Footer(){
return (
<footer className="py-6 bg-gray-400 flex">
<div className="container mx-auto px-4 text-center">
<p>© {new Date().getFullYear()} Ruhan Ahmed. All rights reserved.</p>
</div>
<div className='text-2xl '>
<a href="" className='text-white bg-blue-500'><i class="fa-brands fa-github"></i></a>
<a href="" className='text-white bg-blue-500 mx-2'><i class="fa-brands fa-instagram"></i></a>
<a href="" className='text-white bg-blue-500'><i class="fa-brands fa-facebook"></i></a>
</div>
</footer>
)
}