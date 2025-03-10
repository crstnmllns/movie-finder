import { useState, useEffect, useCallback } from "react";
import { searchMovie } from "./api/streamingApi";
import { Container } from "react-bootstrap";
import SearchBar from "./components/SearchBar.jsx";
import MovieList from "./components/MovieList.jsx";
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import MovieDetails from "./components/MovieDetails.jsx";
import ErrorBoundary from "./components/ErrorBoundary";
import "./assets/styles.css";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = useCallback(async () => {
    if (!query) return;
    if (location.pathname !== "/") {
      navigate("/");
    }
    const data = await searchMovie(query);
    if (Array.isArray(data) && data.length > 0) {
      setResults(data);
    } else {
      setResults([]);
    }
  }, [query, location.pathname, navigate]);

  useEffect(() => {
    if (query.length > 2) {
      handleSearch();
    }
  }, [query, handleSearch]);

  return (
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
  );
}

export default App;