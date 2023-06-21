import '../App.css';
import './Nav.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Action';
import { editTodo } from '../Action';


// import { addTodo, editTodo } from '../Action';

const Nav = () => {
    const [modal, setModal] = useState(false);
    const [data, setData] = useState({ title: '', todolist: '' });
    const [editID, setEditID] = useState(-1);   //edit

    const toggleModal = () => {       //modal (open close)
        setModal(!modal);
    }

    if (modal) {                      //modal (open, close)
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const dispatch = useDispatch();    //redux

    const hanldeAdd = () => {
        const newTodo = {
            title: data.title,
            todolist: data.todolist,
          };

        // dispatch(addTodo(newTodo));

        if (editID === -1) {
            dispatch(addTodo(newTodo));
        } else {
            dispatch(editTodo(editID, newTodo));
            setEditID(-1);
        }
    
        setModal(false); // Close the modal

        // setModal(!modal);                          //for close the box.
        setData({ title: '', todolist: '' });      //for clear the data
    }

    return (
        <>
            <div className='wrap-1' >
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1>todo</h1><span onClick={toggleModal} className='btn-modal'>+</span>
                        </div>
                    </div>
                </div>
            </div>

            {
                modal &&
                (
                    <div className="modal">
                        <div className="overlay"></div>
                        <div className="modal-content">

                            <div className='row'>
                                <div className='col-6'>
                                    <button className='close-modal' onClick={toggleModal}>Cancel</button>
                                </div>
                                <div className='col-6'>
                                    <button className='add-modal' onClick={hanldeAdd}>Add</button>
                                </div>
                                {/* <div className='col-6'>
                                    {editID === -1 ? <button className='add-modal' onClick={hanldeAdd}>Add</button> :
                                        <button className='add-modal' onClick={()=>hanldeEdit()}>Edit</button> }
                                </div> */}

                                <div className='col-12'>
                                    <div className='title-box'>
                                        <h2>Title</h2>
                                        <input type='text' placeholder='add a title ...' value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
                                    </div>
                                </div>

                                <div className='col-12'>
                                    <div className='description-box'>
                                        <h2>Description</h2>
                                        <textarea name="" id="" cols="30" rows="5" placeholder='add a description ...' value={data.todolist} onChange={(e) => setData({ ...data, todolist: e.target.value })}></textarea>
                                    </div>
                                </div>

                                <div className='col-12'>
                                    <div className='tag-box'>
                                        <h2>Tags</h2>
                                        <ul>
                                            <li><span className='circle'></span><a href=''>work</a></li>
                                            <li><span className='circle1'></span><a>study</a></li>
                                            <li><span className='circle2'></span><a>entertainment</a></li>
                                            <li><span className='circle3'></span><a>family</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                )

            }
        </>
    );
}
export default Nav;