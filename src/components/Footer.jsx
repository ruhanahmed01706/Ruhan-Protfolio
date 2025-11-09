import React from 'react'


export default function Footer(){
return (
<footer className="py-6 bg-base-200">
<div className="container mx-auto px-4 text-center">
<p>© {new Date().getFullYear()} Ruhan Ahmed. All rights reserved.</p>
</div>
</footer>
)
}