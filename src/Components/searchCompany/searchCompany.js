import "./searchCompany.css";
import { Autocomplete } from "./autocomplete";

export default function SearchCompany() {
  const handleSubmit = ({ value, query, queries }) => {
    // Query has been clicked if query in undefined.
    console.log(value, query, queries);
  };

  return (
    <div>
      <Autocomplete
        onSubmit={handleSubmit}
        placeholder="Enter a company name"
      />
    </div>
  );
}

