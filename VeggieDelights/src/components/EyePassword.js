import React, { useState } from 'react';
import {IoEyeOffSharp } from "react-icons/io5"; 
import {IoIosEye } from "react-icons/io"; 
import './EyePassword.css'; // Create a separate CSS file to style the custom input component

const CustomInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password,setPassword] = useState("")

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  

  return (
    <div className="custom-input-container">
      <input className='form-control'
        type={showPassword ? 'text' : 'password'}
        value={props.value}
        required 
        onChange={props.onChange}
        placeholder='Enter your password'
      />
      {/* Toggle password visibility with eye icon */}
      <span onClick={handleTogglePassword}>
        {showPassword ?  <IoIosEye size={'26px'}/> : <IoEyeOffSharp size={'25px'}/>}
      </span>
    </div>
  );
};

export default CustomInput;