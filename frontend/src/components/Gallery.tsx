import { useRef } from "react"
import { GalleryDevelopers } from "./GalleryDevelopers"
import { GalleryInstructors } from "./GalleryInstructors"

export const Gallery = () => {
    const selectGalleryRef = useRef<HTMLSelectElement>(null)

  return (
    <div className="Gallery">
        <h1>Gallery</h1>
        <h4>Filter Bootcamp</h4>
        <select ref={selectGalleryRef}>
            <option value='all'>All</option>
            <option value='Javascript'>Javascript</option>
            <option value='.Net'>.Net</option>
            <option value='Java'>Java</option>
        </select>
        <GalleryInstructors />
        <GalleryDevelopers />
    </div>
  )
}
