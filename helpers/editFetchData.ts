import bookImage from '../assets/bookCover.jpg';
import { BookData } from '../types/types';

const editFetchData = (data: BookData) => {
  const { authors, formats, download_count } = data;
  const authorNames = authors.reduce((prev, curr) => prev + curr.name + ' ', '');

  const bookCover = formats['image/jpeg'] ?? bookImage;

  return {
    ...data,
    authors: authorNames,
    cover: bookCover,
    downloadCount: download_count,
  };
};

export default editFetchData;
