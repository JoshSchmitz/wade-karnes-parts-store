import { apiSlice } from '../api';
const RESUME_URL = '/resume';

export const languageApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLanguage: builder.query({
      query: ({ resumeId, languageId }) => ({
        url: languageId
          ? `${RESUME_URL}/${resumeId}/language/${languageId}`
          : `${RESUME_URL}/${resumeId}/language`,
        method: 'GET',
      }),
      providesTags: ['Language'],
    }),
    createLanguage: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}/${data.resumeId}/language`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Language', 'Resume'],
    }),
    updateLanguage: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}/${data.resumeId}/language/${data.languageId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Language'],
    }),
    deleteLanguage: builder.mutation({
      query: ({ resumeId, languageId }) => ({
        url: `${RESUME_URL}/${resumeId}/language/${languageId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Language', 'Resume'],
    }),
  }),
});

export const {
  useGetLanguageQuery,
  useCreateLanguageMutation,
  useUpdateLanguageMutation,
  useDeleteLanguageMutation,
} = languageApiSlice;
