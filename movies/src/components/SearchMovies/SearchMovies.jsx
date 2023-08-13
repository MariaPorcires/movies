import { useState } from "react";

function SearchMovies(props) {
    const [title, setTitle] = useState('');

    async function handleClick() {
    
        const response = await fetch(`http://www.omdbapi.com?apikey=632729cd&s=${title}`); //&s separerar
        const data = await response.json()
        console.log(data)
    
        const onlyMovies = data.Search.filter((movie) => {
            if(movie.Type === 'movie') {
                return movie;
            }
        })

    if (data.Response === 'True') {
        props.updateMovies(onlyMovies)
    } else{
        props.updateMovies([])
    }
}

    return(
        <>
        <input type="text" onChange={(event) => setTitle(event.target.value)}></input> 
        <button onClick={ handleClick }>Search Movie</button>
        </>
    )
}//hämtar värdet från input, funktion direkt i input

export default SearchMovies