import { Row, Col } from "react-bootstrap";
import MovieCard from "./movieCard";

function MovieList({ movies }) {
  return (
    <Row className="mt-4">
      {movies.map((movie, index) => (
        <Col key={`${movie.imdbId}-${index}`} xs={12} sm={6} md={4} lg={4} className="mb-4">
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
}

export default MovieList;