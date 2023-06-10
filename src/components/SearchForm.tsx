import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash.debounce';

import searchAll from '../constants/searchAll';

interface SearchFormProps {
  defaultValues: { search: string; languages: string; copyright: string };
}

const SearchForm: React.FC<SearchFormProps> = ({ defaultValues }) => {
  const navigate = useNavigate();
  const { search, languages, copyright } = defaultValues;
  const [searchInput, setSearchInput] = useState<string>(search);
  const [langInput, setLangInput] = useState<string>(languages);
  const [copyrightInput, setCopyrightInput] = useState<string>(
    copyright || searchAll
  );
  const [isLoading, setIsLoading] = useState<boolean>(false); 

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    const searchHandler = debounce(() => {
      setIsLoading(true);

      const newSearchParams = `search=${encodeURIComponent(
        searchInput || searchAll
      )}&languages=${encodeURIComponent(langInput)}&copyright=${encodeURIComponent(
        copyrightInput
      )}&page=${encodeURIComponent('1')}`;

      navigate(`?${newSearchParams}`, {
        state: { previousPage: window.location.pathname },
      });

      setTimeout(() => {
        setIsLoading(false); 
      }, 2000);
    }, 2000);

    searchHandler();

    return () => {
      searchHandler.cancel();
    };
  }, [searchInput, langInput, copyrightInput, navigate]);

  return (
    <form className="form search-form" onSubmit={submitFormHandler}>
      <div className="form__control">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className="form__control">
        <select
          value={langInput}
          onChange={(e) => setLangInput(e.target.value)}
        >
          <option disabled>Language</option>
          <option value={searchAll}>All</option>
          <option value="en">English</option>
          <option value="it">Italian</option>
        </select>
      </div>
      <div className="form__control">
        <select
          value={copyrightInput}
          onChange={(e) => setCopyrightInput(e.target.value)}
        >
          <option disabled>Copyright</option>
          <option value={searchAll}>All</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
      {isLoading && <div className='info__search'>Loading...</div>}
    </form>
  );
};

export default SearchForm;
