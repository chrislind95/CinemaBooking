export default function BookingSummary({count, total }) {
    return (
        <p className="text">
            You have selected <span>{count}</span> seats for a price of
            <span> {total} kr</span>
        </p>
    )
}