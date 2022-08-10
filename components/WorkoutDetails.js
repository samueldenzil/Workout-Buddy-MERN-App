import React from "react";
import { useDispatch } from "react-redux";
import { getWorkouts } from "../store/features/workouts/workoutsSlice";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_WORKOUTS_API + workout._id, {
        method: "DELETE",
        headers: {},
      });

      if (response.ok) {
        const result = await response.json();
        dispatch(getWorkouts());
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="relative bg-white rounded mb-5 mx-auto p-5 shadow">
      <h4 className="mb-2 text-xl text-primary font-bold">{workout.title}</h4>
      <p className="text-[#555] text-sm">
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p className="text-[#555] text-sm">
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p className="text-[#555] text-sm">
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span
        onClick={handleClick}
        className="absolute top-5 right-5 cursor-pointer text-error bg-[#f1f1f1] rounded-full p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </span>
    </div>
  );
};

export default WorkoutDetails;
