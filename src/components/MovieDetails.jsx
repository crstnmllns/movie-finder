import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getPlatforms } from "../api/streamingApi.js";
import "../assets/styles.css";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await getMovieDetails(id);
      if (data) {
        const uniqueSources = data.sources.reduce((acc, current) => {
          if (!acc.find((item) => item.name === current.name)) {
            acc.push(current);
          }
          return acc;
        }, []);
        setMovie({ ...data, sources: uniqueSources });
      }
    };

    const fetchPlatforms = async () => {
      const platformData = await getPlatforms();
      setPlatforms(platformData);
    };

    fetchMovieDetails();
    fetchPlatforms();
  }, [id]);

  if (!movie) {
    return <h2>Cargando detalles de la película...</h2>;
  }

  return (
    <div className="movie-details">
      <div className="movie-header">
        <img src={movie.poster} alt={movie.title} className="movie-image" />
        <div className="movie-info">
          <h2>{movie.title} ({movie.year})</h2>
          <p><strong>Título original:</strong> {movie.original_title}</p>
          <p><strong>Género:</strong> {movie.genre_names.join(", ")}</p>
          <p><strong>Duración:</strong> {movie.runtime_minutes} min</p>
          <p><strong>Calificación:</strong> {movie.user_rating} ⭐</p>
          {movie.trailer && (
            <a href={movie.trailer} target="_blank" rel="noopener noreferrer" className="trailer-button">Ver Tráiler</a>
          )}
        </div>
      </div>
      <h3>Disponibilidad en plataformas</h3>
      <div className="platforms">
        {movie.sources.map((source) => {
          const platform = platforms.find((p) => p.id === source.source_id);
          return (
            <div key={source.source_id} className="platform-card">
              {platform && <img src={platform.logo_100px} alt={platform.name} className="platform-logo" />}
              <a href={source.web_url} target="_blank" rel="noopener noreferrer">Ver en {source.name}</a>
            </div>
          );
        })}
      </div>
      <a href="/" className="back-button">Volver</a>
    </div>
  );
}

export default MovieDetails;