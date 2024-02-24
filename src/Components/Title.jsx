import React from 'react'
import "../Styles/Components/Title.css"
function Title(props) {
  return (
    <div className='title-container'>  
        <h1 className='title'>{props.title}</h1>
    </div>
  )
}

export default Title