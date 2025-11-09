import React from 'react'


export default function Contact(){
return (
<section id="contact" className="py-20">
<div className="container mx-auto px-4">
<h2 className="text-3xl font-bold mb-4">Contact</h2>
<form className="max-w-lg space-y-4">
<input className="input w-full" placeholder="Name" />
<input className="input w-full" placeholder="Email" />
<textarea className="textarea w-full" placeholder="Message"></textarea>
<button type="button" className="btn btn-primary">Send Message</button>
</form>
</div>
</section>
)
}