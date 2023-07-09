import React, { useEffect, useState } from "react";
import Questions from "./Questions";

import { useSelector, useDispatch } from "react-redux";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";

import { PushAnswer } from "../hooks/setResult";

import { Navigate } from "react-router-dom";

const Quiz = () => {
  const [check, setChecked] = useState(undefined);
  const result = useSelector((state) => state.result.result);
  const state = useSelector((state) => state.result);
  // const trace = useSelector((state) => state.questions.trace);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(result);
  });

  function onNext() {
    console.log("on next click");
    if (trace < queue.length) {
      /**Update the trace value */
      dispatch(MoveNextQuestion());
      // insert new result in array 
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
       setChecked(undefined);
    }

    //console.log(state.questions.trace);
  }
  function onPrev() {
    console.log("on previous click");
    /**Update the trace value */
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
  }

  function onChecked(check) {
  //  console.log(check);
    setChecked(check);
  }

  /**finish exam after last question */
  if (result.length && result.length >= queue.length) {
    return <Navigate to="/result"></Navigate>;
  }

  return (
    <>
      <h1 className="flex justify-center text-gwhite text-5xl pt-24">
        Assemble !!
      </h1>

      <Questions onChecked={onChecked} />

      <div className="flex flex-row justify-around text-dblue mt-12">
        {trace > 0 ? (
          <button
            onClick={onPrev}
            className="bg-orange p-4 lg:p-8 rounded-md w-2/6 sm:w-1/6 lg:w-52 lg:mt-12"
          >
            Prev
          </button>
        ) : (
          <></>
        )}

        {trace == queue.length - 1 ? (
          <button
            onClick={onNext}
            className="bg-orange p-4 lg:p-8 rounded-md w-2/6 sm:w-1/6 lg:w-52 lg:mt-12"
          >
           Submit
          </button>
        ) : (
          <button
            onClick={onNext}
            className="bg-orange p-4 lg:p-8 rounded-md w-2/6 sm:w-1/6 lg:w-52 lg:mt-12"
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default Quiz;
