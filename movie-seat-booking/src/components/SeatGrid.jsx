import Seat from "./Seat";

const rows = [
    [0, 1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22, 23],
];

const occupiedSeats = [11, 12, 22];

export default function SeatGrid({selectedSeats, setSelectedSeats}) {
    function toggleSeat(seatId) {
        setSelectedSeats(prev =>
            prev.includes(seatId)
            ? prev.filter(id => id !== seatId)
            : [...prev, seatId]
        );
    }

    return (
        <div className="container">
            <div className="screen"></div>

            {rows.map((row, rowIndex) => (
                <div className="row" key={rowIndex}>
                    {row.map(seatId => (
                        <Seat
                        key={seatId}
                        seatId={seatId}
                        occupied={occupiedSeats.includes(seatId)}
                        selected={selectedSeats.includes(seatId)}
                        onToggle={toggleSeat}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}