import { useState } from 'react'
import { Developer } from './types';

type PersonProps = {
    student: Developer,
    handleDelete: (p: string) => void,
}

export const DeleteButtonToggle = (props: PersonProps) => {
    const { student } = props;

    const [toggle, setToggle] = useState(false)

  return (
        <li 
            className="card-list" 
            key={student.id}
            onClick={() => setToggle(!toggle)}
            onMouseLeave={() => setToggle(false)}
            >
            <p>{student.name}</p>
            {toggle && (
            <button onClick={() => props.handleDelete(student.id)}>Delete</button>
            )}
        </li>  )
}
