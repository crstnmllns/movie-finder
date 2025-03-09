import { useState } from "react";
import { searchMovie } from "./api/streamingApi";
import { Container } from "react-bootstrap";
import SearchBar from "./components/searchBar";
import MovieList from "./components/movieList";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query) return;
    const data = await searchMovie(query, "cl", "es");
    if (Array.isArray(data) && data.length > 0) {
      setResults(data);
    } else {
      setResults([]);
    }  
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center">Buscador de Películas</h1>
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      <MovieList movies={results} />
    </Container>
  );
}

export default App;