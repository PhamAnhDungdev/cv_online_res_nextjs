import React from 'react'

const Experiences = ({ hidden }) => {
  return (
    <div className={`flex ${hidden ? 'hidden' : 'block'}`}>
      Experiences
    </div>
  )
}

export default Experiences