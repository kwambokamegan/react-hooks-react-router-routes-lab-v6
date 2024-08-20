import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ActorCard from "../components/ActorCard";

function Actors() {

  const [actors, setActors] = useState([])

  useEffect(()=> {
    fetch(`http://localhost:3000/actors`)
    .then(r => r.json())
    .then(data => setActors(data))
    .catch(err =>  console.error(err))
  })

  const displayActors = actors.map(actor => {
    return <ActorCard key={actor.id} actor={actor}/>
  })

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Actors Page</h1>
        {displayActors}
      </main>
    </>
  );
};

export default Actors;