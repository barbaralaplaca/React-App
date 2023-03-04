import './index.css';
import { Form } from './components/Form';
import { Gallery } from './components/Gallery';

export type Developer = {
  id: string,
  firstName: string | undefined,
  lastName: string | undefined,
  bootcamp: string | undefined,
}

export type Instructor = {
  id: string,
  bootcampId: string,
  name: string | undefined,
  favouriteColour?: string,
}

function App() {
   const onNewFormSubmit = (developer: Developer) => {
    console.log(developer);
   }

  return (
    <div className='App'>
        <Form onSubmit={onNewFormSubmit}/>
        <Gallery />
    </div>
  );
}

export default App;
