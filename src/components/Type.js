import React from 'react'

const Type = ({name, getTypeData, url}) => {

  const handleClick = function() {
    getTypeData(url)
  }

  return (
    <div>
      <li className='type-item'>
        {<a className='type-link' onClick={handleClick}>{name}</a>}
      </li>
    </div>
  )
}

export default Type
