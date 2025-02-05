import { apiSlice } from '../api';
const RESUME_URL = '/resume';

export const educationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEducation: builder.query({
      query: ({ resumeId, educationId }) => ({
        url: educationId
          ? `${RESUME_URL}/${resumeId}/education/${educationId}`
          : `${RESUME_URL}/${resumeId}/education`,
        method: 'GET',
      }),
      providesTags: ['Education'],
    }),
    createEducation: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}/${data.resumeId}/education`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Education', 'Resume'],
    }),
    updateEducation: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}/${data.resumeId}/education/${data.educationId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Education'],
    }),
    deleteEducation: builder.mutation({
      query: ({ resumeId, educationId }) => ({
        url: `${RESUME_URL}/${resumeId}/education/${educationId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Education', 'Resume'],
    }),
  }),
});

export const {
  useGetEducationQuery,
  useCreateEducationMutation,
  useUpdateEducationMutation,
  useDeleteEducationMutation,
} = educationApiSlice;
