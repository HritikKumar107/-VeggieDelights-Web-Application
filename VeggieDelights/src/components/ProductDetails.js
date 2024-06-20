import { Link, useNavigate, useParams } from "react-router-dom";
import {db} from './Firebase'
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot, Timestamp,doc, deleteDoc, updateDoc, where, getDoc} from "firebase/firestore"
import Header from "./layout/Header";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
export default function ProductDetails(){
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
    const [data,setData]=useState({})
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
            setData(taskData)
        } else {
            console.log("No such document!");
            setTimeout(()=>{
                setLoad(false)
            },700)
        }
    }
    const getdate = (datetime) =>{
        const date = (datetime.toDate().toString())
        const S = date.split(' ');
        console.log(S)
        const returndate = S[2]+"-"+S[1]+"-"+S[3]
        return returndate
    }
    const userId=sessionStorage.getItem("userId")
    const nav=useNavigate()
  const addToCart= (id,name,price,vendorId, vendorName,vendorContact,vendorEmail)=>{
    setLoad(true)
    if(userId=="" || userId=="undefined" || userId=="null" || userId==null || userId==undefined){
        toast.error("Please Login!!")
        nav("/login")
    }
    else{
        var getItemCart=JSON.parse(sessionStorage.getItem("cart"))
        console.log(sessionStorage.getItem("cart"))
        console.log(getItemCart,"1")
        if(getItemCart.length>0){
            let x=getItemCart.filter((el,index)=>{
                if(el.id==id){
                    let qty=parseInt(el.quantity)+1
                    let total=qty*parseInt(el.price)
                    el.quantity=qty
                    el.total=total
                    getItemCart[index]=el
                    console.log("after update")
                    toast.success("Cart Updated Successfully!!")
                    setTimeout(()=>{
                        setLoad(false)
                    },700)
                    sessionStorage.setItem("cart",JSON.stringify(getItemCart))
                    return el
                }
            })
           const y=getItemCart.filter((el1,index)=>{
                if(el1.vendorId!=vendorId){
                    return el1
                }
                else{
                    console.log("this is different vendor")
                }
            })
            if(y.length<=0){
                if(x.length<=0){
                let data={
                    user:sessionStorage.getItem("userId"),
                    id:id,
                    item:name,
                    quantity:1,
                    price:price,
                    total:price,
                    vendorId:vendorId,
                    vendorEmail:vendorEmail,
                    vendorContact:vendorContact,
                    vendorName:vendorName,
                    created: Timestamp.now(),
                    status:"Active"
                }
                getItemCart=JSON.parse(sessionStorage.getItem("cart"))
                console.log("data present is ", getItemCart)
                getItemCart.push(data)
                console.log("data present after push ", getItemCart)
                sessionStorage.setItem("cart",JSON.stringify(getItemCart))
                toast.success("Item Added To cart!!")
                window.location.reload()
                setTimeout(()=>{
                    setLoad(false)
                },700)
            }
            }
            else{
                if(window.confirm("This order is from a Different Vendor, And Adding this to Cart will Remove Previous item, Are You Sure?")){
                    let data={
                        user:sessionStorage.getItem("userId"),
                        id:id,
                        item:name,
                        quantity:1,
                        price:price,
                        total:price,
                        vendorId:vendorId,
                        vendorEmail:vendorEmail,
                        vendorContact:vendorContact,
                        vendorName:vendorName,
                        created: Timestamp.now(),
                        status:"Active"
                    }
                    getItemCart=[]
                    getItemCart.push(data)
                    sessionStorage.setItem("cart",JSON.stringify(getItemCart))
                    window.location.reload()
                    toast.success("Item Added To cart!!")
                    setTimeout(()=>{
                        setLoad(false)
                    },700)
                }
                else{
                    toast.warn("Item not added To cart")
                    setTimeout(()=>{
                        setLoad(false)
                    },700)
                }
            }
            
        }
        else{
            console.log("no item present")
            let data={
                user:sessionStorage.getItem("userId"),
                id:id,
                item:name,
                quantity:1,
                price:price,
                total:price,
                vendorId:vendorId,
                vendorEmail:vendorEmail,
                vendorContact:vendorContact,
                vendorName:vendorName,
                created: Timestamp.now(),
                status:"Active"
            }
            getItemCart=[]
            getItemCart.push(data)
            sessionStorage.setItem("cart",JSON.stringify(getItemCart))
            window.location.reload()
            toast.success("Item Added To cart!!")
                setTimeout(()=>{
                    setLoad(false)
                },700)
        }
    }
}
    return(
        <>
         <div className="d-flex justify-content-center">
                <ClipLoader loading={load} cssOverride={override} size={120}/>
            </div>
            <div className={load?"disabled-screen-full":""}> 
            <Header active={"product"}/>
        <div className="container-fluid bg-light bg-icon my-5 py-6">
        <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{'maxWidth': '500px'}}>
                <h1 id="line1" className="display-5 mb-3">About Product</h1>
            </div>
            <div className="row g-4">
                <div className="col-md-5">
                    <div className="bg-white text-center h-100 p-4 p-xl-5">
                        <img src={image} style={{height:"400px"}}/>    
                    </div>
                </div>
                <div id="line11" className="col-lg-7 col-md-6 wow fadeInDown" data-wow-delay="0.3s">
                    <div className="bg-white text-capitalize text-center h-100 p-4 p-xl-5">
                        <h4 id="line2" className="mb-3">{productname}</h4>
                        <h4 id="line8" className="mb-3">&#8377;{price}/{quantity}</h4>
                        <p className="mb-3">{description}</p>
                        <a className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="#" onClick={()=>{addToCart(data?.id,data?.productname,price,data?.vendorId, data?.vendorName,data?.vendorContact,data?.vendorEmail)}}>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-5">
                    <div className="bg-white text-center h-100 p-4 p-xl-5">
                        <img src={data?.vendorImage} style={{height:"200px"}}/>
                    </div>
                </div>
                <div className="col-md">
                    <div id="line11" className="bg-white text-center h-100 p-4 p-xl-5">
                        <h1 id="line2">Seller Details:</h1>
                        
                        Name: {data?.vendorName}, <br/>
                        Email: {data?.vendorEmail}
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}