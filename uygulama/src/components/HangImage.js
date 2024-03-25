import React from 'react'

const HangImage = ({fails}) => {
  return (
    <div className='flex justify-center mt-6'>
       
       <img src={`img/${fails}.jpg`} alt=''></img>

    </div>
  )
}

export default HangImage