import classNames from 'classnames';
import React, { useCallback } from 'react';

import usePagination from '../../hooks/use-pagination';

const Pagination: React.FC<{
  pagination: {
    onPageChange: (page: number) => void;
    totalCount: number;
    siblingCount?: number;
    pageSize: number;
    currentPage: number;
  };
}> = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage = 1,
    pageSize,
  } = props.pagination;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const lastPage = paginationRange[paginationRange.length - 1];

  const onFirst = useCallback(() => {
    onPageChange(1);
  }, [onPageChange]);

  const onLast = useCallback(() => {
    onPageChange(lastPage);
  }, [lastPage, onPageChange]);

  const onNext = useCallback(() => {
    onPageChange(currentPage + 1);
  }, [currentPage, onPageChange]);

  const onPrevious = useCallback(() => {
    onPageChange(currentPage - 1);
  }, [currentPage, onPageChange]);

  return renderPagination();

  function renderPagination() {
    if (paginationRange.length < 2 || currentPage === 0) {
      return null;
    }

    return (
      <div className='pagination'>
        <button
          className={classNames('pagination-item button-arrow', {
            disabled: currentPage === 1,
          })}
          onClick={onFirst}
        >
          {'<<'}
        </button>
        <button
          className={classNames('pagination-item button-arrow', {
            disabled: currentPage === 1,
          })}
          onClick={onPrevious}
        >
          {'<'}
        </button>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === 0) {
            return (
              <span key={index} className='pagination-item'>
                &#8230;
              </span>
            );
          }

          return (
            <button
              key={pageNumber}
              className={classNames('pagination-item page', {
                selected: pageNumber === currentPage,
              })}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className={classNames('pagination-item button-arrow', {
            disabled: currentPage === lastPage,
          })}
          onClick={onNext}
        >
          {'>'}
        </button>
        <button
          className={classNames('pagination-item button-arrow', {
            disabled: currentPage === lastPage,
          })}
          onClick={onLast}
        >
          {'>>'}
        </button>
      </div>
    );
  }
};

export default Pagination;
