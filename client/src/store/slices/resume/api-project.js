import { apiSlice } from '../api';
const RESUME_URL = '/resume';

export const projectApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProject: builder.query({
      query: ({ resumeId, projectId }) => ({
        url: projectId
          ? `${RESUME_URL}/${resumeId}/project/${projectId}`
          : `${RESUME_URL}/${resumeId}/project`,
        method: 'GET',
      }),
      providesTags: ['Project'],
    }),
    createProject: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}/${data.resumeId}/project`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Project', 'Resume'],
    }),
    updateProject: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}/${data.resumeId}/project/${data.projectId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Project'],
    }),
    deleteProject: builder.mutation({
      query: ({ resumeId, projectId }) => ({
        url: `${RESUME_URL}/${resumeId}/project/${projectId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Project', 'Resume'],
    }),
  }),
});

export const {
  useGetProjectQuery,
  useCreateProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectApiSlice;
