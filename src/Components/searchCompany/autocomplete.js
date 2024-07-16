import { useCallback, useEffect, useState } from "react";
import {
  SWrapper,
  SQueriesWrapper,
  SQueries,
  SQueryImage,
  SQueryDomain,
  SNotFoundIcon,
  SQueryName,
  SQuery,
  SLabelPrefix,
  SLabelSuffix,
  SNotFound,
  SInput
} from "./autocomplete.style";
import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Autocomplete = ({ onSubmit, placeholder }) => {
  const [value, setValue] = useState({ text: "", active: false });
  const [queries, setQueries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = queries?.[0]?.domain || value.text;
    onSubmit({ value: text, query: undefined, queries });
    setValue({ text, active: false });
    setQueries([]);
  };

  const handleClick = (query) => {
    onSubmit({ value: value.text, query, queries });
    setValue({ text: query.icon, active: false });
  };

  const reset = () => {
    setQueries([]);
    setValue({ text: "", active: false });
  };

  const getQueries = useCallback(async (searchValue) => {
    if (searchValue !== "") {
      try {
        const url = `https://api.brandfetch.io/v2/search/${searchValue}`;

        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          setQueries(data);
        }
      } catch (err) {
        console.log("Something went wrong, try again later.");
      }
      return;
    }

    setQueries([]);
  }, []);

  useEffect(() => {
    getQueries(value.text);
  }, [getQueries, value.text]);

  return (
    <SWrapper>
      <form onSubmit={handleSubmit}>
        <SLabelPrefix>
          <FontAwesomeIcon size="sm" icon={faMagnifyingGlass} />
        </SLabelPrefix>

        <SInput
          placeholder={placeholder}
          value={value.text}
          onChange={(e) =>
            setValue({ text: e.target.value, active: true })
          }
        />

        {value.text !== "" && (
          <SLabelSuffix onClick={() => reset()}>
            <FontAwesomeIcon size="sm" icon={faTimes} />
          </SLabelSuffix>
        )}
      </form>

      {value.active && value.text !== "" && (
        <SQueriesWrapper>
          {queries.length ? (
            <SQueries>
              {queries.map((query, i) => (
                <SQuery key={i} onClick={() => handleClick(query)}>
                  <SQueryImage>
                    <img src={query.icon} alt={query.name} />
                  </SQueryImage>

                  <SQueryName>{query.name || query.domain}</SQueryName>

                  <SQueryDomain>{query.domain}</SQueryDomain>
                </SQuery>
              ))}
            </SQueries>
          ) : (
            <SNotFound>
              <SNotFoundIcon>
                <FontAwesomeIcon size="xl" icon={faMagnifyingGlass} />
              </SNotFoundIcon>

              <p className="bold">Nothing found...</p>

              <br />

              <p>Search by entering it’s website URL for better result.</p>
            </SNotFound>
          )}
        </SQueriesWrapper>
      )}
    </SWrapper>
  );
};

