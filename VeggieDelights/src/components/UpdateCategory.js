import { ClipLoader } from "react-spinners"
import { collection, addDoc,Timestamp, doc, getDoc, updateDoc } from 'firebase/firestore'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deleteObject, getDownloadURL, ref,uploadBytesResumable } from 'firebase/storage'
import { toast } from "react-toastify"
import { useState, useEffect } from "react"
import { db, storage} from "./Firebase"
import Header from "./layout/Header"
export default function UpdateCategory(){

    const[categoryname,setCategoryName] = useState('')
    const [taskcompletionStatus] = useState('Completed')
    const [file, setFile] = useState(null)
    const [percent, setPercent] = useState(false)
    const [imageUrl, setImageUrl] = useState(null)
    const [fileName, setFileName] = useState(null)
    const [prevFileName, setPrevFileName] = useState()
    const [image,setImage]=useState()
      const [load,setLoad]=useState(true)   
      const override={
        "display":"block",
        "margin":"0 auto",
        "position":"absolute",
        "top":"50%",
        "bottom":"50%",
        "zIndex":"1",
    }
    
    useEffect(() => {
        getSingleTaskData()
    }, [])
    const param=useParams()
    const id=param.id
    const getSingleTaskData = async () => {
        // console.log("id is ", id)
        const taskDocRef = doc(db, 'Category', id)
        const taskSnap = await getDoc(taskDocRef);
        if (taskSnap.exists()) {
            let taskData = taskSnap.data();
           // console.log("Document data:", taskSnap.data());
           setTimeout(()=>{
                setLoad(false)
            },700)
            setCategoryName(taskData.CategoryName)
            setImage(taskData.image)
            setPrevFileName(taskData.fileName)
        } else {
            console.log("No such document!");
            setTimeout(()=>{
                setLoad(false)
            },700)
        }
    }
    const handleform = async (e) => {
        e.preventDefault();                        
        setLoad(true)
        if (!!file)
            uploadFile()
        else updateData()
    }
    const nav=useNavigate()

    async function updateData() {
        const taskDocRef = doc(db, 'Category', id)
        try {
            let data = {
            CategoryName:categoryname,
            image:image,
            }
            if (!!imageUrl) {
                data.image = imageUrl
                data.fileName = fileName
            }
            await updateDoc(taskDocRef, data)
            toast.success("Updated Successfully!!")
            setTimeout(()=>{
                nav("/user/managecategory")
            },700)
        } catch (err) {
            setTimeout(()=>{
                setLoad(false)
            },700)
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
            // File deleted successfully
            console.log("Prev File Deleted")
        }).catch(function (error) {
            // Some Error occurred
            console.log("Error deleting previous image")
        });

    }
    const uploadFile = () => {
        if (!file) {
            alert("Please upload an image first!");
        }
        const fileName = `${Date.now()}-${file.name}`
        const storageRef = ref(storage, `/files/${fileName}`);

        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                // update progress
                setPercent(percent);
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
    
    return(
        <>
          <div className="d-flex justify-content-center">
                <ClipLoader loading={load} cssOverride={override} size={120}/>
            </div>
            <div className={load?"disabled-screen-full":""}> 
        <Header active={'category'}/>
        <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
            <div className="container">
                <h1 id="line1" className="display-3 mb-3 animated slideInDown"> Category</h1>
                <nav id="line5" aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><Link className="text-body" to={'/home'}>Home</Link></li>
                      
                        <li className="breadcrumb-item text-dark active" aria-current="page"> Category</li>
                    </ol>
                </nav>
            </div>
        </div>

        <div className="container-xxl py-6">
            <div className="container">
                <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{'maWidth': '500px'}}>
                    <h1 id="line3" className="display-5 mb-3">Update Category</h1>
                </div>
                <form id="line11" data-wow-delay="0.1s" onSubmit={handleform}>
                    <div className="row g-3 ">
                        <div className="col-md-12">
                            <div className="form-floating">
                                <input value={categoryname} onChange={(e)=>{setCategoryName(e.target.value)}} className="form-control" style={{borderRadius:"50px"}}/>
                                <label for="name">Category Name</label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-floating">
                                <input type="file" style={{'borderRadius': '50px'}} className="form-control" id="email"  onChange={(data) => setFile(data.target.files[0])}/>
                                <label for="image"> Category Images</label>
                                <p className="ms-3">{percent} "% done"</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-primary rounded-pill py-3 px-5 fs-4" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </>
    )
}