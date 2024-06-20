import { Link } from "react-router-dom";
import { useEffect } from "react";
import {db,storage} from './Firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import Header from "./layout/Header";
import { toast } from "react-toastify";
import {ClipLoader} from "react-spinners";
export default function AddCategory(){

    const[categoryname,setCategoryName] = useState('')
    const [taskcompletionStatus] = useState('Completed')
    const [percent, setPercent] = useState(false)
    const [file, setFile] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)
    const [fileName, setFileName] = useState(null)

    const [load,setLoad]=useState(false)
    const override={
        "display":"block",
        "margin":"0 auto",
        "position":"relative",
        "top":"50%",
        "bottom":"50%",
        "zIndex":"1",
    }
    const handleform = async (e) =>{
        uploadFile()
        setLoad(true)
        e.preventDefault()
    }
    const uploadFile = () => {
        if (!file) {
            alert("Please upload an image first!");
        }
        console.log("File",file)
        console.log("File Name",file.name)
  
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
                    console.log("URL",url);
                    setFileName(fileName)
                    setImageUrl(url)
                });
            }
        );
    };
  const saveData = async () => {
        try {
            await addDoc(collection(db, 'Category'), {
                CategoryName: categoryname,
                status:"Active",
                image: imageUrl,
                fileName: fileName,
                created: Timestamp.now()
            })
            toast.success("Data Submitted")
            setTimeout(()=>{
                setLoad(false)
            },700)
        } catch (err) {
            toast
            .error("Something went Wrong!!!")
            setTimeout(()=>{
                setLoad(false)
            },700)
        }
    }
  
    useEffect(() => {
        if (!!imageUrl)
            saveData()
    }, [imageUrl])
    
    return(
        <>
          <div className="d-flex justify-content-center">
                <ClipLoader loading={load} cssOverride={override} size={120}/>
            </div>
            <div className={load?"disabled-screen-full":""}> 
        <Header active={'addcategory'}/>
        <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
            <div className="container">
                <h1 id="line1" className="display-3 mb-3 animated slideInDown">Add Category</h1>
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
                        <li className="breadcrumb-item text-dark active" aria-current="page">Add Category</li>
                    </ol>
                </nav>
            </div>
        </div>

        <div className="container-xxl py-6">
            <div className="container">
                <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{'maWidth': '500px'}}>
                    <h1 id="line3" className="display-5 mb-3">Add Category</h1>
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