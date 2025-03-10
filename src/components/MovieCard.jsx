import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/styles.css";

function MovieCard({ movie }) {
  return (
    <Card className="movie-card">
      <Card.Img
        variant="top"
        src={movie.image_url || "https://via.placeholder.com/240"}
        alt={movie.name}
        className="movie-image"
      />
      <Card.Body>
        <Card.Title className="movie-title">{movie.name} ({movie.year})</Card.Title>
        <Card.Text className="movie-year">Año: {movie.year}</Card.Text>
        <Link to={`/movie/${movie.id}`} onClick={() => window.location.href = `/movie/${movie.id}`} className="btn btn-primary btn-sm">
          Ver Detalles
        </Link>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
