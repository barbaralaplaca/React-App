import './index.css';
import { Form } from './components/Form';
import { Gallery } from './components/Gallery';
import { Developer } from './components/types';
import { GalleryDevelopers } from './components/GalleryDevelopers';

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
