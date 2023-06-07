import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import searchAll from '../constants/searchAll';

interface SearchFormProps {
  defaultValues?: { search: string; languages: string; copyright: string };
}

const SearchForm: React.FC<SearchFormProps> = ({ defaultValues = { search: '', languages: '', copyright: '' } }) => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState(defaultValues.search);
  const [langInput, setLangInput] = useState(defaultValues.languages);
  const [copyrightInput, setCopyrightInput] = useState(defaultValues.copyright);

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const searchHandler = () => {
    const newSearchParams = `search=${encodeURIComponent(searchInput || searchAll)}&copyright=${encodeURIComponent(
      copyrightInput
    )}&languages=${encodeURIComponent(langInput)}&page=${encodeURIComponent('1')}`;

    navigate(`?${newSearchParams}`, { state: { previousPage: window.location.pathname } });
  };

  useEffect(() => {
    searchHandler();
  }, [searchInput, langInput, copyrightInput]);

  return (
    <form className='form search-form' onSubmit={submitFormHandler}>
      <div className='form__control'>
        <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
      </div>
      <div className='form__control'>
        <select value={langInput} onChange={(e) => setLangInput(e.target.value)}>
          <option disabled>Language</option>
          <option value={searchAll}>All</option>
          <option value='en'>English</option>
          <option value='it'>Italian</option>
        </select>
      </div>
      <div className='form__control'>
        <select value={copyrightInput} onChange={(e) => setCopyrightInput(e.target.value)}>
          <option disabled>Copyright</option>
          <option value={searchAll}>All</option>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>
      </div>
    </form>
  );
};

export default SearchForm;
