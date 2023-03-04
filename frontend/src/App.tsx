import './index.css';
import { Form } from './components/Form';
import { Gallery } from './components/Gallery';
import { useEffect, useState } from 'react';
import { Developer, Instructor } from './components/types';

function App() {
  const [developersGallery, setDevelopersGallery] = useState<Developer[]>([]);
  const [instructorsGallery, setInstructorsGallery] = useState<Instructor[]>([]);
    
      useEffect(() => {
        Promise.all([
          fetch('http://localhost:3001/developers'),
          fetch('http://localhost:3001/instructors')
        ])
        .then(([resDevelopers, resInstructors]) =>
        Promise.all([resDevelopers.json(), resInstructors.json()])
        )
        .then(([dataDevelopers, dataInstructors]) => {
          setDevelopersGallery(dataDevelopers.developers)
          setInstructorsGallery(dataInstructors.instructors)
        })
      }, [])

  const addToState = (newStudent: Developer) => {
    setDevelopersGallery([...developersGallery, newStudent])
}

  return (
    <div className='App'>
        <Form addToState={addToState}/>
        <Gallery developers={developersGallery} instructors={instructorsGallery}/>
    </div>
  );
}

export default App;
