import { useNavigate } from 'react-router-dom';
import BookSummary from './BookSummary';
import { BookData } from '../types/types';

const FavouritesList: React.FC<{ books: BookData[] }> = ({ books }) => {
  const navigate = useNavigate();

  const clickCardHandler = (bookId: number) => {
    navigate(`/details/${bookId}`);
  };

  return (
    <ul className='book-list'>
      {books.map((book) => (
        <BookSummary
          key={book.id}
          book={book}
          onClick={() => clickCardHandler(book.id)}
        />
      ))}
    </ul>
  );
};

export default FavouritesList;
