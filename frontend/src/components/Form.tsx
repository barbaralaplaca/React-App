import { FormEvent, useRef } from 'react'
import { Developer } from '../App'
import { v4 as uuidV4 } from "uuid"

type FormProps = {
    onSubmit: (developer: Developer) => void
}

export const Form = ({ onSubmit }: FormProps) => {
    const firstNameRef = useRef<HTMLInputElement>(null)
    const lasttNameRef = useRef<HTMLInputElement>(null)
    const bootcampRef = useRef<HTMLSelectElement>(null)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        onSubmit({
            id: uuidV4(),
            firstName: firstNameRef.current?.value,
            lastName: lasttNameRef.current?.value,
            bootcamp: bootcampRef.current?.value,
        })
    }

  return (
    <div className='Form'>
        <h3>Add new developer</h3>
        <form onSubmit={handleSubmit}>
            <div>
            <label>First name:</label>
            <input ref={firstNameRef} placeholder='enter first name' required></input>
            </div>
            <div>
            <label>Last name:</label>
            <input ref={lasttNameRef} placeholder='enter last name' required></input>
            </div>
            <div>
            <label>Select bootcamp</label>
            <select ref={bootcampRef} defaultValue={'default'} required>
                <option value='default'>Select your option</option>
                <option value='Javascript'>Javascript</option>
                <option value='.Net'>.Net</option>
                <option value='Java'>Java</option>
            </select>
            </div>
            <button>Add Developer</button>
        </form>
    </div>
  )
}
