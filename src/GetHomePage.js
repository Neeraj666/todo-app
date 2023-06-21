import { Link } from 'react-router-dom';
import './App.css';
import Style from './Landing_HomePage.module.css';

const GetHomePage=()=>{

    return(
        <>
            <div className={Style.section}>
                <div className={Style.container}>
                    <h1 className={Style.h1}><span className={Style.t}>t</span><span className={Style.to}>o</span><span className={Style.d}>d</span><span className={Style.o}>o</span></h1>
                    <p className={Style.para}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quod fuga veniam quos officia voluptatibus quia rerum sequi nam! Eaque.
                    </p>
                    <Link to='/App' className={Style.Get_Start}>Get started</Link>
                </div> 
            </div>
        </>
    );
}
export default GetHomePage;