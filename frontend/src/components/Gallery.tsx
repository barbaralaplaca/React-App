import { useState } from "react"
import Card from "./Card"
import { Bootcamp, CardProps, Developer, Instructor } from "./types"

export const Gallery = (props: CardProps) => {
  const { instructors, developers, bootcamps, handleDelete } = props;
  const [activeGallery, setActiveGallery] = useState('');
  
  const handleChange = ((event: React.ChangeEvent<HTMLSelectElement>) => {
    let selectedBootcamp = event.target.value;
    setActiveGallery(selectedBootcamp)
  })

  const valueForAll = bootcamps.map(bootcamp => bootcamp.id);

  console.log(typeof valueForAll)

  return (
   developers && instructors ? <div className="Gallery">
        <h1>Gallery</h1>
        <select onChange={(e) => handleChange(e)} value={activeGallery} /*defaultValue={}*/ className='selectBootcamp'>
            <option value={valueForAll}>All</option>
            {bootcamps.map(bootcamp => (
              <option value={bootcamp.id} key={bootcamp.id}>{bootcamp.bootcamp}</option>
            ))}
        </select>
        <div className="gallery">
        <div className="bootcamp" key={activeGallery}>
          <Card 
            bootcamps={bootcamps.filter((bootcamp: Bootcamp) => bootcamp.id === activeGallery)}
            instructors={instructors.filter((instructor: Instructor) => instructor.bootcampId === activeGallery)}
            developers={developers.filter((developer: Developer) => developer.bootcampId === activeGallery)}
            handleDelete={handleDelete}/>
        </div>
        </div>
        </div> : <div>Loading...</div>
  )
}
