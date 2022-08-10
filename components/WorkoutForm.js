// workoutFrom.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getWorkouts } from "../store/features/workouts/workoutsSlice";

const WorkoutForm = () => {
  const dispatch = useDispatch();

  const [workoutData, setWorkoutData] = useState({
    title: "",
    load: "",
    reps: "",
  });
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const updateInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setWorkoutData((prevWorkoutData) => {
      return { ...prevWorkoutData, [name]: value };
    });
    if (emptyFields.length > 0) {
      setEmptyFields([]);
      setError(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_WORKOUTS_API, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(workoutData),
      });

      if (response.ok) {
        const result = await response.json();
        dispatch(getWorkouts());
        setWorkoutData({ title: "", load: "", reps: "" });
        setError(null);
        setEmptyFields([]);
      } else {
        const result = await response.json();
        setError(result.error);
        setEmptyFields(result.emptyFields);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="font-bold text-lg mb-2">Add a New Workout</h3>
      <div>
        <label htmlFor="title" className="block">
          Exercise Title:{" "}
        </label>
        <input
          type="text"
          name="title"
          value={workoutData.title}
          onChange={(e) => updateInput(e)}
          className={`w-full block px-3 py-2 mt-2 mb-5 border rounded box-border outline-none ${
            emptyFields.includes("title") ? "border-error" : "border-[#ddd]"
          }`}
        />
      </div>
      <div>
        <label htmlFor="load" className="block">
          Load (in Kg):{" "}
        </label>
        <input
          type="number"
          name="load"
          value={workoutData.load}
          onChange={(e) => updateInput(e)}
          className={`w-full block px-3 py-2 mt-2 mb-5 border rounded box-border outline-none ${
            emptyFields.includes("load") ? "border-error" : "border-[#ddd]"
          }`}
        />
      </div>
      <div>
        <label htmlFor="reps" className="block">
          Reps:{" "}
        </label>
        <input
          type="number"
          name="reps"
          value={workoutData.reps}
          onChange={(e) => updateInput(e)}
          className={`w-full block px-3 py-2  mt-2 mb-5 border rounded box-border outline-none ${
            emptyFields.includes("reps") ? "border-error" : "border-[#ddd]"
          }`}
        />
      </div>
      <button className="p-2 w-full rounded bg-primary text-white">
        Add Workout
      </button>
      {error && (
        <div className="p-2 bg-[#ffefef] border border-error text-error rounded my-5">
          {error}
        </div>
      )}
    </form>
  );
};

export default WorkoutForm;
