import React from 'react'

const ActorCard = ({actor}) => {
  return (
    <article>
        <h2>{actor.name}</h2>
        <ul>
            <li>
                {actor.movies}
            </li>
        </ul>
    </article>
  )
}

export default ActorCard