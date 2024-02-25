import React from 'react'
import "../Styles/Components/Tag.css"
function Tag(props) {
  return (
        <a href={props.link} className='tag' target='_blank'>{props.title}</a>
  )
}

export default Tag