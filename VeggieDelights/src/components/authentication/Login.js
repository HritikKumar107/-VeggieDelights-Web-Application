import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, db, googleProvider } from "../Firebase";
import CustomInput from "../EyePassword";
import Header from "../layout/Header";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { Timestamp, addDoc, collection, onSnapshot, query, where } from "firebase/firestore";
export default function Login() {
  const nav = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState("")
  const [isLogin, setIsLogin] = useState(false)
  const [load, setLoad] = useState(false)
  const override = {
    "display": "block",
    "margin": "0 auto",
    "position": "absolute",
    "top": "50%",
    "bottom": "50%",
    "zIndex": "1",
  }
  const handleform = async (e) => {
    e.preventDefault()
    setLoad(true)
    await signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        sessionStorage.setItem("userId", user.uid)
        sessionStorage.setItem("userEmail", user.email)
        sessionStorage.setItem("cart", JSON.stringify([]))
        // console.log(user);
        getSingleTaskData()
        setTimeout(() => {
          setLoad(false)
          toast.success("Login Successful")
        }, 700)
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
        toast.error(errorMessage)
        setTimeout(() => {
          setLoad(false)
          toast.success("Something went wrong!!")
        }, 700)
      })
  }
  const getSingleTaskData = async () => {
    const que = query(collection(db, 'users'), where("userid", "==", sessionStorage.getItem("userId")))
    onSnapshot(que, (querySnapshot) => {
      if (querySnapshot.docs[0]?.data()?.userType == "Admin") {
        nav("/user/dashboard")
      }
      else if (querySnapshot.docs[0]?.data()?.userType == "Vendor") {
        nav("/user/hawker_dash")
      }
      else {
        nav("/")
      }
    })

  }

  const signInWithGoogle = async () => {
    setLoad(true)
    try {
      await signInWithPopup(auth, googleProvider).then((res) => {
        const users = res.user
        sessionStorage.setItem("userId", users.uid)
        sessionStorage.setItem("userEmail", users.email)
        sessionStorage.setItem("cart", JSON.stringify([]))
        addUser(users.uid, users.email)
        nav("/")
      }).catch((err) => {
        setTimeout(() => {
          setLoad(false)
        }, 700)
        console.log(err)
        toast.error("Something went wrong")
      });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong")
      setTimeout(() => {
        setLoad(false)
      }, 700)
    }
  };
  const addUser = async (uid, email1) => {
    console.log(uid)
    try {
      await addDoc(collection(db, 'users'), {
        userid: uid,
        status: "Active",
        email: email1,
        userType: "User",
        created: Timestamp.now()
      })
      toast.success("User Created")
    } catch (err) {
      setTimeout(() => {
        setLoad(false)
      }, 700)
      toast.error("Something went wrong, Try again later!!")
    }
  }
  const handlePasswordChange = (data) => {
    setPassword(data.target.value)
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <ClipLoader loading={load} cssOverride={override} size={120} />
      </div>
      <div className={load ? "disabled-screen-full" : ""}>
        <Header active={'login'} />
        <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
          <div className="container">
            <h1 id="line1" className="display-3 mb-3 animated slideInDown" style={{ 'textShadow': '5px 7px 5px rgb(190, 190, 190)' }}>Login</h1>
            <nav id="line5" aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><Link className="text-body" to={'/home'}>Home</Link></li>

                <div className="breadcrumb-item nav-item dropdown">
                  <a className="text-body dropdown-toggle" data-bs-toggle="dropdown" href="#">Pages</a>
                  <div className="dropdown-menu m-0">
                    <Link to={'/blog_grid'} className="dropdown-item">Blog Grid</Link>
                    <Link to={'/features'} className="dropdown-item">Our Features</Link>
                    <Link to={'/testimonial'} className="dropdown-item">Testimonial</Link>
                    <Link to={'/error'} className="dropdown-item">404 Page</Link>
                  </div>
                </div>
                <li className="breadcrumb-item text-dark active" aria-current="page">Login</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="container-xxl">
          <div className="container">
            <div className="row g-5 justify-content-center">
              <div className="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                <div className="card text-black shadow" style={{ 'borderRadius': '25px' }}>
                  <div className="card-body ">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p id="line3" className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ 'textShadow': '5px 7px 3px rgb(198, 190, 190)' }}>Login</p>
                        <form id="line11" className="mx-1 mx-md-4" onSubmit={handleform}>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="email" id="form3Example3c" className="form-control" required onChange={(data) => { setEmail(data.target.value) }} placeholder="Enter your email" />
                              <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              {/* <input type="password" id="form3Example4c" className="form-control" required onChange={(data) => { setPassword(data.target.value) }} /> */}
                              <CustomInput value={password} onChange={handlePasswordChange} />
                              <label className="form-label" htmlFor="form3Example4c">Password</label>
                            </div>
                          </div>

                          <div className="form-check d-flex mb-4">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                            <label className="form-check-label" htmlFor="form2Example3">
                              I agree all statements in <Link to={'/about'}>Terms of service</Link>
                            </label>

                          </div>

                          <div className="d-flex justify-content-center mb-3 mb-lg-4 ms-4">
                            <button type="submit" className="btn btn-primary btn-lg rounded-pill me-4">Login</button>
                            <button className="btn btn-primary btn-lg rounded-pill" onClick={signInWithGoogle}> Signin with google</button>
                          </div>
                        </form>

                        <div id="line11" className="form-group mb-3" style={{ 'textAlign': 'right' }} >
                          <button type="button" className="btn btn-link" ><Link to={"/forget"}>Forget Password</Link></button>
                        </div>

                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          className="img-fluid" alt="Sample image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}