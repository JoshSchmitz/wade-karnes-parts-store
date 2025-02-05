/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: '/api' });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [
    'Accomplishment',
    'Award',
    'Education',
    'Experience',
    'Group',
    'Language',
    'Leadership',
    'Project',
    'Resume',
    'Skill',
    'User',
  ],
  endpoints: (builder) => ({}),
});
