import Nav from "./Components/Nav";
import Section from "./Components/Section";
import './App.css';
import { useState } from "react";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [editID, setEditID] = useState(-1);                   //for Array
    const [modal, setModal] = useState(false);
    const [data, setData] = useState({ title: '', todolist: '' });
    
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

    console.log(editID, " current todos")

    console.log(data, 'kdlsfjod===============');


    const hanldeEdit=()=>{
        
        console.log('dslkfjalkdsjf');
    }


    return (
        <>
            <Nav data={data} hanldeEdit={hanldeEdit} setData={setData} setTodos={setTodos} editID={editID} setEditID={setEditID} currentTodo={todos[editID]} modal={modal} setModal={setModal} toggleModal={toggleModal} />
            <Section todos={todos} editID={editID} setEditID={toggleModal} />
        </>
    );
}
export default App;