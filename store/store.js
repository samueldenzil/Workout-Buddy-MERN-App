import { configureStore } from "@reduxjs/toolkit";
import workoutsSlice from "./features/workouts/workoutsSlice";

export default configureStore({
  reducer: {
    workouts: workoutsSlice,
  },
});
