import {db} from './Firebase'
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot, where} from "firebase/firestore"
import { Link, useNavigate } from 'react-router-dom'
import Header from './layout/Header'
import {ClipLoader} from "react-spinners"
import { toast } from 'react-toastify'
export default function ViewVendorList(){
    const [load,setLoad]=useState(true)
    const override={
        "display":"block",
        "margin":"0 auto",
        "position":"relative",
        "top":"50%",
        "bottom":"50%",
        "zIndex":"1",
    }
    const [allTask , setTask] = useState([])
    useEffect(() => {
        const que = query(collection (db, 'users'),where("userType","==","Vendor"),orderBy('created','asc'))
        onSnapshot(que,(querySnapshot) => {
            setTask(querySnapshot.docs.map(doc => ({
                id : doc.id,
                data : doc.data()
            })))
        })
        setTimeout(()=>{
            setLoad(false)
        },700)
    },[])

    return(
        <>
         <div className="d-flex justify-content-center">
                <ClipLoader loading={load} cssOverride={override} size={120}/>
            </div>
            <div className={load?"disabled-screen-full":""}> 
            <Header active={"vendor"}/>
        <div className="container-fluid bg-light bg-icon py-6">
        <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{'maxWidth': '500px'}}>
                <h1 id='line1' className="display-5 mb-3">Our Vendor</h1>
            </div>
            <div className="row g-4">
                {allTask?.map((el,index)=>(
                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-delay="0.3s" key={index}>
                    <div id='line11' className="bg-white text-center h-100 p-4 p-xl-5">
                        <img src={el.data.image1} style={{height:"200px",textAlign:"center"}}/>
                        <h4 id='line8' className="mb-3">{el.data.name}</h4>
                        <h4 id='line8' className="mb-3">{el.data.email}</h4>
                        <p>{el.data.address}</p>
                        <Link to={"/productByvendor/"+el.data.userid} className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">View Products</Link>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </div>
        </div>
        </>
    )
}