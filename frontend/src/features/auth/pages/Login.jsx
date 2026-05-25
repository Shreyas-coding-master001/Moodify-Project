import React from 'react';
import { useState } from 'react';
import "../styles/Login.scss";
import authHooks from '../hooks/authHooks';
import {  useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const naviagte = useNavigate();

    const { loginUser, loading } = authHooks();

    function handleSubmit(e) {
        e.preventDefault();
        const loggedin = loginUser(formData);
        naviagte("/home");
    }

    function handleChange(e) {
        const formDataCopy = {...formData};
        formDataCopy[e.target.name] = e.target.value;
        setFormData(formDataCopy);
    }

    return (
        <div className='center'>
            <div className="outer-div">
                <div className="inner-div">
                    <h1>Login</h1>

                    <form onSubmit={handleSubmit}>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="E-mail"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input 
                            type="password" 
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        
                        <button 
                        onClick={handleSubmit}
                        disabled= {loading}>
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>

                    <p>New user? <a href="/register">Register</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login;