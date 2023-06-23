import Nav from "./Components/Nav";
import Section from "./Components/Section";
import './App.css';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteTodo } from "./Action";
import { editTodo } from "./Action";

const App = () => {
    const [, setTodos] = useState([]);               //main

    const [editID, setEditID] = useState(-1);        //for Array
    const [modal, setModal] = useState(false);
    const [data, setData] = useState({ title: '', todolist: '' });
    const todos = useSelector(state=>state);
    const dispatch = useDispatch();  


//---------------------- Box toggleModal -----------------------
    const toggleModal = (prop) => {
        console.clear()
        setModal(!modal)

        if(prop==="open"){
            setData({title:"", todolist:""})
            setEditID(-1)
        }

        if (prop >-1) {
            setEditID(prop);
            console.log(todos[prop])
            const  title = todos[prop]?.title
            const  todolist = todos[prop]?.todolist
            console.log({title, todolist},"original")
            setData({title, todolist})
        }
    }

    // console.log(editID, " current todos")


//--------------------------- Edit -----------------------------
    const hanldeEdit=()=>{
        
        if (editID === -1) return;

        const updatedTodo = {
        title: data.title,
        todolist: data.todolist,
        id: editID,
        };

        dispatch(editTodo(updatedTodo));

        setData({ title: "", todolist: "" });
        setEditID(-1);
        setModal(!modal);
    }
    
//--------------------- Delete --------------(working)-----------------
const handleDelete = (id) => {
    dispatch(deleteTodo(id));
};


    return (
        <>
            <Nav
             data={data}
             hanldeEdit={hanldeEdit}
             setData={setData}
             setTodos={setTodos} 
             editID={editID}
             setEditID={setEditID}
             currentTodo={todos[editID]} 
             modal={modal}
             setModal={setModal}
             toggleModal={toggleModal}
             />

            <Section 
            todos={todos} 
            editID={editID} 
            setEditID={toggleModal}
            setTodos={setTodos} 
            handleDelete={handleDelete}
            />
        </>
    );
}
export default App;