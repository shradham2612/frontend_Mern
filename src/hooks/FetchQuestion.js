import { useEffect, useState } from "react";

//import ques, {answers} from "../constants/ques";
import { useDispatch } from "react-redux";

import * as Action from "../redux/question_reducer";
import { getServerData } from "../helper/helper";

export const useFetchQuestion = () => {
  const dispatch = useDispatch();

  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));

    (async () => {
      try {
       // let question = await ques;
     //   const [{questions, answers}]=await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data) =>data);
        const [{questions, answers}]=await getServerData(`https://backendmern.vercel.app/api/questions`, (data) =>data);
        //const [{questions, answers}]=await getServerData(`http://localhost:5000/api/questions`, (data) =>data);
        console.log({ questions, answers });
        

        console.log("this is working" );
        if (questions.length > 0) {
          setGetData((prev) => ({
            ...prev,
            isLoading: false,
          }));
          setGetData((prev) => ({
            ...prev,
            apiData: {questions,answers}
          }));

          dispatch(Action.startExamAction({question : questions, answers }));
        } else {
          throw new Error("No question Available");
        }
      } catch (error) {
        setGetData((prev) => ({
          ...prev,
          isLoading: false,
        }));
        setGetData((prev) => ({
          ...prev,
          serverError: error,
        }));
      }
    })();
  }, [dispatch]);

  return [getData, setGetData];
};


/* MOve action dispatch function */ 
export const MoveNextQuestion = () => async (dispatch)=> {
  try {
      dispatch(Action.moveNextAction());
  }
  catch (error) {
    console.log(error);

  }
}
/* MOve action dispatch function */ 
export const MovePrevQuestion = () => async (dispatch)=> {
  try {
      dispatch(Action.movePrevAction());
  }
  catch (error) {
    console.log(error);

  }
}