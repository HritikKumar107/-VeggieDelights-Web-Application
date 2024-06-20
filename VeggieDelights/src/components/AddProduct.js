import { Link } from "react-router-dom";
import { useEffect } from "react";
import {db,storage} from './Firebase'
import {collection, addDoc, Timestamp, snapshotEqual, query, where, orderBy, onSnapshot} from 'firebase/firestore'
import { useState, CSSProperties } from "react";
import {useNavigate} from "react-router-dom"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import Header from "./layout/Header";
import { toast } from "react-toastify";
import {ClipLoader} from "react-spinners"
export default function AddProduct(){
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
    const handleform = async (data) =>{
        data.preventDefault()
        setLoad(true)
        uploadFile()
    }
    
    const uploadFile = () => {
        if (!file) {
            alert("Please upload an image first!");
        }
        console.log("File",file)
        console.log("File Name",file.name)

        const fileName = `${Date.now()}-${file.name}`
        const storageRef = ref(storage, `/files/${fileName}`);

        const uploadTask = uploadBytesResumable(storageRef,file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setPercent(percent);
            },
            (err) => console.log(err),() => {
                getDownloadURL(uploadTask.snapshot.ref).then
                ((url) => {
                    console.log("URL",url);
                    setFileName(fileName)
                    setImageUrl(url)
                });
            }
        );
    };

    const saveDate = async () => {
        try{
            await addDoc(collection(db, 'Products'),{
                categoryname : categoryname,
                productname : productname,
                vendorId:sessionStorage.getItem("userId"),
                quantity : quantity,
                price:price,
                description : description,
                vendorContact:sessionStorage.getItem("userContact"),
                vendorName:sessionStorage.getItem("userName"),
                vendorEmail:sessionStorage.getItem("userEmail"),
                vendorImage:sessionStorage.getItem("userImage"),
                Image : imageUrl,
                fileName : fileName,
                status:"Active",
                created : Timestamp.now()
            })
            toast.success("Data Submitted")
            setCategoryName("")
            setDescription("")
            setprice("")
            setQuantity("")
            setProductName("")
            setTimeout(()=>{
                setLoad(false)
            },700)
        } catch (err) {
            toast.error("Something went Wrong")
            setTimeout(()=>{
                setLoad(false)
            },700)
        }
    }

    useEffect(() => {
        if (!! imageUrl)
            saveDate()
    },[imageUrl])
        
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
                    <h1 id="line3" className="display-5 mb-3">Add Product</h1>
                </div>
                <form id="line11" className="wow fadeInUp" data-wow-delay="0.1s" onSubmit={handleform}>
                    <div className="row g-3">
                        <div className="col-md-12">
                            <div className="form-floating wow slideInLeft" data-wow-delay="0.5s">
                                <select style={{'borderRadius': '50px'}} className="form-control pb-1 bg-light" id="name" onChange={(data) => { setCategoryName(data.target.value)}} value={categoryname}>
                                <option selected disabled value="">Select your category</option>
                               {allCat?.map((el,index)=>(
                                <option>{el.data.CategoryName}</option>
                               ))}
                                </select>
                                <label for="name">Category Name</label>
                            </div>
                        </div>
                        
                        <div className="col-sm-6">
                            <div className="form-floating wow slideInRight" data-wow-delay="0.5s">
                                <input type="text" className="form-control rounded-pill" id="name" placeholder="Your Name" required onChange={(data) => { setProductName(data.target.value)}} style={{'textTransform':'capitalize'}} value={productname}/>
                                <label htmlFor="name">Product Name</label>
                            </div>
                        </div>


                        <div className="col-sm-6">
                            <div className="form-floating wow slideInRight" data-wow-delay="0.7s">
                                    <input type="file" className="form-control rounded-pill" id="email" placeholder="Images" required onChange={(data) => setFile(data.target.files[0])}/>
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
                                <textarea className="form-control" placeholder="Leave a message here" id="message" style={{'height' : '200px','borderRadius': '25px','textTransform':'capitalize'}} onChange={(data) => { setDescription(data.target.value)}} value={description} required/>
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