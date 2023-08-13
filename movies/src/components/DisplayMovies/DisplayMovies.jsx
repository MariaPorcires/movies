import MovieCard from "../MovieCard/MovieCard"

function DisplayMovies(props) {

    const movieCardComponents = props.movies.map((movie) => {
        return <MovieCard movie={ movie } key={ movie.imbdID } />
    })

    return (
        <>
        {movieCardComponents}
        </>
    )
}

export default DisplayMovies