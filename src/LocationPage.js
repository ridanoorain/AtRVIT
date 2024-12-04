import React from 'react'
import { useParams } from 'react-router-dom'
import { destinationsData } from './utils/data.js'


const LocationPage = () => {
  const { id } = useParams() // Get the ID from the URL
  const destination = destinationsData.find((dest) => dest.id === parseInt(id)) // Find destination by ID

  // Handle invalid or missing destination
  if (!destination) {
    return <div>Location not found</div>
  }

  return (
    <div className="bg-black" style={{ paddingTop: '55px' }}>
      <h1
        className="text-white text-4xl"
        style={{
          fontSize: '40px',
          display: 'flex',
          position: 'absolute',
          top: '80px',
          left: '30px',
          fontFamily: 'sans-serif',
        }}
      >
        {destination.name}
      </h1>
      <img
        src={destination.image}
        alt={destination.name}
        style={{
          width: '100%',
          maxHeight: '400px',
          objectFit: 'cover',
          marginBottom: '20px',
        }}
      />
      <p style={{ position: 'absolute', top:"120px", left:"30px", color:"white"}}>{destination.tours}</p>
      <p style={{ position: 'absolute', top:"140px", left: "30px", color:"white" }}>
        {destination.shortDes || 'Explore this amazing destination!'}
      </p>
      <p></p>
    </div>
  )
}

export default LocationPage;