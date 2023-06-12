import Nav from "./Components/Nav";
import Section from "./Components/Section";
import './App.css';
import { useState } from "react";

const App = () => {
    const [todos, setTodos] = useState([]);          //main

    const [editID, setEditID] = useState(-1);        //for Array
    const [modal, setModal] = useState(false);
    const [data, setData] = useState({ title: '', todolist: '' });


    // const[mod, setMod]=useState(false);   //Edit
    // const[showData , setShowData]=useState([]);

//---------------------- Box toggleModal -----------------------
    const toggleModal = (prop) => {
        console.clear()
        console.log(todos,"=alll todos==", prop)
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


//--------------------- Delete -------------------------------
    const handleDelete = (delId) => {
        const updatedTodos = todos.filter((todo) => todo.id !== delId);
        setTodos(updatedTodos);
      };


//--------------------------- Edit -----------------------------
    const hanldeEdit=()=>{
        
        if(editID === -1)   
        return;
        setTodos((p)=>{
            const copy = [...p];
            copy[editID] ={
                title : data.title,
                todolist : data.todolist,
                id : editID,
            }
            return copy;
        })
        setData('');                 // edit k bad data khali ho jaye.
        setEditID(-1);               //for reset map to -1
        setModal(!modal);            //for close the current modal(box)
    }





    return (
        <>
            <Nav data={data} hanldeEdit={hanldeEdit} setData={setData} setTodos={setTodos} editID={editID} setEditID={setEditID} currentTodo={todos[editID]} modal={modal} setModal={setModal} toggleModal={toggleModal} />

            <Section todos={todos} editID={editID} setEditID={toggleModal}   /*  toggleMod={toggleMod} mod={mod} setMod={setMod} */ setTodos={setTodos} handleDelete={handleDelete}/>
        </>
    );
}
export default App;