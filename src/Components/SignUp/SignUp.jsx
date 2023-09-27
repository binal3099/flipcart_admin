import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Signupasync } from '../../Services/Action/ProductAction';

function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { signup_msg } = useSelector(state => state);

    const [InputField, setInputFied] = useState({
        email: '',
        password: '',
        cpassword: ''
    })

    const handleChange = (e) => {
        const name = e.target.name;
        console.log(name);
        const value = e.target.value;

        setInputFied({ ...InputField, [name]: value })
    }

    const handleclick = () => {
        if (InputField.password == InputField.cpassword) {
            dispatch(Signupasync(InputField));
            alert(`${signup_msg}`);
            navigate('/login');

        }
        else {
            alert("password and confirm password not match");
        }
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
                            <p>signup with social media</p>
                            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i> signup with Google</a>
                        </span>
                    </div>
                </div>


                <div className="right">
                    <h5>Sign Up</h5>

                    <div className="inputs">
                        <input type="text" placeholder="email" name="email" value={InputField.email} onChange={handleChange} />
                        <br />
                        <input type="password" placeholder="password" name="password" value={InputField.password} onChange={handleChange} />
                        <input type="password" placeholder="confirm password" name="cpassword" value={InputField.cpassword} onChange={handleChange} />
                    </div>

                    <br /><br />
                    <button onClick={handleclick}>Signup</button>
                    <br />
                    <p>have an account? <a href="#">login</a></p>
                </div>

            </div>
            {/* </Row> */}
            {/* </Container>  */}
        </>
    )
}

export default SignUp;