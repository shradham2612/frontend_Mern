import React, {useState, useEffect } from 'react'
import { getServerData } from '../helper/helper';




const LeaderBoard = () => {

  const [data,setData] = useState([])
useEffect(() =>{
  getServerData(`http://localhost:5000/api/result`,(res)=>{setData(res)})
 // console.log({data});
})

  return (
    <div className="text-gwhite pb-20  ">
      <div>
        <table className="content-table text-center lg:mt-12">
          <thead className="font-semibold text-lg lg:text-2xl">
            <tr className="">
              <td className="">Name</td>
              <td className="">Attempts</td>
              <td className="">Earn Points</td>
              <td className="">Result</td>
            </tr>
          </thead>
          <tbody className="lg:text-lg ">
            {!data ?? <div>No Data Found</div>}
            {data.map((v,i)=>(
               <tr key={i}>
              <td className="pt-1 pb-1">{v?.username}</td>
              <td className="pt-1 pb-1">{v?.attempts }</td>
              <td className="pt-1 pb-1">{v?.points}</td>
              <td className="pt-1 pb-1">{v?.achieved}</td>
               </tr>
              ))}
           
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderBoard;