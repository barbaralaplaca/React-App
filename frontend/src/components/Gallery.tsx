import { useState } from "react"
import { DevelopersCard } from "./DevelopersCard"
import { InstructorsCard } from "./InstructorsCard"
import { Developer, Instructor } from "./types"

type PropsGallery= {
  developers: Developer[],
  instructors: Instructor[],
}

export const Gallery = (props: PropsGallery) => {
  const instructors = props.instructors;
  const developers = props.developers;
 const [activeGallery, setActiveGallery] = useState('All');
  

    const handleChange = ((e: any) => {
     setActiveGallery(e.target.value);
    })

    const javascriptGallery = (
    <div className="bootcamp" key={'javascriptGallery'}>
        <h3>Javascript Instructors</h3>
        <InstructorsCard instructors={instructors.filter((instructor: Instructor) => instructor.bootcampId === "5df90503-6e35-4a93-91a4-f2a1fe457331")}/>
        <h3>Javascript Developers</h3>
        <DevelopersCard developers={developers.filter((developer: Developer) => developer.bootcampId === "5df90503-6e35-4a93-91a4-f2a1fe457331")}/>
    </div>
    )

    const dotNetGallery = (
      <div className="bootcamp" key={'dotNetGallery'}>
        <h3>.NET Instructors</h3>
        <InstructorsCard instructors={instructors.filter((instructor: Instructor) => instructor.bootcampId === "4c88d1fb-36a6-46e4-ad79-1c24f90e1e93")}/>
        <h3>.NET Developers</h3>
        <DevelopersCard developers={developers.filter((developer: Developer) => developer.bootcampId === "4c88d1fb-36a6-46e4-ad79-1c24f90e1e93")}/>
      </div>
    )

    const javaGallery = (
    <div className="bootcamp" key={'javaGallery'}>
      <h3>Java Instructors</h3>
      <InstructorsCard instructors={instructors.filter((instructor: Instructor) => instructor.bootcampId === "97608a8a-3bcd-4a0c-b87a-a19cf1014c6b")}/>
      <h3>Java Developers</h3>
      <DevelopersCard developers={developers.filter((developer: Developer) => developer.bootcampId === "97608a8a-3bcd-4a0c-b87a-a19cf1014c6b")}/>
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
