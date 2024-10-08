import React from 'react'

import './ListItem.css'

const ListItem = ({title, description, itemImage}) => {
  return (
    <div className='list-items'>
        <ul>
            <li>
                {itemImage && <img src={itemImage} alt="hero" />}

                <div>
                    <h3>{title}</h3>
                    {description && <p>{description}</p>}
                </div>
            </li>
        </ul>
    </div>
  )
}

export default ListItem