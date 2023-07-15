import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LeaderBoard from "./LeaderBoard";
import { useDispatch, useSelector } from "react-redux";
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";
import { attempts_Number } from "../helper/helper";
import { earnPoints_Number, flagResult } from "../helper/helper";

import { usePublishResult } from "../hooks/setResult";
const Result = () => {
  const dispatch = useDispatch();
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);

  useEffect(() => {
    console.log(flag);
  });

  const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result);
  const earnPoints = earnPoints_Number(result,answers,10);
  const flag= flagResult(totalPoints, earnPoints);

  /**Store user result */
  usePublishResult({result, username :userId,attempts,points:earnPoints,achieved :flag ?"Passed":"Failed"});

  console.log({result, username :userId,attempts,points:earnPoints,achived :flag ?"Passed":"Failed"})

  function onRestart() {
    console.log("on Restart");
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  return ( 
    <section className="background">
      <h1 className="text-4xl text-gwhite flex justify-center p-10 ">RESULT</h1>

      <div className="flex flex-row justify-around">
        <div className="flex flex-col  text-gwhite lg:text-xl">
          <h2 className="pb-3">Username :</h2>
          <h2 className="pb-3">Total Quiz Points :</h2>
          <h2 className="pb-3">Total Questions :</h2>
          <h2 className="pb-3">Total Attempts :</h2>
          <h2 className="pb-3">Total Earn Points :</h2>
          <h2 className="pb-3">Quiz Result :</h2>
        </div>
        <div className="flex flex-col text-white lg:text-xl">
          <h2 className="pb-3">{userId}</h2>
          <h2 className="pb-3">{totalPoints || 0}</h2>
          <h2 className="pb-3">{queue.length || 0}</h2>
          <h2 className="pb-3">{attempts || 0}</h2>
          <h2 className="pb-3">{earnPoints || 0}</h2>
          <h2 className={`pb-3 font-bold ${flag? 'text-green-400':'text-red-700'}`}>{flag ? "Passed " : "Failed"}</h2>
        </div>
      </div>

      <div className="flex  justify-center mt-7">
        <button
          className="text-2xl lg:text-3xl p-3
        lg:p-5 rounded-2xl bg-slate-200 mb-6"
        >
          <Link to={"/"} onClick={onRestart}>
            Restart
          </Link>
        </button>
      </div>

      <LeaderBoard />
    </section>
  );
};

export default Result;
