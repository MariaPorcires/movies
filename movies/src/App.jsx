
import './App.css'
import { useEffect } from 'react'

const API_URL = 'http://www.omdbapi.com?apikey=632729cd';

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`); //&s separerar
    const data = await response.json()
    console.log(data.Search)
  }

  useEffect(() => {
    searchMovies('Lord of the rings')
  },[])

  return (
    <>

    </>
  )
}

export default App
