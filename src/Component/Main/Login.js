import React, {useState} from "react";
import { Container, Form, Button } from "react-bootstrap";
import {Link, useNavigate} from 'react-router-dom';

function Login(){
    const siteLogo = "PickBazar.webp";
    const [details, setDetails] = useState({email:"", password:""});

    const history = useNavigate();

    const loginForm = e =>{
        e.preventDefault();


        const {email,password} = details;
        const getuserArr =  localStorage.getItem('userSignup');
        console.log(getuserArr)

        if(email === ""){
            alert("email is empty")
        }else if(!email.includes("@")){
            alert("pls enter valid email address")
        }else if(password === ""){
            alert("password is empty")
        }else if(password.length < 6){
            alert("Password length grater five")
        }else{
            if(getuserArr && getuserArr.length){
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el,k)=>{
                    return el.email === email && el.password === password;
                })
                console.log(userlogin);

                if(userlogin.length === 0){
                    alert("Your details is not valid")
                }else{
                    console.log("Login successfully");

                    localStorage.setItem("user_login", JSON.stringify(userlogin));

                    history("/");
                }
            }
        }

    }
    return(
        <div className="login-form-main">
            <Container>
                <div className="login-form">
                    <h2>
                        <a href="/" className="d-block">
                            <img src={siteLogo} alt="site logo" className="img-fluid" />
                        </a>
                    </h2>
                    <p className="subheading">Log In</p>
                    <Form>
                        <Form.Group className="mb-3" controlid="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlid="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"  name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                        </Form.Group>
                        <Button type="submit" variant="primary" onClick={loginForm} className="w-100 py-2 mt-3">Login</Button>
                    </Form>
                    <div className="saprator-box my-5 position-relative">
                        <hr/>
                        <span>Or</span>
                    </div>
                    <div className="singup_link text-center">
                        Don't have any account? <Link className="text-primary" to="/register">Sign Up</Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Login;