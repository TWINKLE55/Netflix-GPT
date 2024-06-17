import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerId: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerId: (state, action) => {
      state.trailerId = action.payload;
      // console.log(action.payload);s
    },
  },
});

export default movieSlice.reducer;
export const { addNowPlayingMovies, addTrailerId } = movieSlice.actions;
