import { useLocation } from "react-router-dom";

function MovieDetails() {
  const location = useLocation();
  const movie = location.state?.movie;

  if (!movie) {
    return <h2>No se encontraron detalles de la película.</h2>;
  }

  return (
    <div>
      <h2>{movie.title} ({movie.releaseYear})</h2>
      <p>{movie.overview}</p>
      <p><strong>Géneros:</strong> {movie.genres.map(g => g.name).join(", ")}</p>
      <p><strong>Plataformas:</strong> {
        movie.streamingOptions?.cl 
          ? movie.streamingOptions.cl.map(s => s.service.name).join(", ") 
          : "No disponible"
      }</p>
    </div>
  );
}

export default MovieDetails;
