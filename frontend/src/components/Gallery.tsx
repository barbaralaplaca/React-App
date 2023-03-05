import { useEffect, useState } from "react"
import Card from "./Card"
import { Bootcamp, CardProps, Developer, Instructor } from "./types"

export const Gallery = (props: CardProps) => {
  const { instructors, developers, bootcamps, handleDelete } = props;
  const allBootcamps = bootcamps.map(bootcamp => bootcamp.id); 
  
  const [activeGallery, setActiveGallery] = useState(allBootcamps);
  
  const handleChange = ((event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBootcamp = event.target.value;
    if (selectedBootcamp === String(allBootcamps)) {
      return setActiveGallery(allBootcamps)
    }
    setActiveGallery([selectedBootcamp]);
  })

  console.log(activeGallery)

  return (
   <div className="Gallery">
        <h1>Gallery</h1>
        <select onChange={(e) => handleChange(e)} value={activeGallery} className='selectBootcamp' multiple={false}>
            <option value={''} disabled>Select a bootcamp</option>
            <option value={allBootcamps}>All</option>
            {bootcamps.map(bootcamp => (
              <option value={bootcamp.id} key={bootcamp.id}>{bootcamp.bootcamp}</option>
            ))}
        </select>
      {activeGallery && activeGallery.map((bootcampId) => (
      <Card
      key={bootcampId} 
      bootcamps={bootcamps.filter((bootcamp: Bootcamp) => bootcamp.id === bootcampId)}
      instructors={instructors.filter((instructor: Instructor) => instructor.bootcampId === bootcampId)}
      developers={developers.filter((developer: Developer) => developer.bootcampId === bootcampId)}
      handleDelete={handleDelete}/>
      ))}
        </div>
  )
}
