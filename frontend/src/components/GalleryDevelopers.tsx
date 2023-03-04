import { useEffect, useRef, useState } from "react"
import { Card } from "./Card"

export const GalleryDevelopers = () => {
    const [gallery, setGallery] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3001/developers')
        .then(data => data.json())
        .then(data => setGallery(data))
        .catch(error => console.log(error));
    })



  return (
    <div className="Gallery">
        <h1>Gallery Developers</h1>
        {gallery && Array.from(gallery).map((item: any) => (
          <p key={item.id}>This is developer name{item.name}</p>
        ))}
        {/* <Card /> */}
    </div>
  )
}
