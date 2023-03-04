import { useEffect, useState } from "react"
import { Instructor } from "./types";

export const GalleryInstructors = () => {
    const instructors: Instructor[] = [
      {
        id:"4b8f4af3-7e25-4ed2-95a9-d19c6baab55c",
        name:"Jesper Marcusson",
        favouriteColour:"red",
        bootcampId:"5df90503-6e35-4a93-91a4-f2a1fe457331"
      },{
        id:"4ba421c9-7574-4eb4-9298-24e1a6a396a3",
        name:"Taras Shevchenko",
        favouriteColour:"green",
        bootcampId:"97608a8a-3bcd-4a0c-b87a-a19cf1014c6b"
      },{
        id:"0a34e89f-2808-4f56-a2a1-1f873fb50a9f",
        name:"Don't Cheat McCheaterson",
        favouriteColour:"green",
        bootcampId:"5df90503-6e35-4a93-91a4-f2a1fe457331"}]

    const [gallery, setGallery] = useState(instructors);

    useEffect(() => {
      fetch('http://localhost:3001/instructors')
      .then(data => data.json())
      // .then(data => console.log(data))
      .then(data => setGallery(data))
      .catch(error => console.log(error));
  }, [])

  return (
    <div className="Gallery">
        <h1>Gallery Instructors</h1> 
        <h3>All Instructors</h3>
        {/* <InstructorCard instructors={instructors}/>
        <h3>Javascript Instructors</h3>
        <InstructorCard instructors={instructors.filter((instructor) => instructor.bootcampId === "5df90503-6e35-4a93-91a4-f2a1fe457331")}/>
        <h3>.NET Instructors</h3>
        <InstructorCard instructors={instructors.filter((instructor) => instructor.bootcampId === "4c88d1fb-36a6-46e4-ad79-1c24f90e1e93")}/>
        <h3>Java Instructors</h3>
        <InstructorCard instructors={instructors.filter((instructor) => instructor.bootcampId === "97608a8a-3bcd-4a0c-b87a-a19cf1014c6b")}/> */}
    </div>
  )
}
