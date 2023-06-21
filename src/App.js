import React from 'react';
import Nav from "./Components/Nav";
import Section from "./Components/Section";
import './App.css';
// import { useState } from "react";

const App=()=>{
    
    // const [todos, setTodos] = useState([]);
    // console.log(todos,"todos")
    
    return(
        <>
            {/* <Nav setTodos={setTodos}/>
            <Section todos={todos}/> */}

            <Nav />
            <Section />
        </>
    );
}
export default App;