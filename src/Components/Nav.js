import '../App.css';
import './Nav.css';

const Nav = ({ setTodos, editID, setEditID, currentTodo, modal, setModal, toggleModal, data, setData, hanldeEdit }) => {
    if (modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

   

    const hanldeAdd = () => {
        setTodos(todo => {
            const rcds = [...todo];
            rcds.push(data);
          
            const isDone = false;
            return rcds;
        });
        
        setModal(!modal);                             // Close the modal box.
        setData({ title: '', todolist: '' });         // Clear the data.
    };

  

    return (
        <>
            <div className="wrap-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>todo</h1>
                            <span onClick={() => toggleModal("open")} className="btn-modal">+</span>
                        </div>
                    </div>
                </div>
            </div>

            {modal && (
                <div className="modal">
                    <div onClick={() => toggleModal()} className="overlay"></div>
                    <div className="modal-content">
                        <div className="row">
                            <div className="col-6">
                                <button className="close-modal" onClick={() => toggleModal()}>
                                    Cancel
                                </button>
                            </div>

                            <div className="col-6">
                                {editID === -1 ? (
                                    <button className="add-modal" onClick={hanldeAdd}>
                                        Add
                                    </button>
                                ) : (
                                    <button className="add-modal" onClick={() => hanldeEdit()}>
                                        Edit
                                    </button>
                                )}
                            </div>

                            <div className="col-12">
                                <div className="title-box">
                                    <h2>Title</h2>
                                    <input
                                        type="text"
                                        placeholder="add a title ..."
                                        value={data.title}
                                        onChange={e => setData({ ...data, title: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="description-box">
                                    <h2>Description</h2>
                                    <textarea
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="5"
                                        placeholder="add a description ..."
                                        value={data.todolist}
                                        onChange={e => setData({ ...data, todolist: e.target.value })}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="tag-box">
                                    <h2>Tags</h2>
                                    <ul>
                                        <li>
                                            <span className="circle"></span>
                                            <a href="">work</a>
                                        </li>
                                        <li>
                                            <span className="circle1"></span>
                                            <a>study</a>
                                        </li>
                                        <li>
                                            <span className="circle2"></span>
                                            <a>entertainment</a>
                                        </li>
                                        <li>
                                            <span className="circle3"></span>
                                            <a>family</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Nav;
