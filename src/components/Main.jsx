import React, { useRef } from "react";
import bulb from "../assets/bulbi.svg.png";
import { rules } from "../constants";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/result_reducer";

const Main = () => {
  const inputref = useRef(null);

  const dispatch= useDispatch()

  function startQuiz() {
    if(inputref.current?.value){
       dispatch(setUserId(inputref.current?.value))
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center pt-10">
        <img
          src={bulb}
          alt=""
          srcSet=""
          className="w-1/6 md:w-2/12 lg:w-2/12"
        />
        <span className="text-orange text-4xl sm:text-6xl lg:text-7xl font-medium pt-16 lg:pt-10">
          Quizathon
        </span>

        <div className="text-white  pl-10">
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl lg:mt-9 font-medium mt-12 p-3
          "
          >
            Rules
          </h1>

          <ol className="ml-7" style={{ listStyleType: "upper-roman" }}>
            {rules.map((rule, id) => (
              <li
                key={rule.id}
                className="pt-2 pr-2 text-xs sm:text-sm lg:text-xl"
              >
                {rule.rule}
              </li>
            ))}
          </ol>
        </div>
        <div className=" sm:flex flex-row mt-8">
          <h2 className="text-white text-lg sm:text-xl lg:text-3xl pl-4 font-medium sm:mt-3 ">
            Enter your username
          </h2>

          <form action="" id="form" className="pt-3 flex justify-center ">
            <input
              ref={inputref}
              type="text"
              placeholder="Username*"
              className="text-gblue font-medium p-2 rounded-md w-2/3 sm:w-4/5"
            />
          </form>
        </div>
        <Link to={"quiz"} onClick={startQuiz}>
          <button className="bg-white hover:bg-gwhite p-3
          sm:p-8 rounded-full font-medium hover:font-semibold text-xl lg:text-2xl text-dblue hover:text-blue-600 mt-10 lg:mt-8">
            Lets Play !
          </button>
        </Link>
      </div>
    </>
  );
};

export default Main;
