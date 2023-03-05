import { useState } from 'react'
import { PersonProps } from '../types';
import './DeleteButtonToggle.css';

export const DeleteButtonToggle = (props: PersonProps) => {
    const { student } = props;

    const [toggle, setToggle] = useState(false)

  return (
        <li 
            className="card toggled" 
            key={student.id}
            onClick={() => setToggle(!toggle)}
            onMouseLeave={() => setToggle(false)}
            >
            <p className='card-developer-name'>{student.name}</p>
            {toggle && (
            <button onClick={() => props.handleDelete(student.id)} className='deleteBtn'>Delete</button>
            )}
        </li>  )
}
