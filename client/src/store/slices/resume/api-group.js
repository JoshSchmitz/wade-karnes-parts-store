import { apiSlice } from '../api';
const RESUME_URL = '/resume';

export const groupApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGroup: builder.query({
      query: ({ resumeId, groupId }) => ({
        url: groupId
          ? `${RESUME_URL}/${resumeId}/group/${groupId}`
          : `${RESUME_URL}/${resumeId}/group`,
        method: 'GET',
      }),
      providesTags: ['Group'],
    }),
    createGroup: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}/${data.resumeId}/group`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Group', 'Resume'],
    }),
    updateGroup: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}/${data.resumeId}/group/${data.groupId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Group'],
    }),
    deleteGroup: builder.mutation({
      query: ({ resumeId, groupId }) => ({
        url: `${RESUME_URL}/${resumeId}/group/${groupId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Group', 'Resume'],
    }),
  }),
});

export const {
  useGetGroupQuery,
  useCreateGroupMutation,
  useUpdateGroupMutation,
  useDeleteGroupMutation,
} = groupApiSlice;
