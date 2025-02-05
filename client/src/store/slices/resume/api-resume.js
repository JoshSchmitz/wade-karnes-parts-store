import { apiSlice } from '../api';
const RESUME_URL = '/resume';

export const resumeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getResume: builder.query({
      query: ({ userId, resumeId }) => ({
        url: resumeId
          ? `${RESUME_URL}/${resumeId}`
          : `${RESUME_URL}/user/${userId}`,
        method: 'GET',
      }),
      providesTags: ['Resume'],
    }),
    createResume: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}/user/${data.userId}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Resume'],
    }),
    updateResume: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}/${data.resumeId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Resume'],
    }),
    deleteResume: builder.mutation({
      query: ({ resumeId }) => ({
        url: `${RESUME_URL}/${resumeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Resume'],
    }),
  }),
});

export const {
  useGetResumeQuery,
  useCreateResumeMutation,
  useUpdateResumeMutation,
  useDeleteResumeMutation,
} = resumeApiSlice;
