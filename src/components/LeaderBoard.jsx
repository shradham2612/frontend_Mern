import React from 'react'



const LeaderBoard = () => {
  return (
    <div className="text-gwhite ">
      <div>
        <table className="content-table text-center lg:mt-12">
          <thead className="font-semibold text-lg lg:text-3xl">
            <tr className="">
              <td className="">Name</td>
              <td className="">Attempts</td>
              <td className="">Earn Points</td>
              <td className="">Result</td>
            </tr>
          </thead>
          <tbody className="lg:text-2xl ">
            <tr>
              <td className="pt-1 pb-1">SMAH</td>
              <td className="pt-1 pb-1">10</td>
              <td className="pt-1 pb-1">30</td>
              <td className="pt-1 pb-1">Passed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderBoard