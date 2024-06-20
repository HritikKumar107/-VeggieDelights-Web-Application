import { Link, useNavigate } from "react-router-dom"
import "./FlipLogin.css";
import { useState } from "react"
import { auth, googleProvider, db } from "../Firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {IoEyeOffSharp } from "react-icons/io5"; 
import {IoIosEye } from "react-icons/io";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import Header from "../layout/Header";

export default function FlipLogin(){
    const nav = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("") 
    const [showPassword, setShowPassword] = useState(false);
    const [taskcompletionStatus] = useState('Pending')
    const [isLogin, setIsLogin] = useState(false)

    const handleform = async (e) =>{
        e.preventDefault()
        console.log(email)
        console.log(password)
      
        await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) =>{
        const user = userCredential.user;
        alert("Login Successful")
        nav("/home")
        console.log(user);
      })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          alert("Error" + errorMessage)
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    
      const saveData = async (e) => {
        try {
          await addDoc (collection(db, 'Register'),{
            email : e.email,
            password : e.password,
            taskcompletionStatus : e.taskcompletionStatus,
            created : Timestamp.now()
          })
          alert("Submitted")
        } catch(err) {
          alert(err)
        }
      }
    
      await createUserWithEmailAndPassword (auth, email, password)
        .then ((userCredentail) => {
          const user = userCredentail.user;
          console.log(user);
          let userdata = {
            email : email,
            password : password,
            taskcompletionStatus : taskcompletionStatus
          }
    
        saveData (userdata)
        })
        .catch ((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          alert("Error" + errorMessage)
        });
      }

    const signInWithGoogle = async () => {
        try{
          await signInWithPopup(auth, googleProvider);
        } catch(err){
          console.log(err);
        }
      };

    const handlePasswordChange = (data) => {
        setPassword(data.target.value)
    };

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
      };


    return(
        <>
        <Header/>
        <form onSubmit={handleform} className="pt-3">
        <div className="section1 mt-5 flipform">
            <div className="container">
                <div className="row full_height1 justify-content-center">
                    <div className="col-12 text-center align-self-center py-5">
                        <div className="section1 pb-5 pt-5 pt-sm-2 text-center">
                            <h6 className="mb-0 pb-3 form_heading1"><span className="spoon">Sign Up </span><span className="spoon">Login</span></h6>
                            <input className="checkbox1" type="checkbox" id="reg-log" name="reg-log"/>
                            <label htmlFor="reg-log"></label>
                                <div className="card_3d_wrap1 mx-auto">
                                    <div className="card_3d_wrapper1">
                                        <div className="card_front1">
                                            <div className="center_wrap1">
                                                <div className="section1 text-center ">
                                                    <h4 className="pt-4 pb-3 mt-4 mb-3 heading1">Sign Up</h4>
                                                    <div className="form_group1">
                                                        <input type="text" name="logname" className="form_style1" placeholder="Your Full Name" id="logname" autoComplete="off"/>
                                                        <i className="input_icon1 uil uil-user"></i>
                                                    </div>	
                                                    <div className="form_group1 mt-2">
                                                        <input type="email" onChange={(data) => { setEmail(data.target.value) }} name="logemail" className="form_style1" placeholder="Your Email" id="form3Example3c" autoComplete="off"/>
                                                        <i className="input_icon1 uil uil-at"></i>
                                                    </div>	
                                                    <div className="form_group1 mt-2 showpass1">
                                                        <input type={showPassword ? 'text' : 'password'} onChange={(data) => { setPassword(data.target.value) }} id="form3Example3c" name="logpass" className="form_style1 showpass2" placeholder="Your Password" autoComplete="off"/>
                                                        <span onClick={handleTogglePassword} className="showpass3">
                                                        {showPassword ?  <IoIosEye size={'26px'}/> : <IoEyeOffSharp size={'25px'}/>}
                                                        </span>
                                                        <i className="input_icon1 uil uil-lock-alt"></i>
                                                    </div>
                                                    <button onClick={handleSubmit} className="btn1 mt-4">submit</button>
                                                    <div className="mb-5 mt-2">
                                                    <Link className="mx-auto forget1 link1" onClick={signInWithGoogle}> or Log In with <i style={{'fontSize':'24px','paddingTop':'5px'}} className='fab'>&#xf0d5;</i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card_back1">
                                            <div className="center_wrap1">
                                                <div className="section1 text-center">
                                                    <h4 className="mb-4 pb-3 heading1">Log In</h4>
                                                    <div className="form_group1">
                                                        <input type="email" onChange={(data) => { setEmail(data.target.value) }} id="form3Example3c" className="form_style1" placeholder="Your Email" autoComplete="off"/>
                                                        <i className="input_icon1 uil uil-at"></i>
                                                    </div>	
                                                    <div className="form_group1 mt-2 showpass1">
                                                        <input type={showPassword ? 'text' : 'password'} onChange={(data) => { setPassword(data.target.value) }} className="showpass2 form_style1" name="logpass" placeholder="Your Password" id="form3Example3c" autoComplete="off"/>
                                                        <span onClick={handleTogglePassword} className="showpass3">
                                                        {showPassword ?  <IoIosEye size={'26px'}/> : <IoEyeOffSharp size={'25px'}/>}
                                                        </span>
                                                        <i className="input_icon1 uil uil-lock-alt"></i>
                                                    </div>
                                                    <button type="submit" className="btn1 mt-4">submit</button>
                                                    <p className="mb-0 mt-4 mx-auto forget1"><a href="/forget" className="link1">Forgot your password?</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
	    </div>
        </form>
        </>
    )
}