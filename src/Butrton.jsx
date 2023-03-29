import React from 'react'

function Butrton(props) {
  return (
    <>
        <button onClick={()=>props.clear()}>clear</button>
    </>
  )
}

export default Butrton