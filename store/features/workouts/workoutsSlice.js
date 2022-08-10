import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  workouts: [],
};

export const getWorkouts = createAsyncThunk(
  "workouts/getWorkouts",
  async () => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_WORKOUTS_API, {
        method: "GET",
        headers: {},
      });

      if (response.ok) {
        const result = await response.json();
        return result;
      }
    } catch (err) {
      console.error(err);
    }
  }
);

const workoutsSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    setWorkouts: (state, action) => {
      state.workouts = action.payload;
    },
  },
  extraReducers: {
    [getWorkouts.fulfilled]: (state, action) => {
      state.workouts = action.payload;
    },
  },
});

export const { setWorkouts } = workoutsSlice.actions;

export default workoutsSlice.reducer;
