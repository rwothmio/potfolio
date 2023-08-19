import React from 'react'
import './technology.css'

function Technology({ source, alt }) {
  return (
    <img src={source} alt={alt} className="technology" />
  )
}

export default Technology