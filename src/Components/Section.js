import '../App.css';
import './Section.css';
import { Fragment, useEffect, useState } from 'react';
import TodoBox from './TodoBox';

const Section = ({todos, editID, setEditID}) => {
    console.log(todos)

    return (
        <>
            <div className='wrap-2'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-3'>
                            <ul className='ul'>
                                <li><span className='circle'></span><a href="">work</a></li>
                                <li><span className='circle1'></span><a href="">study</a></li>
                                <li><span className='circle2'></span><a href="">entertainment</a></li>
                                <li><span className='circle3'></span><a href="">family</a></li>
                            </ul>
                            <div className='hide'>
                                <input type='checkbox' value='' /><p>Hide the done task</p>
                            </div>
                        </div>

                        <div className='col-9'>
                            <div className='row'>

                                {
                                    todos.map((data, index) => <Fragment key={index}>
                                        <div className='col-6'>
                                            <TodoBox todobody={data.todolist} todotitle={data.title} editID={editID} setEditID={setEditID} id={index}/>
                                        </div>

                                    </Fragment>)
                                }

                                {/*                                 
                                <div className='col-6'>
                                <TodoBox todobody={"Test"} todotitle={"asdfsa iosaohfasj jb sdf hamf sga sajhdfg askgdfkj"}/>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Section;