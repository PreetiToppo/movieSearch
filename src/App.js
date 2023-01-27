import { useEffect, useState } from 'react'
import './App.css'
import searchIcon from './search.svg'
import MovieCard from './MovieCard'



const API_URL = "http://www.omdbapi.com?apikey=212a8d67"


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    // get data
    const data = await response.json()
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('English')
  }, [])


  return (
    <div className='app'>
      <h1>MovieHouse</h1>

      <div className='search'>
        <input type='text' placeholder='Search for a movie' value = {searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        {/* e is from the callback function (e), which is an event */}

        <img src ={searchIcon}
        alt = 'search'
        onClick={() => searchMovies(searchTerm)} />
    </div>

    {
      movies?.length > 0 ? (
        <div className='container'>
          {/* to get all the movie cards */}
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
    </div>
      ) :
      (<div className='empty'>
        <h2>No movies found</h2>
      </div>
      )
    }
    </div>
  )
}

export default App