
import React from "react"

import {  useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";
function Home() {
  const tilList = useSelector((state)=> state.til.list);
  const navigate=useNavigate();
    return (
      <div style={{width: "50vw", minHeight: "20vh", border: "1px solid #888"}}>
        <h1>TIL</h1>
        <button onClick={()=> {
              navigate("/write");
            }}>추가하기</button>
       
         {tilList.map((til, idx) => {
          return (
            <div
            key={idx}
            >
            <p>{til.subject}</p>
            <p>{til.body}</p>
            <p>{til.time}</p>
            </div>
           
          )
        })}
            </div>
          

  
  );
}

export default Home;
