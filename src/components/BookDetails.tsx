import PropTypes from 'prop-types';
import React from 'react';

import editFetchData from '../helpers/editFetchData';
import HeartIcon from './HeartIcon';
import { BookData } from '../types/types';

type BookDetailsProps = {
  book?: BookData;
};

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  const changedData = book ? editFetchData(book) : null;

  return (
    <div className='book-details card'>
      {changedData && (
        <>
          <div className='book-cover'>
            <img src={changedData.cover} alt='book cover' />
          </div>
          <div className='book-description'>
            <h2 className='book-title'>{changedData.title}</h2>
            <p>
              <span className='italic bold'>Author:</span>{' '}
              {book?.authors?.map((author) => author.name).join(', ')}
            </p>
            <p>
              <span className='italic bold'>Language:</span>{' '}
              {changedData.languages?.join(', ')}
            </p>
            <p>
              <span className='italic bold'>Subjects:</span>{' '}
              {changedData.subjects?.join(', ')}
            </p>
            <p>
              <span className='italic bold'>Download count:</span>{' '}
              {changedData.downloadCount}
            </p>
            {book && <HeartIcon id={book.id} />}
          </div>
        </>
      )}
    </div>
  );
};

BookDetails.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    formats: PropTypes.shape({
      'image/jpeg': PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    download_count: PropTypes.number.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    subjects: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    authors: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }),
};

export default BookDetails;
