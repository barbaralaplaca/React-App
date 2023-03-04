import { FormEvent, useRef, useState } from 'react'
import { v4 as uuidV4 } from "uuid"
import { Developer } from './types'

type FormProps = {
    onSubmit: (developer: Developer) => void
}

export const Form = ({ onSubmit }: FormProps) => {
    const [card, setCard] = useState('new developer')
    const firstNameRef = useRef<HTMLInputElement>(null)
    const lasttNameRef = useRef<HTMLInputElement>(null)
    const bootcampRef = useRef<HTMLSelectElement>(null)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        onSubmit({
            id: uuidV4(),
            firstName: firstNameRef.current?.value,
            lastName: lasttNameRef.current?.value,
            bootcampId: bootcampRef.current?.value,
        })
    }

  return (
    <div className='Form'>
        <h3>Add new developer</h3>
        <form onSubmit={handleSubmit} id="addDeveloperForm">
            <div className='form-input'>
            <label>First name:</label>
            <input ref={firstNameRef} placeholder='enter first name' className='addDeveloperFirstNameInput' required></input>
            </div>
            <div className='form-input'>
            <label>Last name:</label>
            <input ref={lasttNameRef} placeholder='enter last name' className='addDeveloperLastNameInput' required></input>
            </div>
            <div className='form-input form-select-bootcamp'>
            <label>Select bootcamp</label>
            <select ref={bootcampRef} defaultValue={'default'} required>
                <option value='default' disabled>Select your option</option>
                <option value='5df90503-6e35-4a93-91a4-f2a1fe457331'>Javascript</option>
                <option value='4c88d1fb-36a6-46e4-ad79-1c24f90e1e93'>.Net</option>
                <option value='97608a8a-3bcd-4a0c-b87a-a19cf1014c6b'>Java</option>
            </select>
            </div>
            <button className='addDeveloperBtn form-input'>Add Developer</button>
        </form>
        <p>{card}</p>

    </div>
  )
}
