import React, { useState } from 'react';
import { Container, Form, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

function Register(){
    const siteLogo = "PickBazar.webp";

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);

    const getData = (e) =>{
        const {value,name} = e.target;
        setInpval(()=>{
            return{
                ...inpval,
                [name]:value
            }
        })
    }

    const addData = (e) =>{
        e.preventDefault();
        const {name,email,password} = inpval;

        if(name === ""){
            alert("Name field is requerd*")
        }else if(email === ""){
            alert("email is requerd")
        }else if(!email.includes("@")){
            alert("Please enter valid email")
        }else if(password === ""){
            alert("Password is requerd");
        }else{
            console.log("Signup Success");
            localStorage.setItem("userSignup", JSON.stringify([...data, inpval]))
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
                    <p className="subheading">Sign Up</p>
                    <Form>
                        <Form.Group className="mb-3" controlid="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" id="name" onChange={getData}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlid="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" id="email" onChange={getData}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlid="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"  name="password" id="password" onChange={getData}/>
                        </Form.Group>
                        <Button type="submit" variant="primary" onClick={addData} className="w-100 py-2 mt-3">Login</Button>
                    </Form>
                    <div className="saprator-box my-5 position-relative">
                        <hr/>
                        <span>Or</span>
                    </div>
                    <div className="singup_link text-center">
                        Already have an account? <Link className="text-primary" to="/login">Login</Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Register;