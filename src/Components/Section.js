import '../App.css';
import './Section.css';
import { Fragment, useEffect, useState } from 'react';
import TodoBox from './TodoBox';

const Section = ({ todos, editID, setEditID, setTodos, handleDelete }) => {
    // console.log(todos, 'todos');
    const [hideCompleted, setHideCompleted] = useState(false);

    const handleCheckboxChange = () => {
        setHideCompleted(prevCompleted => !prevCompleted);
    };

    // console.log(hideCompleted,'hide----------------------');

    return (
        <>
            <div className='wrap-2'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-3 col-lm-12'>
                            <ul className='ul'>
                                <li><span className='circle com1'></span><a href="">work</a></li>
                                <li><span className='circle1 com2'></span><a href="">study</a></li>
                                <li><span className='circle2 com3'></span><a href="">entertainment</a></li>
                                <li><span className='circle3 com4'></span><a href="">family</a></li>
                            </ul>
                            <div className='hide'>
                                <input type='checkbox' value='' checked={hideCompleted} onChange={handleCheckboxChange} /><p>Show the done task</p>
                            </div>
                        </div>

                        <div className='col-9 col-lm-12'>
                            <div className='row'>

                                {
                                    todos.map((data, index) => (
                                        <Fragment key={index}>
                                            {hideCompleted && !data.completed ? <></> :

                                                <div className='col-6 col-lm-12' >
                                                    <TodoBox
                                                        currentKey={index}
                                                        todobody={data.todolist}s
                                                        todotitle={data.title}
                                                        editID={editID}
                                                        setEditID={setEditID}
                                                        id={index}
                                                        todos={todos}
                                                        setTodos={setTodos}
                                                        handleDelete={handleDelete}
                                                        hideCompleted={hideCompleted}
                                                        setHideCompleted={setHideCompleted}
                                                    />
                                                </div>

                                            }
                                        </Fragment>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Section;