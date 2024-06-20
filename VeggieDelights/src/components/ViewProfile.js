import {db} from './Firebase'
import {useState, useEffect} from 'react'
import {collection, doc, getDoc, onSnapshot, query, where} from "firebase/firestore"
import Header from "./layout/Header";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
export default function ViewProfile(){
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
    const getSingleTaskData = async () => {
        // console.log("id is ", id)
        const que = query(collection (db, 'users'),where("userid","==",sessionStorage.getItem("userId")))
        onSnapshot(que,(querySnapshot) => {
            setData(querySnapshot.docs[0]?.data())
        })
        setTimeout(()=>{
			setLoad(false)
		},700)
    }
    return(
        <>
        <div className="d-flex justify-content-center">
               <ClipLoader loading={load} cssOverride={override} size={120}/>
           </div>
           <div className={load?"disabled-screen-full":""}> 
           <Header active={"profile"}/>
       <div className="container-fluid bg-light bg-icon py-6">
       <div className="container">
           <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{'maxWidth': '500px'}}>
               <h1 id="line1" className="display-5 mb-3">Profile</h1>
           </div>
           <div className="row g-4">
               <div className="col-md-6 offset-md-3">
                   <div className="bg-white text-center h-100 p-4 p-xl-5">
                       <img src={data?.image1} style={{height:"350px",width:"350px"}}/>    
                   </div>
               </div>
               <div className=" col-md-6 offset-md-3 wow fadeInDown" data-wow-delay="0.3s">
                   <div className="bg-white text-capitalize text-center h-100 p-4 p-xl-5">
                       <h1 id="line14" className="mb-3"> {data?.name}</h1>
                       <h4 id="line11" className="mb-3">Email: {data?.email}</h4>
                       <h5 id="line11">Address & Contact: {data?.address},{data?.contact}</h5>
                       <hr/>
                        <div className='d-flex justify-content-around'>
                            <div className='mt-2'>
                                <i className='bi bi-instagram ps-2'></i>
                                <i className='bi bi-twitter ps-2'></i>
                                <i className='bi bi-facebook ps-2'></i>
                            </div>
                            <div id="line11">
                                <Link className='btn btn-success' to="/user/updateProfile">Update</Link>
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