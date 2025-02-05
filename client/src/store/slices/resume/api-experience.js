import { apiSlice } from '../api';
const RESUME_URL = '/resume';

export const experienceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getExperience: builder.query({
      query: ({ resumeId, experienceId }) => ({
        url: experienceId
          ? `${RESUME_URL}/${resumeId}/experience/${experienceId}`
          : `${RESUME_URL}/${resumeId}/experience/`,
        method: 'GET',
      }),
      providesTags: ['Experience'],
    }),
    createExperience: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}/${data.resumeId}/experience/`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Experience', 'Resume'],
    }),
    updateExperience: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}/${data.resumeId}/experience/${data.experienceId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Experience'],
    }),
    deleteExperience: builder.mutation({
      query: ({ resumeId, experienceId }) => ({
        url: `${RESUME_URL}/${resumeId}/experience/${experienceId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Experience', 'Resume'],
    }),
  }),
});

export const {
  useGetExperienceQuery,
  useCreateExperienceMutation,
  useUpdateExperienceMutation,
  useDeleteExperienceMutation,
} = experienceApiSlice;
