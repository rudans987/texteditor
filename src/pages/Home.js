
import React from "react";
import {  useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { update } from "../redux/modules/til";
import axios from 'axios';

function Home() {
  const tilList = useSelector((state)=> state.til.til_list);
  console.log(tilList)
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const getTilList = async () => {
    const res = await axios.get(
      "http://localhost:5001/til_list");
      dispatch(update(res.data));
  }

  React.useEffect(() => {
    getTilList();
  }, []);

    return (
      <div
      style={{
        margin: "0 auto",
        padding: "1rem",
        width: "60vmin",
      }}
      
       >
        <div
        className="title-area"
        style={{
          borderBottom: "1px solid #ccc",
          display: "flex",
          justifyContent: "space-between",
        }}>
        <h1>TIL</h1>
        <button 
        style={{
          color: "#fff",
          background: "#065880",
          border: "none",
          borderRadius: "3rem",
          width: "3rem",
          height: "3rem",
          margin: "auto 0",
        }}
        onClick={()=> {
              navigate("/write");
            }}>추가하기</button>
        </div>
      
       
         {tilList.map((til, idx) => {
          return (
            <div
            key={idx}
            style={{
              border: "1px solid #888",
              marginBottom: "2rem",
              padding: ".5rem",
            }}
            >
            <h3>{til.title}</h3>
            <p>{til.content}</p>
            <p>{til.time}</p>
            </div>
           
          )
        })}
            </div>
  );
}
export default Home;
