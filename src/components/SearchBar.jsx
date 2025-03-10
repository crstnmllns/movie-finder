import { Form } from "react-bootstrap";

function SearchBar({ query, setQuery }) {
  return (
    <Form className="d-flex gap-2">
      <Form.Control
        type="text"
        placeholder="Escribe el nombre de la película..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </Form>
  );
}

export default SearchBar;
