function QuoteCard({ text, image }) {
  return (
    <div
      style={{
        position: "relative",
        width: "400px",
        height: "250px",
        margin: "auto",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      {/* Image */}
      <img
        src={image}
        alt="quote"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Overlay text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          padding: "0 20px",
          fontSize: "18px",
          fontWeight: "bold",
          textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default QuoteCard;
