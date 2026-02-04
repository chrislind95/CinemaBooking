import { useState} from "react";

export default function BookingForm({ onClose, selectedSeats}) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState({});

    function validate() {
        const newErrors = {};

        if(name.trim().length < 2) {
            newErrors.name = "NAme must be at least 2 characters";
        }

        if(!/^[0-9]{7,}$/.test(phone)) {
            newErrors.phone = "Phone number must contain at least 7 digits";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function handleSubmit (e) {
        e.preventDefault();

        if(!validate()) return;

        alert(
        `Booking successful!\nName: ${name}\nPhone: ${phone}\nSeats: ${selectedSeats.join(
            ", "
        )}`
        );
        onClose();
    }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book seats</h2>

      <div>
        <label>Name</label>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div>
        <label>Phone</label>
        <input
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
      </div>

      <button type="submit">Confirm booking</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
}