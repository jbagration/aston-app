import HeartIcon from './HeartIcon';
import editFetchData from '../helpers/editFetchData';
import { BookData } from '../types/types';

const BookSummary: React.FC<{ book: BookData; onClick: () => void }> = (
  props
) => {
  const { book } = props;
  const changedData = editFetchData(book);
  let { title, authors } = changedData;

  title = title.length > 50 ? title.slice(0, 49) + '...' : title;
  authors = authors.length > 40 ? authors.slice(0, 39) + '...' : authors;

  return (
    <li className='book-summary card' onClick={props.onClick}>
      <div className='book-image'>
        <HeartIcon id={book.id} /> {/* Перемещаем HeartIcon внутрь book-image */}
        <img src={changedData.cover} alt='book cover' />
      </div>
      <div className='book-description'>
        <h3 className='book-title'>{title}</h3>
        <p>{authors}</p>
      </div>
    </li>
  );
  
  
};

export default BookSummary;
