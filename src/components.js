import React from "react";

export const TextArea = ({text})=> {
    return (
        <div style={{width: "50vw", minHeight: "20vh", border: "1px solid #888"}}>
            <pre>{text}</pre>
        </div>
    );
}

export const Input = ({input_ref}) => {
    return (
        <input ref={    input_ref}/>
    );
}

export const Button = ({input_ref, setText}) => {
    return (
        <button onClick={()=> {
            setText(input_ref);
        }}>완성</button>
    );
}