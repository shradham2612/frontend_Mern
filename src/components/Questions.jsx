import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useFetchQuestion } from "../hooks/FetchQuestion";
//import { updateResultAction } from "../redux/result_reducer";
import { updateResult } from "../hooks/setResult";
//question => questionpres
//questions =>
const Questions = ({ onChecked }) => {
  const [checked, setChecked] = useState(undefined);
  const { trace } = useSelector((state) => state.questions);
  const [{ isLoading, serverError }] = useFetchQuestion();
 //useSelector((state) => console.log(state));
  function onSelect(i) {
    // console.log(i);
    onChecked(i);
    setChecked(i);
     dispatch(updateResult({ trace, checked }));
  }
  const dispatch = useDispatch();

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  useEffect(() => {
    //console.log(questions);
    dispatch(updateResult({ trace, checked }));
  }, [checked]);

  if (isLoading) return <h3 className="text-white">is Loading </h3>;
  if (serverError)
  return (
    <h3 className="text-light text-white">{serverError.message}</h3>
  );

  // if (serverError)
  //   return <h3 className="text-white">{serverError || "Unknown error"} </h3>;

  return (
    <>
      <div className="flex flex-row text-white text-sm sm:text-lg lg:text-3xl justify-center md:justify-start md:ml-20 lg:ml-80 lg:mt-14 md:text-xl p-8 sm:p-10">
        <div className="flex flex-row">
          {"Q."}
          {questions?.id}
          {")"}
        </div>
        <div className="pl-3">{questions?.question}</div>
      </div>

      <ul key={questions?.id} className="ml-12 sm:ml-36 lg:ml-96 lg:mt-6">
        {questions?.options.map((q, i) => (
          <li key={i} className="pb-3 sm:pb-4 lg:pb-8">
            <input
              type="radio"
              value={true}
              name="options"
              id={`q${i}-option`}
              onChange={() => onSelect(i)}
            />
            <label
              htmlFor={`q${i}-option`}
              className="text-white text-sm sm:text-lg lg:text-2xl pl-2 lg:pl-5  "
            >
              {q}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Questions;
