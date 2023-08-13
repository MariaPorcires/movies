import { useState } from "react";

function SearchMovies() {
    const [title, setTitle] = useState('')

    async function handleClick() {
    
        const response = await fetch(`http://www.omdbapi.com?apikey=632729cd&s=${title}`); //&s separerar
        const data = await response.json()
        console.log(data.Search)
    }


    return(
        <>
        <input type="text" onChange={(event) => setTitle(event.target.value)}></input> 
        <button onClick={ handleClick }>Search Movie</button>
        </>
    )
}//hämtar värdet från input, funktion direkt i input

export default SearchMovies