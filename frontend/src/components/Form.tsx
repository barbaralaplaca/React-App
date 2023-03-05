import { FormEvent, useState } from 'react'
import { Bootcamp, PropsForm } from './types';

export const Form = (props: PropsForm) => {
    const { bootcamps } = props;
    const javascriptId = '5df90503-6e35-4a93-91a4-f2a1fe457331'
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bootcamp, setBootcamp] = useState(javascriptId);
    
    // ''

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
                onChange={(e) => setBootcamp(e.target.value)}
                defaultValue={'5df90503-6e35-4a93-91a4-f2a1fe457331'} 
                required
                >
                {bootcamps.map((bootcamp: Bootcamp) => (
                <option 
                key={bootcamp.bootcamp} 
                value={bootcamp.id}
                >
                {bootcamp.bootcamp}
                </option>
                ))}
            </select>
            </div>
            <button className='addDeveloperBtn form-input'>Add Developer</button>
        </form>
    </div>
  )
}
