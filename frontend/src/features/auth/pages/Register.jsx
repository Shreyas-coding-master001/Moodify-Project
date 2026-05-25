import React from 'react';
import { useState } from 'react';
import "../styles/Register.scss";
import authHooks from '../hooks/authHooks';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        username: "",
        role: "user",
        gender: ""
    })

    const { registerUser, data, login, loading } = authHooks();

    function handleSubmit(e) {
        e.preventDefault();
        const registered = registerUser(formData);
        if(registered) navigate("home");
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
                <h1>Register</h1>

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
                    <input 
                        type="text" 
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <select 
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>

                    <button type='submit' 
                    disabled={loading}
                    >{loading? "Loading..." : "Register"}</button>
                </form>

                <p>Already Register? <a href="/login">Login</a></p>
            </div>
        </div>
    </div>
    )
}

export default Register
