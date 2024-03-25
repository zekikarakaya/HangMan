import React from 'react'

const PopUp = ({reset,word,status}) => {
    if(!status)
    return "";

  return (
    <div className='flex flex-col items-center gap-2'>
        <p>You {status}</p>
        <p>The word was {word}</p>
        <button onClick={reset}>Play Again</button>
    </div>
  )
}

export default PopUp