import React from 'react'

export default function Form() {
  return (
    <div>
        <h3>Add new developer</h3>
        <form>
            <div>
            <label>First name:</label>
            <input placeholder='enter first name'></input>
            </div>
            <div>
            <label>Last name:</label>
            <input placeholder='enter last name'></input>
            </div>
            <div>
            <label>Select bootcamp</label>
            <select>
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
