import { Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard.jsx";
import { useMemo } from "react";

function MovieList({ movies }) {
  const memoizedMovies = useMemo(() => movies, [movies]);

  return (
    <Row className="mt-4">
      {memoizedMovies.map((movie) => (
        <Col key={movie.id} xs={12} sm={6} md={4} lg={4} className="mb-4">
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
}

export default MovieList;
