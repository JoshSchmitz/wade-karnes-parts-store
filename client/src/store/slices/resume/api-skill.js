import { apiSlice } from '../api';
const RESUME_URL = '/resume';

export const skillApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSkill: builder.query({
      query: ({ resumeId, skillId }) => ({
        url: skillId
          ? `${RESUME_URL}/${resumeId}/skill/${skillId}`
          : `${RESUME_URL}/${resumeId}/skill`,
        method: 'GET',
      }),
      providesTags: ['Skill'],
    }),
    createSkill: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}/${data.resumeId}/skill`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Skill', 'Resume'],
    }),
    updateSkill: builder.mutation({
      query: (data) => ({
        url: `${RESUME_URL}/${data.resumeId}/skill/${data.skillId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Skill'],
    }),
    deleteSkill: builder.mutation({
      query: ({ resumeId, skillId }) => ({
        url: `${RESUME_URL}/${resumeId}/skill/${skillId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Skill', 'Resume'],
    }),
  }),
});

export const {
  useGetSkillQuery,
  useCreateSkillMutation,
  useUpdateSkillMutation,
  useDeleteSkillMutation,
} = skillApiSlice;
