import { FormEvent, useRef, useState } from 'react'
import { Developer } from './types';

type PropsForm = {
    addToState: (p: Developer) => void,
}

export const Form = (props: PropsForm) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bootcamp, setBootcamp] = useState('5df90503-6e35-4a93-91a4-f2a1fe457331');


    const firstNameRef = useRef<HTMLInputElement>(null)
    const lasttNameRef = useRef<HTMLInputElement>(null)
    const bootcampRef = useRef<HTMLSelectElement>(null)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const name = firstName + " " + lastName;
        const developer = {name: name, bootcampId: bootcamp}

        fetch('http://localhost:3001/developers', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(developer)
        }).then((response) => {
            if (response.status === 200) {
                response.json().then((data) => {
                props.addToState(data.developer);
                })
            }})
        };
    

  return (
    <div className='Form'>
        <h3>Add new developer</h3>
        <form onSubmit={handleSubmit} id="addDeveloperForm">
            <div className='form-input'>
            <label>First name:</label>
            <input 
                type="text"
                value={firstName}
                ref={firstNameRef} 
                onChange={(e) => setFirstName(e.target.value)}
                placeholder='enter first name' 
                className='addDeveloperFirstNameInput' 
                required
                />
            </div>
            <div className='form-input'>
            <label>Last name:</label>
            <input 
                type="text"
                value={lastName}
                ref={lasttNameRef} 
                onChange={(e) => setLastName(e.target.value)}
                placeholder='enter last name' 
                className='addDeveloperLastNameInput' 
                required
                />
            </div>
            <div className='form-input form-select-bootcamp'>
            <label>Select bootcamp</label>
            <select 
                value={bootcamp}
                ref={bootcampRef} 
                onChange={(e) => setBootcamp(e.target.value)}
                defaultValue={'5df90503-6e35-4a93-91a4-f2a1fe457331'} 
                required
                >
                <option value='5df90503-6e35-4a93-91a4-f2a1fe457331' selected>Javascript</option>
                <option value='4c88d1fb-36a6-46e4-ad79-1c24f90e1e93'>.Net</option>
                <option value='97608a8a-3bcd-4a0c-b87a-a19cf1014c6b'>Java</option>
            </select>
            </div>
            <button className='addDeveloperBtn form-input'>Add Developer</button>
        </form>
    </div>
  )
}
