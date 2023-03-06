import './index.css';
import { useEffect, useState } from 'react';
import { Bootcamp, Developer, Instructor } from './components/types';
import { Form } from './components/Form/Form';
import { Gallery } from './components/Gallery/Gallery';

function App() {
  const [developersGallery, setDevelopersGallery] = useState<Developer[]>([]);
  const [instructorsGallery, setInstructorsGallery] = useState<Instructor[]>([]);
  const [bootcampList, setBootcampList] = useState<Bootcamp[]>([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
      useEffect(() => {
        Promise.all([
          fetch('http://localhost:3001/developers'),
          fetch('http://localhost:3001/instructors'),
          fetch('http://localhost:3001/bootcamps'),
        ])
        .then(([resDevelopers, resInstructors, resBootcamps]) => {
          if (!resDevelopers.ok || !resInstructors.ok || !resBootcamps.ok) {
            throw Error("Failed to fetch");
          }
          return Promise.all([resDevelopers.json(), resInstructors.json(), resBootcamps.json()])
        })
        .then(([dataDevelopers, dataInstructors, dataBootcamps]) => {
          setDevelopersGallery(dataDevelopers.developers)
          setInstructorsGallery(dataInstructors.instructors)
          setBootcampList(dataBootcamps.bootcamps)
          setErrorMessage(null);
          setIsLoading(false);
        })
        .catch(err => setErrorMessage(err.message))
      }, [])

  const addToState = (newStudent: Developer) => {
    setDevelopersGallery([...developersGallery, newStudent])
  }

  const handleDelete = (id: string) => {
    const developerDelete = developersGallery.filter(developer => developer.id !== id);
    setDevelopersGallery(developerDelete);
    
    fetch(`http://localhost:3001/developers/${id}`, {
      method: 'DELETE'
    })
  }

  return (
    <div className='App'>
        <Form
        addToState={addToState}
        bootcamps={bootcampList}
        />
        { errorMessage && <div><h2>{ errorMessage }</h2></div> }
        {/* { isLoading && <div>... is Loading</div>} */}
        { !isLoading &&
        <Gallery 
        developers={developersGallery} 
        instructors={instructorsGallery} 
        handleDelete={handleDelete}
        bootcamps={bootcampList}
        />
    }
    </div>
  );
}

export default App;
