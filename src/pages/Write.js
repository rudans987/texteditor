import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { create } from "../redux/modules/til";
import { useNavigate } from "react-router-dom";

const Write= ()=> {
    const subject = React.useRef(null);
    const body = React.useRef(null);
    const time = React.useRef(null);
    const dispatch = useDispatch();
    const [count, setCount] =useState(2)
    const navigate =useNavigate();

    const addTIL = () => {
       
        dispatch(create({
            id: count,
            subject :subject.current.value,
            body: body.current.value,
            time: time.current.value
        }));
        setCount((cur)=>cur+1);
        subject.current.value="";
        body.current.value="";
        time.current.value="";
        navigate(-1);

    }
    return(
        <div >
             <label>과목</label>
                 <input
                 type="text"
                 ref={subject}
                 />
                 <label>내용</label>
                 <input
                 type="text"
                 ref={body}
                 />
                 <label>공부시간</label>
                 <input
                 type="text"
                 ref={time}
                 />
                 <button onClick={addTIL}>추가하기</button>
        </div>
       
    )
}

export default Write;
