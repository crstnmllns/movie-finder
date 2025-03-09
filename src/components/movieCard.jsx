import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/styles.css";

function MovieCard({ movie }) {
  return (
    <Card className="movie-card">
      <Card.Img
        variant="top"
        src={movie.imageSet?.verticalPoster?.w240 || "https://via.placeholder.com/240"}
        alt={movie.title}
        className="movie-image"
      />
      <Card.Body>
        <Card.Title className="movie-title">{movie.title} ({movie.releaseYear})</Card.Title>
        <Card.Text className="movie-overview">{movie.overview}</Card.Text>
        <Card.Text className="movie-genres">
          <strong>Géneros:</strong> {movie.genres.map(g => g.name).join(", ")}
        </Card.Text>
        <Card.Text className="movie-platforms">
          <strong>Plataformas:</strong> {
            movie.streamingOptions?.cl 
              ? movie.streamingOptions.cl.map((s, index) => (
                  <span key={`${s.service.id}-${index}`}>{s.service.name}, </span>
                ))
              : "No disponible"
          }
        </Card.Text>
        <Link to={`/movie/${movie.imdbId}`} state={{ movie }} className="btn btn-primary btn-sm">
          Ver Detalles
        </Link>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;