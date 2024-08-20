import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {

  const [movies, setMovies] = useState([])
  
  useEffect(()=> {
    fetch(`http://localhost:3000/movies`)
    .then(r => r.json())
    .then(data => setMovies(data))
    .catch(err => console.error(err))
  },[])

  const movieList = movies.map(movie => {
    return <MovieCard key={movie.id} title={movie.title} movie={movie}/>
  })

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Home Page</h1>
        {movieList}
      </main>
    </>
  );
};

export default Home;