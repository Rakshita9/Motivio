    function QuoteCard({ text, image }) {
    return (
        <div style={{ maxWidth: "400px", margin: "auto" }}>
        <img
            src={image}
            alt="quote"
            style={{ width: "100%", borderRadius: "12px" }}
        />
        <p style={{ marginTop: "16px", fontSize: "18px", textAlign: "center" }}>
            {text}
        </p>
        </div>
    );
    }

    export default QuoteCard;
