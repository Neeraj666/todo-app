import React, { useState } from 'react';
import Nav from "./Components/Nav";
import Section from "./Components/Section";
import './App.css';
// import { useState } from "react";

import { useDispatch } from 'react-redux';   //edit

const App=()=>{
    const [editID, setEditID] = useState(-1);
    
    // const [todos, setTodos] = useState([]);
    // console.log(todos,"todos")

    const dispatch = useDispatch();   //edit


    return(
        <>
            {/* <Nav setTodos={setTodos}/>
            <Section todos={todos}/> */}

            <Nav editID={editID} setEditID={setEditID} />
            <Section />
        </>
    );
}
export default App;