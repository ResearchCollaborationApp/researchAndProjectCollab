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

export const CompanyAutocomplete = ({ onSubmitSearch, placeholder }) => {
  const [value, setValue] = useState({ text: "", icon: "", active: false });
  const [queries, setQueries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = queries?.[0]?.name || value.text;
    const icon = queries?.[0]?.icon || value.icon;
    onSubmitSearch({ value: text, query: undefined, queries });
    setValue({ text, icon, active: false });
    setQueries([]);
  };

  const handleClick = (query) => {
    const newValue = { text: query.name, icon: query.icon, active: false };
    setValue(newValue);
    onSubmitSearch({ value: newValue.text, query, queries });
    console.log("Selected value:", newValue.text);
  };

  const reset = () => {
    setQueries([]);
    setValue({ text: "", active: false });
  };

  const getQueries = useCallback(async (searchValue) => {
    if (searchValue !== "") {
      try {
        const url = `https://api.brandfetch.io/v2/search/${searchValue}`
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          console.log(data);
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

