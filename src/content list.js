import React, { useState } from 'react';
import {FaTrashAlt} from 'react-icons/fa';

const List = () => {
  
  const [gameType,setGameType] = useState([
    {
      id: 101,
      checked: false,
      type:"Arcade"
    },
    {
      id: 102,
      checked: false,
      type:"RPG"
    },
    {
      id: 103,
      checked: false,
      type:"Racing"
    }
  ])

  return (
    <main>
        <ul>
          {gameType.map((item)=>(
            <li className='type' key={item.id}>
              <input id="check" type="checkbox" checked={item.checked} />
              <label for ="check">{item.type}</label>
              <FaTrashAlt role ="button" tabIndex="0" />
            </li>
          ))}
        </ul>
    </main>
  )
}

export default List