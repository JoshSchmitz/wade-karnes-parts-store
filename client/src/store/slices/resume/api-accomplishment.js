import { apiSlice } from '../api';
const RESUME_URL = '/resume';

export const accomplishmentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAccomplishment: builder.query({
      query: ({ resumeId, accomplishmentId }) => ({
        url: accomplishmentId
          ? `${RESUME_URL}/${resumeId}/accomplishment/${accomplishmentId}`
          : `${RESUME_URL}/${resumeId}/accomplishment`,
        method: 'GET',
      }),
      providesTags: ['Accomplishment'],
    }),
    createAccomplishment: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}/${data.resumeId}/accomplishment`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Accomplishment', 'Resume'],
    }),
    updateAccomplishment: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}/${data.resumeId}/accomplishment/${data.accomplishmentId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Accomplishment'],
    }),
    deleteAccomplishment: builder.mutation({
      query: ({ resumeId, accomplishmentId }) => ({
        url: `${RESUME_URL}/${resumeId}/accomplishment/${accomplishmentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Accomplishment', 'Resume'],
    }),
  }),
});

export const {
  useGetAccomplishmentQuery,
  useCreateAccomplishmentMutation,
  useUpdateAccomplishmentMutation,
  useDeleteAccomplishmentMutation,
} = accomplishmentApiSlice;
