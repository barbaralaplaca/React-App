import { useState } from "react"
import Card from "./Card"
import { Bootcamp, CardProps, Developer, Instructor } from "./types"

export const Gallery = (props: CardProps) => {
  const { instructors, developers, bootcamps, handleDelete } = props;
  const javascriptId = "5df90503-6e35-4a93-91a4-f2a1fe457331";
  const dotNetId = "4c88d1fb-36a6-46e4-ad79-1c24f90e1e93";
  const javaId = "97608a8a-3bcd-4a0c-b87a-a19cf1014c6b";
  const [activeGallery, setActiveGallery] = useState('All');
  

    const handleChange = ((e: any) => {
     setActiveGallery(e.target.value);
    })

    const javascriptGallery = (
    <div className="bootcamp" key={javascriptId}>
        <Card 
        bootcamps={bootcamps.filter((bootcamp: Bootcamp) => bootcamp.id === javascriptId)}
        instructors={instructors.filter((instructor: Instructor) => instructor.bootcampId === javascriptId)}
        developers={developers.filter((developer: Developer) => developer.bootcampId === javascriptId)}
        handleDelete={handleDelete}/>
    </div>
    )

    const dotNetGallery = (
    <div className="bootcamp" key={dotNetId}>
        <Card 
        bootcamps={bootcamps.filter((bootcamp: Bootcamp) => bootcamp.id === dotNetId)}
        instructors={instructors.filter((instructor: Instructor) => instructor.bootcampId === dotNetId)}
        developers={developers.filter((developer: Developer) => developer.bootcampId === dotNetId)}
        handleDelete={handleDelete}/>
    </div>
    )

    const javaGallery = (
    <div className="bootcamp" key={javaId}>
        <Card 
        bootcamps={bootcamps.filter((bootcamp: Bootcamp) => bootcamp.id === javaId)}
        instructors={instructors.filter((instructor: Instructor) => instructor.bootcampId === javaId)}
        developers={developers.filter((developer: Developer) => developer.bootcampId === javaId)}
        handleDelete={handleDelete}/>
    </div>
    )

      const allGalleries = [javascriptGallery, dotNetGallery, javaGallery];

  return (
   developers && instructors ? <div className="Gallery">
        <h1>Gallery</h1>
        <select onChange={(e) => handleChange(e)} value={activeGallery} defaultValue={'All'} className='selectBootcamp'>
            <option value='All'>All</option>
            <option value='Javascript'>Javascript</option>
            <option value='.Net'>.Net</option>
            <option value='Java'>Java</option>
        </select>
        <div className="gallery">
        {activeGallery === 'All' ? allGalleries : ''}
        {activeGallery === 'Javascript' ? javascriptGallery : ''}
        {activeGallery === '.Net' ? dotNetGallery : ''}
        {activeGallery === 'Java' ? javaGallery : ''}
        </div>
    </div> : <div>Loading...</div>
  )
}
