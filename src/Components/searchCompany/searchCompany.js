
import { CompanyAutocomplete } from "./autocomplete";

export default function SearchCompany({}) {
  const handleSubmit = ({ value, query, queries }) => {
    // Query has been clicked if query in undefined.
    console.log(value, query, queries);
  };

  return (
    <div>
      <CompanyAutocomplete
        onSubmit={handleSubmit}
        placeholder="Enter organization name"
      />
    </div>
  );
}

