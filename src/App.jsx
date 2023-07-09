import { useState } from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main, Quiz, Result,Questions } from "./components";
//import { CheckUserExists } from "./helper/helper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/quiz",
    element: (
     
        <Quiz />
    
    ),
  },
  {
    path: "/result",
    element: (
    
       
        <Result />
    
    ),
  },
  {
    path: "/Questions",
    element: <Questions />,
  },
]);

function App() {
  return (
    <>
      <section className="background w-full h-screen">
        <RouterProvider router={router} />
      </section>
    </>
  );
}

export default App;

/** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   mode: "jit",
//   theme: {
//     extend: {
//       colors: {
//         white: "#FEFEFE",
//         dimWhite: "E7E9FO",
//         dblue: "051747",
//         gblue: "535F8O",
//         lblue: "081F62",
//       },
//       fontFamily: {
//         dancing: ["Dancing Script", "cursive"],
//         heading: ["Prompt", "sans-serif"],
//       },
//     },
//     screens: {
//       xs: "480px",
//       ss: "620px",
//       sm: "768px",
//       md: "1024px",
//       lg: "1200px",
//       xl: "1700px",
//     },
//   },
//   plugins: [],
// };
