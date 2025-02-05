import { apiSlice } from '../api';
const RESUME_URL = '/resume';

export const awardApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAward: builder.query({
      query: ({ resumeId, awardId }) => ({
        url: awardId
          ? `${RESUME_URL}/${resumeId}/award/${awardId}`
          : `${RESUME_URL}/${resumeId}/award`,
        method: 'GET',
      }),
      providesTags: ['Award'],
    }),
    createAward: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}/${data.resumeId}/award`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Award', 'Resume'],
    }),
    updateAward: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}/${data.resumeId}/award/${data.awardId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Award'],
    }),
    deleteAward: builder.mutation({
      query: ({ resumeId, awardId }) => ({
        url: `${RESUME_URL}/${resumeId}/award/${awardId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Award', 'Resume'],
    }),
  }),
});

export const {
  useGetAwardQuery,
  useCreateAwardMutation,
  useUpdateAwardMutation,
  useDeleteAwardMutation,
} = awardApiSlice;
