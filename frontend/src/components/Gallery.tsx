import React from 'react'
import Card from './Card'

export default function Gallery() {
  return (
    <>
        <h1>Gallery</h1>
        <h4>Filter Bootcamp</h4>
        <select>
            <option value='all'>All</option>
            <option value='Javascript'>Javascript</option>
            <option value='.Net'>.Net</option>
            <option value='Java'>Java</option>
        </select>
        <Card />
    </>
  )
}
