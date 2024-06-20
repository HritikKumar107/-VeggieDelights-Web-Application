import { Link, useNavigate } from 'react-router-dom'
import { db, storage } from './Firebase'
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { toast } from "react-toastify"
import { useState, useEffect } from 'react'
import { ClipLoader } from "react-spinners";
import { collection, query, orderBy, onSnapshot, doc, deleteDoc, updateDoc, where } from 'firebase/firestore'
import Header from './layout/Header'
export default function UpdateProfile() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [contact, setContact] = useState()
  const [address, setAddress] = useState("")
  const [isLogin, setIsLogin] = useState(false)
  const [taskcompletionStatus] = useState('Pending')
  const [showPassword, setShowPassword] = useState("")
  const [imageUrl, setImageUrl] = useState(null)
  const [file, setFile] = useState()
  const [fileName, setFileName] = useState(null)
  const [prevFileName, setPrevFileName] = useState()
  const [image, setImage] = useState()
  const [load, setLoad] = useState(true)
  const [id, setId] = useState("")
  const [showImage, setShowImage] = useState("")
  const userid = sessionStorage.getItem("userId")
  const nav = useNavigate()
  const override = {
    "display": "block",
    "margin": "0 auto",
    "position": "absolute",
    "top": "50%",
    "bottom": "50%",
    "zIndex": "1",
  }
  useEffect(() => {
    if (userid != "" && userid != "null" && userid != null && userid != "undefined" && userid != undefined) {
      getSingleTaskData()
    }
  }, [userid])
  const getSingleTaskData = async () => {
    const que = query(collection(db, 'users'), where("userid", "==", userid))
    onSnapshot(que, (querySnapshot) => {
      setContact(querySnapshot.docs[0]?.data()?.contact)
      setName(querySnapshot.docs[0]?.data().name)
      setAddress(querySnapshot.docs[0]?.data().address)
      setImage(querySnapshot.docs[0]?.data().image1)
      setShowImage(querySnapshot.docs[0]?.data().image1)
      setPrevFileName(querySnapshot.docs[0]?.data().fileName)
      setFileName(querySnapshot.docs[0]?.data().file)
      setId(querySnapshot.docs[0]?.id)
    })
    setTimeout(() => {
      setLoad(false)
    }, 700)
  }
  const handleForm = async (e) => {
    e.preventDefault();
    setLoad(true)
    if (!!file)
      uploadFile()
    else updateData()
  }
  async function updateData() {
    console.log(id)
    const taskDocRef = doc(db, 'users', id)

    try {
      let data = {
        name: name,
        contact: contact,
        address: address,
        image1: image,
        taskcompletionStatus: taskcompletionStatus,
      }
      if (!!imageUrl) {
        data.image1 = imageUrl
        data.fileName = fileName
      }
      console.log(data)
      await updateDoc(taskDocRef, data)
      toast.success("Updated Successfully!!")
      setTimeout(() => {
        nav("/user/profile")
      }, 700)
    } catch (err) {
      setTimeout(() => {
        setLoad(false)
      }, 700)
      toast.error("Something went wrong!")
    }
  }
  useEffect(() => {
    if (!!imageUrl) {
      deletePreviousImage()
      updateData()
    }
  }, [imageUrl])
  function deletePreviousImage() {
    const fileRef = ref(storage, "files/" + prevFileName);
    deleteObject(fileRef).then(function () {
      console.log("Prev File Deleted")
    }).catch(function (error) {
      console.log("Error deleting previous image")
    });
  }
  const uploadFile = () => {
    if (!file) {
      alert("Please upload an image first!");
    }
    const fileName = `${Date.now()}-${file.name}`
    const storageRef = ref(storage, `/files/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
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
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          // console.log(url);
          setImageUrl(url)
          setFileName(fileName)
          setImage(url)
        });
      }
    );
  };
  const handlePasswordChange = (data) => {
    setPassword(data.target.value)
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }
  const handleContactChange = (e) => {
    setContact(e.target.value)
  }
  return (
    <>
      <div className="d-flex justify-content-center">
        <ClipLoader loading={load} cssOverride={override} size={120} />
      </div>
      <div className={load ? "disabled-screen-full" : ""}>
        <Header active={'profile'} />
        <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
          <div className="container">
            <h1 id="line1" className="display-3 mb-3 animated slideInDown" style={{ 'textShadow': '5px 7px 3px rgb(198, 190, 190)' }}>Update Profile</h1>
            <nav id="line5" aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><Link className="text-body" to={'/home'}>Home</Link></li>
                <li className="breadcrumb-item text-dark active" aria-current="page">Profile</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="container-xxl py-6">
          <div className="container">
            <div className="row g-5 justify-content-center">
              <div className="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                <div className="card " style={{ 'borderRadius': '25px' }}>
                  <div className="card-body ">
                    <div className="row justify-content-center">
                      <div className="col-md-7 order-2 order-lg-1">

                        <p id="line3" className=" text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ 'textShadow': '5px 7px 3px rgb(198, 190, 190)' }}>Update</p>

                        <form id="line11" className="mx-1 mx-md-4" onSubmit={handleForm}>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="text" className="form-control" required value={name} onChange={(e) => { setName(e.target.value) }} />
                              <label className="form-label" for="form3Example1c">Your Name</label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="number" className="form-control" required value={contact} onChange={handleContactChange} />
                              <label className="form-label" for="form3Example4c">Contact</label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-map-marker fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="file" className="form-control" onChange={(e) => { setFile(e.target.files[0]) }} />
                              <label className="form-label" for="form3Example4c">Profile Image</label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-map-marker fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="text" className="form-control" required value={address} onChange={handleAddressChange} />
                              <label className="form-label" for="form3Example4c">Address</label>
                            </div>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="submit" className="btn btn-primary btn-lg">Update</button>
                          </div>
                        </form>

                      </div>
                      <div className="col-md-5 d-flex align-items-center order-1 order-lg-2">

                        <img src={showImage}
                          className="img-fluid" alt="Sample image" style={{ height: "100%" }} />
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