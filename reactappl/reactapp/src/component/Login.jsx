import userEvent from '@testing-library/user-event';
import React,{useRef} from 'react'
import axios from 'axios';
import  { useNavigate } from 'react-router-dom'
import "./Login.css"


const Login = ()=>{

    const email = useRef("");


    const password = useRef("");
    const role = useRef("");
    const navigate = useNavigate();

    const handleLogin = ()=>{
        const emailV = email.current.value;
        const passwordV = password.current.value;
        const roleV = role.current.value;
        if(roleV==""){
            alert("please choose admin/user")
            return;
        }
        if(emailV==""){
            alert("please provide email")
            return;
        }
        if(passwordV==""){
            alert("please provide password")
            return;
        }
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailV)) {
            const obj = {
                email:emailV,
                password:passwordV
            }
            axios.post("http://localhost:8081/user/login",obj)
            .then((resp)=>{
                if(resp.data){
                    if(roleV==="USER"){
                        localStorage.setItem("userEmail",emailV);
                        alert("User login success");
                        navigate('/viewacademy');
                    }else{

                        alert("Admin login success");
                        navigate('/adminacademy');
                    }
                    
                }
                else{
                    alert("Invalid Credentials");
                }
            })
        }
        else{
            alert("email is not valid");
            return;
        }
    }

    return(
        <>
            <div class= "col-12 boxes">
                <div class="main col-6">
                    <img class="image" src="https://res.cloudinary.com/dxfulpw3q/image/upload/v1664625894/Pngtree_online_education_training_course_design_5331074_bfp0ud.png" alt="text"/>
                
                </div>
                
                <div  class="containers col-5 mt-5 ">
                    <img class="logo" src="https://res.cloudinary.com/dxfulpw3q/image/upload/v1663604568/Abucus_Acadamy_wyb89n.png" alt="logo"/>
                    <select class="form-select" id="user/admin" aria-label="Default select example" ref={role}>
                        <option value="" selected>Admin/User</option>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                    </select><br/>
                    <input type="text" id="email" ref={email} class="form-control" placeholder="Enter Email Address" aria-label="Username" aria-describedby="basic-addon1" /><br/>
                    <input type="password" id="password" ref={password} class="form-control" placeholder="Enter password" aria-label="Username" aria-describedby="basic-addon1" /><br/>
                    <button type="button" id="login_btn" class="btn buton text-center" onClick={handleLogin}>Login</button><br/>
                    New User/Admin? 
                    <a id="signup_btn" href="/signup">SignUp</a>
                    <a href="/">HomePage</a>
                </div>
            </div>

        </>
    )
}

export default Login;