import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db, storage } from "../Firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import CustomInput from "../EyePassword"
import Header from "../layout/Header";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners"
export default function Register_f() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [contact, setContact] = useState()
  const [address, setAddress] = useState("")
  const [isLogin, setIsLogin] = useState(false)
  const [taskcompletionStatus] = useState('Pending')
  const [showPassword, setShowPassword] = useState("")
  const [image1, setImage1] = useState(null)
  const [file1, setFile1] = useState(null)
  const [imageUrl1, setImageUrl1] = useState(null)
  const [fileName1, setFileName1] = useState(null)
  const [load, setLoad] = useState(false)
  const override = {
    "display": "block",
    "margin": "0 auto",
    "position": "absolute",
    "top": "50%",
    "bottom": "50%",
    "zIndex": "1",
  }
  const nav = useNavigate()
  const handleform = async (e) => {
    e.preventDefault()
    setLoad(true)
    uploadFile()
  }
  const creatUser = async (e) => {
    const saveData = async (data) => {
      try {
        await addDoc(collection(db, 'users'), {
          name: data.name,
          email: data.email,
          contact: data.contact,
          address: data.address,
          userType: "User",
          image1: imageUrl1,
          fileName1: fileName1,
          userid: data.userid,
          created: Timestamp.now(),
        }).then(
          () => {
            setTimeout(() => {
              setLoad(false)
              toast.success('Registered successfully!!')
              nav("/")
            }, 700)
          }
        ).catch((err) => {
          console.log(err)
        })
      } catch (err) {
        setTimeout(() => {
          setLoad(false)
          toast.error("Something went wrong!!")
        }, 700)
      }
    }

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentail) => {
        const user = userCredentail.user;
        sessionStorage.setItem("userId", user.uid)
        sessionStorage.setItem("userEmail", user.email)
        sessionStorage.setItem("cart", JSON.stringify([]))
        console.log(user);
        let userdata = {
          userid: user.uid,
          name: name,
          email: email,
          contact: contact,
          address: address,
        }

        saveData(userdata)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("Error" + errorMessage)
      });
  }
  const handlePasswordChange = (data) => {
    setPassword(data.target.value)
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }
  const handleContactChange = (e) => {
    setContact(e.target.value)
  }
  const uploadFile = () => {
    if (!file1) {
      alert("Please upload an image first!");
    }


    const fileName1 = `${Date.now()}-${file1.name}`
    const storageRef1 = ref(storage, `/files/${fileName1}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask1 = uploadBytesResumable(storageRef1, file1);
    uploadTask1.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        // update progress
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask1.snapshot.ref).then((url) => {
          console.log("URL", url);
          setFileName1(fileName1)
          setImageUrl1(url)
        });
      }
    );
  };
  useEffect(() => {
    if (!!imageUrl1)
      creatUser()
  }, [imageUrl1])

  return (
    <>
      <div className="d-flex justify-content-center">
        <ClipLoader loading={load} cssOverride={override} size={120} />
      </div>
      <div className={load ? "disabled-screen-full" : ""}>
        <Header active={'register_f'} />
        <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
          <div className="container">
            <h1 id="line1" className="display-3 mb-3 animated slideInDown" style={{ 'textShadow': '5px 7px 3px rgb(198, 190, 190)' }}>Register</h1>
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

                <li className="breadcrumb-item text-dark active" aria-current="page">Register</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="container-xxl py-6">
          <div className="container">
            <div className="row g-5 justify-content-center">
              <div className="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.5s">


                <div className="card text-black shadow" style={{ 'borderRadius': '25px' }}>
                  <div className="card-body ">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p id="line3" className=" text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ 'textShadow': '5px 7px 3px rgb(198, 190, 190)' }}>Register</p>

                        <form id="line11" className="mx-1 mx-md-4" onSubmit={handleform}>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="text" className="form-control" required value={name} onChange={(e) => { setName(e.target.value) }} />
                              <label className="form-label" for="form3Example1c">Your Name</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="email" id="form3Example3c" className="form-control" required onChange={(data) => { setEmail(data.target.value) }} />
                              <label className="form-label" for="form3Example3c">Your Email</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              {/* <input type="password" id="form3Example4c" className="form-control" required onChange={(data) => { setPassword(data.target.value) }} /> */}
                              <CustomInput value={password} onChange={handlePasswordChange} />
                              <label className="form-label" for="form3Example4c">Password</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              {/* <input type="password" id="form3Example4c" className="form-control" required onChange={(data) => { setPassword(data.target.value) }} /> */}
                              <input type="number" className="form-control" required value={contact} onChange={handleContactChange} />
                              <label className="form-label" for="form3Example4c">Contact</label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-map-marker fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="file" className="form-control" required onChange={(e) => { setFile1(e.target.files[0]) }} />
                              <label className="form-label" for="form3Example4c">Profile Image</label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-map-marker fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              {/* <input type="password" id="form3Example4c" className="form-control" required onChange={(data) => { setPassword(data.target.value) }} /> */}
                              <input type="text" className="form-control" required value={address} onChange={handleAddressChange} />
                              <label className="form-label" for="form3Example4c">Address</label>
                            </div>
                          </div>

                          <div className="form-check d-flex justify-content-center mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                            <label className="form-check-label" for="form2Example3">
                              I agree all statements in <Link to={'/about'}>Terms of service</Link>
                            </label>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="submit" className="btn btn-primary btn-lg">Register</button>
                          </div>

                          <div className="form-check d-flex justify-content-center mb-5">
                            <label className="form-check-label" for="form2Example3">
                              Have already an account?<Link to={'/login'}> Login here</Link >
                            </label>
                          </div>

                        </form>

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



