import React from 'react'


export default function TypeLoop({ texts = [] }){
const [i, setI] = React.useState(0)
React.useEffect(()=>{
const id = setInterval(()=> setI(v => (v+1)%texts.length), 2200)
return ()=> clearInterval(id)
},[texts.length])
return <span className="font-medium">{texts[i]}</span>
}