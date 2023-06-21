import '../App.css';
import './Section.css';
// import { Fragment, useEffect, useState } from 'react';
import TodoBox from './TodoBox';
import { connect } from 'react-redux';

const Section = ({todos}) => {
    console.log(todos)

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
                                <input type='checkbox' value='' /><p>Hide the done task</p>
                            </div>
                        </div>

                        <div className='col-9 col-lm-12'>
                            <div className='row'>
                                {
                                    todos.map((data, index) => 
                                        <div className='col-6 col-lm-12' key={index}>
                                            <TodoBox todobody={data.todolist} 
                                            todotitle={data.title} 
                                            
                                            
                                            />
                                            
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
      todos: state,
    };
  };
  
export default connect(mapStateToProps)(Section);