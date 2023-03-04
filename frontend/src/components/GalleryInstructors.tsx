import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { Card } from "./Card"
import { Instructor } from "../App";

export const GalleryInstructors = () => {
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3001/instructors')
      .then(res => res.json())
      .then(json => setGallery(json))
  }, [])

  const instructorArray = Object.values(gallery);
  const listInstructor = instructorArray.map((e: Instructor) => e.name)
  console.log(listInstructor);


  return (
    <div className="Gallery">
        <h1>Gallery Instructors</h1>
        
        {/* <Card /> */}
    </div>
  )
}
