import Head from "next/head";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setWorkouts,
  getWorkouts,
} from "../store/features/workouts/workoutsSlice";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkouts());
  }, []);
  
  const workouts = useSelector((store) => store.workouts.workouts);

  return (
    <>
      <Head>
        <title>Workout Buddy</title>
        <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/flexed-biceps_1f4aa.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="grid home gap-16">
        <div className="workouts">
          {workouts &&
            workouts.map((workout) => (
              <WorkoutDetails key={workout._id} workout={workout} />
            ))}
        </div>
        <WorkoutForm />
      </div>
    </>
  );
};

export default Home;
