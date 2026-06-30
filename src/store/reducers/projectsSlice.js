// store/projectsSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { initialProjects } from "../data/seedData";

const projectsSlice = createSlice({
  name: "projects",
  initialState: initialProjects,
  reducers: {
    addProject(state, action) {
      state.unshift(action.payload);
    },

    deleteProject(state, action) {
      return state.filter(
        p => p.id !== action.payload
      );
    },

    updateProject(state, action) {
      const project = state.find(
        p => p.id === action.payload.id
      );

      if (project) {
        project.title = action.payload.title;
        project.info = action.payload.info;
      }
    }
  }
});

export const {
  addProject,
  deleteProject,
  updateProject
} = projectsSlice.actions;

export default projectsSlice.reducer;