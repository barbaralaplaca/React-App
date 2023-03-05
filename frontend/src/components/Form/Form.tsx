import { FormEvent, useState } from 'react'
import { Bootcamp, PropsForm } from '../types';
import './Form.css';


export const Form = (props: PropsForm) => {
    const { bootcamps } = props;
    const javascriptId = '5df90503-6e35-4a93-91a4-f2a1fe457331'
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bootcamp, setBootcamp] = useState(javascriptId);
    const [message, setMessage] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (firstName.match(/\W|[1-9]/) || lastName.match(/\W|[1-9]/)) {
            return setMessage('Only alphabetical characteres are allowed')
        } if (firstName === '' || lastName === '') {
            return setMessage('Mandatory field');
        }
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
        setFirstName('');
        setLastName('');
        setMessage('Developer added');
        };
        
  return (
    <div className='Form'>
        <h3 className='form-title'>Add new developer</h3>
        <form onSubmit={handleSubmit} id="addDeveloperForm">
            <div className='form-input'>
            <label className='form-label'>First name:</label>
            <input 
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder='enter first name' 
                className='addDeveloperFirstNameInput form-input' 
                />
            </div>
            <div className='form-input'>
            <label className='form-label'>Last name:</label>
            <input 
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder='enter last name' 
                className='addDeveloperLastNameInput form-input' 
                />
            </div>
            <div className='form-input form-select-bootcamp'>
            <label className='form-label'>Select bootcamp</label>
            <select 
                value={bootcamp}
                onChange={(e) => setBootcamp(e.target.value)}
                className='form-input form-select'
                required
                >
                {bootcamps.map((bootcamp: Bootcamp) => (
                <option 
                key={bootcamp.id} 
                value={bootcamp.id}
                >
                {bootcamp.bootcamp}
                </option>
                ))}
            </select>
            </div>
            <button 
                className='form-input form-input-button' 
                id='addDeveloperBtn'
                >Add Developer</button>
        </form>
        <p>{message}</p>
    </div>
  )
}
