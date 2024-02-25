import React from 'react'
import "../Styles/Components/Image.css"
function Image(props) {
    const width = props.imgWidth
    const height = props.imgHeight
  return (
    <div className='image-container'>  
        <img src={props.src} alt="image" style={ {width:width, height:height} }/>
    </div>
  )
}

export default Image