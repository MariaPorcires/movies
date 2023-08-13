
import './App.css'
import { useState } from 'react'
import SearchMovies from './components/SearchMovies/SearchMovies';
import DisplayMovies from './components/DisplayMovies/DisplayMovies';



function App() {
  const [movies, setMovies] = useState([]) //spara alla filmer från APIanropet
 
  


  return (
    <div>
      <SearchMovies updateMovies={setMovies}/>
      <DisplayMovies movies={movies} />
    </div>
  )
}

export default App
