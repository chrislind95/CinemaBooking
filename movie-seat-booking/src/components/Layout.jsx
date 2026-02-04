export default function Layout() {
    return (
        <>
            <div className="movie-container">
                <label>Pick a movie:</label>
                <select></select>
            </div>

            <ul className="showcase">
                <li>
                    <div className="seat"></div>
                    <small>Available</small>
                </li>

                <li>
                    <div className="seat selected"></div>
                    <small>Selected</small>
                </li>

                <li>
                    <div className="seat occupied"></div>
                    <small>Occupied</small>
                </li>
            </ul>

            <div className="container">
                <div className="screen"></div>
                {/* seats kommer senare */}
            </div>

            <p className="text">
                You have selected <span>0</span> seats for a price of $<span>0</span>
            </p>
        </>
    )
}