import { apiSlice } from '../api';
const RESUME_URL = '/resume';

export const leadershipApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLeadership: builder.query({
      query: ({ resumeId, leadershipId }) => ({
        url: leadershipId
          ? `${RESUME_URL}/${resumeId}/leadership/${leadershipId}`
          : `${RESUME_URL}/${resumeId}/leadership`,
        method: 'GET',
      }),
      providesTags: ['Leadership'],
    }),
    createLeadership: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}/${data.resumeId}/leadership`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Leadership', 'Resume'],
    }),
    updateLeadership: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}/${data.resumeId}/leadership/${data.leadershipId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Leadership'],
    }),
    deleteLeadership: builder.mutation({
      query: ({ resumeId, leadershipId }) => ({
        url: `${RESUME_URL}/${resumeId}/leadership/${leadershipId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Leadership', 'Resume'],
    }),
  }),
});

export const {
  useGetLeadershipQuery,
  useCreateLeadershipMutation,
  useUpdateLeadershipMutation,
  useDeleteLeadershipMutation,
} = leadershipApiSlice;
