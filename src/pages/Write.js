import React, { useRef } from "react";
import {useDispatch} from "react-redux";
import { create } from "../redux/modules/til";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const Write = () => {
    const title_ref = useRef(null);
    const content_ref = useRef(null);
    const time_ref = useRef(null);
    // const dispatch = useDispatch();

    const navigate = useNavigate();

    const addTIL = async () => {
        const til_data = {
            title: title_ref.current.value,
            content: content_ref.current.value,
            time: time_ref.current.value,
        };
        // dispatch(create({til_data}));  
        axios.post("http://localhost:5001/til_list", til_data);
        title_ref.current.value = "";
        content_ref.current.value = "";
        time_ref.current.value = "";
        navigate(-1);

    }
    return (
        <div
            style={{
                margin: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}>
            <div>
                <label>과목</label>
                <input
                    type="text"
                    ref={title_ref}
                />
            </div>
            <div>
                <label>내용</label>
                <input
                    type="text"
                    ref={content_ref}
                />
            </div>
            <div>
                <label>공부시간</label>
                <input
                    type="text"
                    ref={time_ref}
                />
            </div>

            <button onClick={addTIL}>추가하기</button>
        </div>

    )
}

export default Write;
