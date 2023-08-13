function MovieCard(props) {

    return(
        <>
        <img src={props.movie.Poster} />
        <p>{props.movie.Title}</p>
        </>
    )
}

export default MovieCard