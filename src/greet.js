import React, { useState } from 'react'

export const handleClick = (name)=>{
  console.log(`${name} wants to play!`)
}

const Greet = () => {

    const [name, setName] = useState('Killer');
    
    const handlePos = () =>{
        const arr = ['King', 'Devil', 'Legend', 'Joker'];
        const pos = Math.floor(Math.random() * arr.length);
        const name = arr[pos];
        setName(name);
    }
    
  return (
    <h3>
        Hello, Coding {name}!
        <button type='button' onClick={handlePos}>Change Name</button>
    </h3>
  )
}

export default Greet  