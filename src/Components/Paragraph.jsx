import React from 'react'
import "../Styles/Components/Paragraph.css"
function Paragraph(props) {
  return (
    <div className='paragraph-container'>  
        <p className='paragraph'>{props.pragraph}</p>
    </div>
  )
}

export default Paragraph