import { useParams } from 'react-router-dom';

import BookDetails from '../components/BookDetails';
import Loading from '../components/Layout/Loading';
import { useGetBookByIdQuery } from '../store/api-slice';

const Details = () => {
  const { bookId } = useParams();
  const { data: book, isLoading, isSuccess, isError } = useGetBookByIdQuery(bookId);

  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (isSuccess && book?.detail !== 'Not found.') {
    content = <BookDetails book={book} />;
  } else if (isError) {
    content = <p className='info'>Oops! Something went wrong.</p>;
  } else {
    content = <p className='info'>We couldn't find this book's description</p>;
  }

  return <div className='details'>{content}</div>;
};

export default Details;
