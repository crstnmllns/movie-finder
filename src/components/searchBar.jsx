import { Form, Button } from "react-bootstrap";

function SearchBar({ query, setQuery, onSearch }) {
  return (
    <Form className="d-flex gap-2">
      <Form.Control
        type="text"
        placeholder="Escribe el nombre de la película..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={onSearch} variant="primary">Buscar</Button>
    </Form>
  );
}

export default SearchBar;

