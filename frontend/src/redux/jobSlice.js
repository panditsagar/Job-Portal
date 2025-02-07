import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    allAdminJobs: [],
    singleJob: null,
    allAppliedJobs: [],
    searchedQuery:""
  },
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },

    setSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
    setAllAdminJobs: (state, action) => {
      state.allAdminJobs = action.payload;
    },
    setAllAppliedJobs: (state, action) => {
      state.allAppliedJobs = action.payload;
    },
    setSearchedQuery: (state, action) => {
      state.searchedQuery = action.payload;
    },
    setDeleteJob: (state, action) => {
      state.allAdminJobs = state.allAdminJobs.filter(
        (job) => job._id !== action.payload
      );
    },
  },
});

export const { setAllJobs, setSingleJob, setAllAdminJobs, setAllAppliedJobs ,setSearchedQuery, setDeleteJob} =
  jobSlice.actions;
export default jobSlice.reducer;
