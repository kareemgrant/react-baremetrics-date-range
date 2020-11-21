import React from 'react'

function Overlay (props) {
  return (
    <>
      <div 
        onClick={props.handleCloseModal}
        className='fixed inset-0 transition-opacity' 
        aria-hidden='true'
      >
        <div className='absolute inset-0 bg-gray-500 opacity-75' />
      </div>
      
      { props.children }
    </>
  )
}

export default Overlay
