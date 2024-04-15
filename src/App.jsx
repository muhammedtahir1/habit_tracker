import React from "react";
import Calendar2 from "./components/Calendar2";
import { Helmet } from "react-helmet";
import { Analytics } from "@vercel/analytics/react";


const App = () => {

  return (
    <div className="flex flex-col items-center min-h-[100vh] justify-center">
      <Analytics />

      <Helmet>
        <title>Monthly Progress / Habit Tracker</title>
        <meta
          name="description"
          content="To build a habit and work consistently everyday. Making the work enjoyable by looking at the visuals and tracking progress"
        />
        <meta
          name="keywords"
          content="Habit building, habit tracker, monthly tracker, progress tracker, monthly target, 30 days target, 30 days challenge, monthly tracking visuals,
           tracking progress, planning, daily scheduling."
        />
      </Helmet>
      
      <Calendar2 />
{/* 
      <div className="flex items-center gap-3 mt-10 mb-10">
        <div className="flex items-center gap-2">
          Holiday{" "}
          <div className="p-1 border-4 border-red-700 rounded-full size-1"></div>
        </div>
        <div className="flex items-center gap-2">
          Today{" "}
          <div className="p-1 border-4 border-blue-700 rounded-full size-1"></div>
        </div>
        <div className="flex items-center gap-2">
          Gov Holiday{" "}
          <div className="p-1 border-4 border-indigo-800 rounded-full size-1"></div>
        </div>
      </div> */}

      

      <div className="mt-28">
        
        <div className="px-3 py-2 mt-5 text-center text-black bg-red-200 rounded-full">Made with 💖<a className="underline " href="https://tahir-webdeveloper-portfolio.vercel.app/" target="_blank">mohammed-tahir</a></div>
      </div>
      
    </div>
  );
};

export default App;
