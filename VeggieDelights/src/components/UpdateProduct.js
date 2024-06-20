import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import {db,storage} from './Firebase'
import {collection, addDoc, Timestamp, snapshotEqual, query, where, orderBy, onSnapshot, doc, getDoc, updateDoc} from 'firebase/firestore'
import { useState, CSSProperties } from "react";
import {useNavigate} from "react-router-dom"
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import Header from "./layout/Header";
import { toast } from "react-toastify";
import {ClipLoader} from "react-spinners"
export default function UpdateProduct(){
    const[categoryname,setCategoryName] = useState('')
    const [allCat,setCat]=useState([])
    const[productname,setProductName] = useState('')
    const[quantity,setQuantity] = useState('')
    const[price,setprice] = useState('')
    const[description,setDescription] = useState('')
    const [file, setFile] = useState(null)
    const [percent, setPercent] = useState(false)
    const [imageUrl, setImageUrl] = useState(null)
    const [fileName, setFileName] = useState(null)
    const [prevFileName, setPrevFileName] = useState()
    const [image,setImage]=useState()
    const [load,setLoad]=useState(false)
    const override={
        "display":"block",
        "margin":"0 auto",
        "position":"relative",
        "top":"50%",
        "bottom":"50%",
        "zIndex":"1",
    }
    useEffect(() => {
        const que = query(collection (db, 'Category'),where("status","==","Active"),orderBy('created','asc'))
        onSnapshot(que,(querySnapshot) => {
            setCat(querySnapshot.docs.map(doc => ({
                id : doc.id,
                data : doc.data()
            })))
        })
    },[])
    useEffect(() => {
        getSingleTaskData()
    }, [])
    const param=useParams()
    const id=param.id
    const getSingleTaskData = async () => {
        // console.log("id is ", id)
        const taskDocRef = doc(db, 'Products', id)
        const taskSnap = await getDoc(taskDocRef);
        if (taskSnap.exists()) {
            let taskData = taskSnap.data();
           // console.log("Document data:", taskSnap.data());
           setTimeout(()=>{
                setLoad(false)
            },700)
            setCategoryName(taskData.categoryname)
            setImage(taskData.Image)
            setPrevFileName(taskData.fileName)
            setDescription(taskData.description)
            setProductName(taskData.productname)
            setprice(taskData.price)
            setQuantity(taskData.quantity)
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
        const taskDocRef = doc(db, 'Products', id)
        try {
            let data = {
                categoryname : categoryname,
                productname : productname,
                quantity : quantity,
                price:price,
                description : description,
                Image : image,
            }
            if (!!imageUrl) {
                data.Image = imageUrl
                data.fileName = fileName
            }
            console.log(data)
            await updateDoc(taskDocRef, data)
            toast.success("Updated Successfully!!")
            setTimeout(()=>{
                nav("/user/manageproduct")
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
        <Header active={'addproduct'}/>
        <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
            <div className="container">
                <h1 id="line1" className="display-3 mb-3 animated slideInDown">Product</h1>
                <nav id="line5" aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><Link className="text-body" to={'/home'}>Home</Link></li>
                        <li className="breadcrumb-item text-dark active" aria-current="page">Product</li>
                    </ol>
                </nav>
            </div>
        </div>

        <div className="container-xxl py-6">
            <div className="container">
                <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.3s" style={{'maxWidth': '500px'}}>
                    <h1 id="line3" className="display-5 mb-3">Update Product</h1>
                </div>
                <form id="line11" className="wow fadeInUp" data-wow-delay="0.1s" onSubmit={handleform}>
                    <div className="row g-3">
                        <div className="col-md-12">
                            <div className="form-floating wow slideInLeft" data-wow-delay="0.5s">
                                <select style={{'borderRadius': '50px'}} className="form-control pb-1 bg-light" id="name" onChange={(data) => { setCategoryName(data.target.value)}} value={categoryname}>
                                <option disabled>Select your category</option>
                               {allCat?.map((el,index)=>(
                                <option selected={el.data.CategoryName==categoryname}>{el.data.CategoryName}</option>
                               ))}
                                </select>
                                <label for="name">Category Name {categoryname}</label>
                            </div>
                        </div>
                        
                        <div className="col-sm-6">
                            <div className="form-floating wow slideInRight" data-wow-delay="0.5s">
                                <input type="text" className="form-control rounded-pill" id="name" placeholder="Your Name" required value={productname} onChange={(data) => { setProductName(data.target.value)}} style={{'textTransform':'capitalize'}}/>
                                <label htmlFor="name">Product Name</label>
                            </div>
                        </div>


                        <div className="col-sm-6">
                            <div className="form-floating wow slideInRight" data-wow-delay="0.7s">
                                    <input type="file" className="form-control rounded-pill" id="email" placeholder="Images"  onChange={(data) => setFile(data.target.files[0])}/>
                                    <p className="ms-3">{percent} "% done"</p>
                                <label htmlFor="email">Product Images</label>
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="form-floating wow slideInRight" data-wow-delay="1s">
                                <input type="number" style={{'borderRadius': '50px'}} className="form-control pb-1" id="name" required onChange={(data) => { setprice(data.target.value)}} min="0" value={price}/>
                                <label htmlFor="name">Price</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating wow slideInRight" data-wow-delay="1s">
                                <input type="text" style={{'borderRadius': '50px'}} className="form-control pb-1" id="name" required onChange={(data) => { setQuantity(data.target.value)}} value={quantity}/>
                                <label htmlFor="name">Quantity</label>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-floating wow fadeInUp" data-wow-delay="1s">
                                <textarea className="form-control" placeholder="Leave a message here" id="message" style={{'height' : '200px','borderRadius': '25px','textTransform':'capitalize'}} onChange={(data) => { setDescription(data.target.value)}} value={description}/>
                                <label htmlFor="message">Description</label>
                            </div>
                        </div>

                        <div className="col-12 wow fadeInUp" data-wow-delay="1s">
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