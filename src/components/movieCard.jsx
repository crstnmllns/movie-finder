import { Card } from "react-bootstrap";

function MovieCard({ movie }) {
  return (
    <Card className="mb-3" style={{ width: "100%", maxWidth: "250px", margin: "auto" }}>
      <Card.Img
        variant="top"
        src={movie.imageSet?.verticalPoster?.w240 || "https://via.placeholder.com/240"}
        alt={movie.title}
        style={{ height: "300px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: "1rem" }}>{movie.title} ({movie.releaseYear})</Card.Title>
        <Card.Text style={{ fontSize: "0.8rem" }}>
          {movie.overview}
        </Card.Text>
        <Card.Text style={{ fontSize: "0.8rem" }}>
          <strong>Géneros:</strong> {movie.genres.map(g => g.name).join(", ")}
        </Card.Text>
        <Card.Text style={{ fontSize: "0.8rem" }}>
          <strong>Plataformas:</strong> {
            movie.streamingOptions?.cl 
              ? movie.streamingOptions.cl.map((s, index) => (
                  <span key={`${s.service.id}-${index}`}>{s.service.name}, </span>
                ))
              : "No disponible"
          }
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;