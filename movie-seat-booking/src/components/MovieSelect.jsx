export default function MovieSelect({movies, onChange}) {
    return (
        <div className="movie-container">
            <label>Pick a movie:</label>
            <select onChange={e => onChange(Number(e.target.value))}>
                {movies.map(movie => (
                    <option key={movie.id} value={movie.price}>
                        {movie.title} ({movie.price} kr)
                    </option>
                ))}
            </select>
        </div>
    )
}