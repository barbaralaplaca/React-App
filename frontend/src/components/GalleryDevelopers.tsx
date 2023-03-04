import { useEffect, useRef, useState } from "react"

export const GalleryDevelopers = () => {
  //   const [gallery, setGallery] = useState([]);
  //   const [galleryInst, setGalleryInst] = useState([]);
    
  //   useEffect(() => {
  //       fetch('http://localhost:3001/developers')
  //       .then(data => data.json())
  //       //.then(data => console.log(data))
  //       .then(data => setGallery(data.developers))
  //       .catch(error => console.log(error));
  //   }, [])

  //   useEffect(() => {
  //     fetch('http://localhost:3001/instructors')
  //     .then(data => data.json())
  //     //.then(data => console.log(data))
  //     .then(data => setGalleryInst(data.instructors))
  //     .catch(error => console.log(error));
  // }, [])
  const [developersGallery, setDevelopersGallery] = useState([]);
  const [instructorsGallery, setInstructorsGallery] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:3001/developers'),
      fetch('http://localhost:3001/instructors')
    ])
    .then(([resDevelopers, resInstructors]) =>
    Promise.all([resDevelopers.json(), resInstructors.json()])
    )
    .then(([dataDevelopers, dataInstructors]) => {
      setDevelopersGallery(dataDevelopers.developers)
      setInstructorsGallery(dataInstructors.instructors)
    })
  }, [])

    console.log('developersgallery', developersGallery)
  return (
    
    <div className="Gallery">
        <h1>Gallery Developers</h1>
        
        {developersGallery ? developersGallery.map((item: any) => (
          <p key={item.id}>This is developer name {item.name}</p>
        )) : (<p>Loading...</p>)}
         {instructorsGallery ? instructorsGallery.map((item: any) => (
          <p key={item.id}>This is instructor name {item.name}</p>
        )) : (<p>Loading...</p>)}
        {/* <Card /> */}
    </div>
  )
}
