import { useState, useEffect, useCallback } from "react";
import { searchMovie } from "./api/streamingApi";
import { Container } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import ErrorBoundary from "./components/ErrorBoundary";
import "./assets/styles.css";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = useCallback(async () => {
    if (!query) return;
    const data = await searchMovie(query, "cl", "es");
    if (Array.isArray(data) && data.length > 0) {
      setResults(data);
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    if (query.length > 2) {
      handleSearch();
    }
  }, [query, handleSearch]);

  return (
    <Router>
      <Container className="mt-4">
        <h1 className="text-center">Buscador de Películas</h1>
        <SearchBar query={query} setQuery={setQuery} />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<MovieList movies={results} />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </ErrorBoundary>
      </Container>
    </Router>
  );
}

export default App;