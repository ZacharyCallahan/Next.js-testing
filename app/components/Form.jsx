"use client";
import { useRef } from "react";
import axios from "axios";

const Form = () => {
    const nameRef = useRef(null);
    const ageRef = useRef(null);

    const submitHandler = async (event) => {
        event.preventDefault();
        const data = {
            name: nameRef.current ? nameRef.current.value : "",
            age: ageRef.current ? ageRef.current.value : "",
        };
        axios
            .post("/api/hello", data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error.response);
            }
        );
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" ref={nameRef} />
            <label htmlFor="age">Age</label>
            <input type="text" name="age" id="age" ref={ageRef} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
