
import React from 'react'

const DirectorCard = ({director}) => {

  return (
    <article>
        <h2>{director.name}</h2>
        <ul>
            <li>
                {/* Should render a list of movies from director.movies */}
            {director.movies}
            </li>
        </ul>
    </article>
  )
}

export default DirectorCard
