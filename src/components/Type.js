import React from 'react'

const Type = ({name, getTypeData}) => {

  const handleClick = function(url) {
    getTypeData(url)
  }

  return (
    <div>
      <li>
        <a onClick={handleClick}>{name}</a>
      </li>
    </div>
  )
}

export default Type
