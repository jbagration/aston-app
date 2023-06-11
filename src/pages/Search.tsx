import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { useSearchParams, useNavigate, createSearchParams } from 'react-router-dom';

import Loading from '../components/Layout/Loading';
import Wrapper from '../components/Layout/Wrapper';
import searchAll from '../constants/searchAll';
import searchCategories from '../constants/searchCategories';
import { useGetBooksQuery } from '../store/api-slice';

const LazyBookList = lazy(() => import('../components/BookList'));
const LazyPagination = lazy(() => import('../components/Layout/Pagination'));
const LazySearchForm = lazy(() => import('../components/SearchForm'));

const Search = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loadingSearch, setLoadingSearch] = useState(false); 
  const [switchingPages, setSwitchingPages] = useState(false); 

  const filterValidParams = useCallback((param: [string, string]) => {
    return searchCategories.some((elem) => param[0] === elem);
  }, []);

  const filterEmptyParams = useCallback((param: [string, string]) => {
    return param[1] !== searchAll;
  }, []);

  const filteredValidParams = Object.fromEntries(
    [...searchParams]
      .filter(filterValidParams)
      .filter((param) => param[0] !== 'page')
  );

  const filteredSearchParams = Object.fromEntries(
    [...searchParams].filter(filterValidParams).filter(filterEmptyParams)
  );

  const query = createSearchParams(filteredSearchParams).toString();

  const { data, isFetching, isSuccess, isError } = useGetBooksQuery(query);

  const pageChangeHandler = useCallback(
    (clickedPage: number) => {
      setSwitchingPages(true); 
      navigate(
        `?${createSearchParams({
          ...filteredValidParams,
          page: clickedPage.toString(),
        }).toString()}`,
        { state: { component: 'pagination' } }
      );
    },
    [filteredValidParams, navigate]
  );

  const handleSearchInput = useCallback((input: string) => {
    setLoadingSearch(true);
    setTimeout(() => {
      setLoadingSearch(false); 
    }, 2000);
  }, []);

  let count = 0;
  let content = (
    <p className='info'>
      Sorry, we couldn't find any books. Change the search parameters and try again.
    </p>
  );

  if (loadingSearch || isFetching || switchingPages) {
    content = <Loading />;
  }

  if (isSuccess && !loadingSearch && !switchingPages) {
    const { books } = data;
    count = data.count;

    if (books.length > 0) {
      content = (
        <>
          <p className='search-results'>
            We have found <span className='bold'>{count}</span> books
          </p>
          <Suspense fallback={<Loading />}>
            <LazyPagination
              pagination={{
                onPageChange: pageChangeHandler,
                totalCount: count,
                currentPage: parseInt(searchParams.get('page') || '') || 1,
                pageSize: 32,
              }}
            />
            <LazyBookList books={books} searchParams={filteredValidParams} />
            <LazyPagination
              pagination={{
                onPageChange: pageChangeHandler,
                totalCount: count,
                currentPage: parseInt(searchParams.get('page') || '') || 1,
                pageSize: 32,
              }}
            />
          </Suspense>
        </>
      );
    }
  }

  if (isError) {
    content = <p className='info'>Oops! Something went wrong.</p>;
  }

  useEffect(() => {
    if (switchingPages) {
      const timer = setTimeout(() => {
        setSwitchingPages(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [switchingPages]);

  return (
    <Wrapper>
      <div className='search-page'>
        <Suspense fallback={<Loading />}>
          <LazySearchForm
            defaultValues={{
              search: filteredSearchParams.search || '',
              languages: filteredSearchParams.languages || searchAll,
              copyright: filteredSearchParams.copyright || searchAll,
            }}
            onSearchInput={handleSearchInput}
          />
          {content}
        </Suspense>
      </div>
    </Wrapper>
  );
};

export default Search;
