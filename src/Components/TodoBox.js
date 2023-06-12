import React, { useState } from 'react'
import './Section.css';

function TodoBox({ todobody, currentKey, todotitle, editID, setEditID, delId, id, /* toggleMod, mod, setMod */ todos, setTodos,handleDelete}) {

    const [mod, setMod] = useState(false);

    const toggleMod = () => {
        setMod(mod=>!mod);
    }

    console.log(id, 'dlksjjfklds');
   

    const handleClick = () => {
        setEditID(id);
        setMod(!mod);
    };

    const handleCheck=()=>{
        const currentIsDone = [...todos];
        currentIsDone[id] = {
            ...currentIsDone[id], isDone : !currentIsDone[id].isDone,
        }
        setTodos(currentIsDone);
    }

   

    return (
        <>
            <div className='box'>
                <div className='task'>
                    <h2>{todotitle}</h2>
                    <p onClick={toggleMod}><a>...</a></p>

                    {
                        mod &&
                        (
                            // <div className='mod' onClick={toggleMod}>
                            <div className='mod-content'>
                                <ul>
                                    <li onClick={handleClick}><a href='#'>Edit ...</a></li>
                                    <li onClick={()=>handleDelete(delId)}><a href='#'>Delete</a></li>
                                </ul>
                            </div>
                            // </div>
                        )
                    }

                </div>
                <p className='para'>
                    {todobody}
                </p>
                <div className='section'>
                    <p>
                        <span className='circle1'></span>
                        <span className='circle2'></span>
                        <span className='circle'></span>
                    </p>
                    <div className='indicator'>
                        <input className='check' type='checkbox' value='' onChange={handleCheck} />
                        <span className='done'>Done</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TodoBox;