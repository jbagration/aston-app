import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BookData, BooksData } from '../types/types';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gutendex.com/books' }),
  endpoints: (builder) => ({
    getBookById: builder.query({
      query: (id) => ({ url: `/${id}` }),
      transformResponse: (responseData: BookData) => {
        const {
          id,
          formats,
          title,
          download_count,
          languages,
          subjects,
          authors,
        } = responseData;
        return {
          id,
          formats,
          title,
          download_count,
          languages,
          subjects,
          authors,
        };
      },
    }),
    getBooksByIds: builder.query({
      query: (ids) => ({
        url: '/',
        params: {
          ids: ids.join(','),
        },
      }),
      transformResponse: (responseData: BooksData) => {
        const { results: books } = responseData;
        return books;
      },
    }),
    getBooks: builder.query({
      query: (query) => ({
        url: query ? `/?${query}` : '',
      }),
      transformResponse: (responseData: BooksData) => {
        const { count, results } = responseData;
        return {
          count,
          books: results,
        };
      },
    }),
  }),
});

export const { useGetBookByIdQuery, useGetBooksByIdsQuery, useGetBooksQuery } =
  apiSlice;
