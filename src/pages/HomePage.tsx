import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Wrapper from '../components/Layout/Wrapper';
import searchAll from '../constants/searchAll';

const HomePage = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const submitSearchHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredSearchValue = searchInputRef.current?.value;

    navigate(
      `/search?search=${enteredSearchValue || searchAll}&copyright=${searchAll}&languages=${searchAll}&page=1`
    );
  };

  return (
    <Wrapper>
      <div className='homepage'>
        <h2 className='homepage__title'>Search the catalog</h2>
        <form className='homepage__form' onSubmit={submitSearchHandler}>
          <div className='form__control'>
            <input className='input' ref={searchInputRef} />
          </div>
          <div className='form__action'>
            <button type='submit' className='button'>
              Search
            </button>
          </div>
        </form>
        <p className='homepage__subtitle'>
          Discover a world of literature at your fingertips. Search for books, explore different genres, and indulge in captivating stories. Immerse yourself in the joy of reading as you uncover new ideas, embark on adventures, and expand your horizons.
          <br/><br/>
          Find the perfect book that suits your interests using our simple and convenient search panel. Whether you're seeking classics, contemporary bestsellers, or thought-provoking non-fiction, we have something for everyone. Just enter your query and let us guide you to a diverse selection of books that match your preferences.
        </p>
      </div>
    </Wrapper>
  );
};

export default HomePage;

