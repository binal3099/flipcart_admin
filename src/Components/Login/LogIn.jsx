import React, { useState } from 'react'
// import { Button, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// import { Loginasync } from '../../Services/Action/Authntication'
import { NavLink, useNavigate } from 'react-router-dom'
import '../Login/Login.css';
import { Loginasync, google_lognin } from '../../Services/Action/ProductAction';


function LogIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {login_msg} = useSelector(state => state);

    const [InputField, setInputFied] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const name = e.target.name;
        console.log(name);
        const value = e.target.value;

        setInputFied({ ...InputField, [name]: value })
    }

    const handleclick = ()=>{
        if(InputField.email == '' && InputField.password ==  ''){
            alert("Fill the form");
        }
        else{
            dispatch(Loginasync(InputField));
            alert(`${login_msg}`)
            navigate('/');

        }
    }

    const handlegoogle_login = () =>{
        dispatch(google_lognin());
    }

    return (
        <>
            {/* <Container> */}
            {/* <Row> */}
            <div className="box-form">
                <div className="left">
                    <div className="overlay">
                        <h1>Hello User</h1>
                        <span>
                            <p>login with social media</p>
                            <a onClick={handlegoogle_login} style={{cursor:"pointer"}}>Login with Google</a>
                        </span>
                    </div>
                </div>


                <div className="right">
                    <h5>Login</h5>
                   
                    <div className="inputs">
                        <input type="text" placeholder="email" name="email" value={InputField.email} onChange={handleChange}/>
                        <br />
                        <input type="password" placeholder="password" name="password" value={InputField.password} onChange={handleChange}/>
                    </div>

                    <br /><br />

                    <div className="remember-me--forget-password">
                        {/* <!-- Angular --> */}
                        <p>forget password?</p>
                    </div>

                    <br />
                    <button onClick={handleclick}>Login</button>
                    <br />
                    <p>Don't have an account? <NavLink to ='/signup'>Creat Your Account</NavLink></p>
                </div>

            </div>
            {/* </Row> */}
            {/* </Container>  */}
        </>
    )
}


export default LogIn