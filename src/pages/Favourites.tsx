import { lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Wrapper from '../components/Layout/Wrapper';
import Loading from '../components/Layout/Loading';
import { useGetBooksByIdsQuery } from '../store/api-slice';
import { favouritesActions } from '../store/favourites-slice';
import { RootState } from '../types/types';

const LazyFavouritesList = lazy(() => import('../components/FavouritesList'));

const Favourites = () => {
  const favourites = useSelector((state: RootState) => state.favourites);
  const { email: user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const arrayOfIds = Object.keys(favourites);
  const ids = arrayOfIds.length > 0 ? arrayOfIds.join(',') : '-1';

  const { data: books, isLoading, isSuccess, isError } = useGetBooksByIdsQuery(ids);

  const deleteAllFavourites = () => {
    dispatch(favouritesActions.deleteAll());
  };

  if (!user) {
    return <Navigate to='/signin' replace />;
  }

  let content = null;
  if (isLoading) {
    content = <Loading />;
  } else if (isSuccess && books.length > 0) {
    content = <LazyFavouritesList books={books} />;
  } else if (isError) {
    content = <p className='info'>Oops! Something went wrong!</p>;
  } else {
    content = <p className='info'>It's time to add your first book to favorites!</p>;
  }

  return (
    <Wrapper>
      <div className='favourites'>
        <div className='favourites-header'>
          <button
            className={`button ${Object.keys(favourites).length === 0 ? 'disabled' : ''}`}
            onClick={deleteAllFavourites}
            disabled={Object.keys(favourites).length === 0}
          >
            Clear favourites
          </button>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          {content}
        </Suspense>
      </div>
    </Wrapper>
  );
};

export default Favourites;
