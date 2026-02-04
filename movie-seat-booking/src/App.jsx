import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import MovieSelect from "./components/MovieSelect";
import SeatGrid from "./components/SeatGrid";
import BookingSummary from "./components/BookingSummary";
import { getMovies } from "./services/MovieService";
import BookingForm from "./components/BookingForm";
import './App.css'

function App() {
 
  const [movies, setMovies] = useState([]);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    async function loadMovies() {
      const data = await getMovies();
      setMovies(data);
      setTicketPrice(data[0]?.price || 0);
    }
    loadMovies();
  }, []);


  return (
    <>
    <h1>Movie Seat Booking</h1>

    <MovieSelect movies={movies} onChange={setTicketPrice} />
    <SeatGrid
    selectedSeats={selectedSeats}
    setSelectedSeats={setSelectedSeats}
    />
    <BookingSummary
    count={selectedSeats.length}
    total={selectedSeats.length * ticketPrice}
    />

    {selectedSeats.length > 0 && (
      <button onClick={() => setShowForm(true)}>Boka</button>
    )}

    {showForm && (
      <BookingForm
      onClose={() => setShowForm(false)}
      selectedSeats={selectedSeats}
      />
    )}
    </>
  )
}

export default App
