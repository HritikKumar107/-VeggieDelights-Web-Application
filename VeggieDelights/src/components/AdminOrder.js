import { useEffect, useState } from "react"
import { db } from "./Firebase"
import {collection,  Timestamp, addDoc, query, where, orderBy, onSnapshot} from "firebase/firestore"
import {  Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {ClipLoader} from "react-spinners"
import Header from "./layout/Header"

export default function AdminOrder(){
 const [allTask , setTask] = useState([])
  const [load,setLoad]=useState(true)   
  const override={
      "display":"block",
      "margin":"0 auto",
      "position":"relative",
      "top":"50%",
      "bottom":"50%",
      "zIndex":"1",
  }
  useEffect(() => {
    const que = query(collection (db, 'orders'),orderBy('created','asc'))
    onSnapshot(que,(querySnapshot) => {
        // console.log(querySnapshot.doc)
        setTimeout(()=>{
            setLoad(false)
        },700)
        setTask(querySnapshot.docs.map(doc => ({
            id : doc.id,
            data : doc.data()
        })))
    })
},[])
const getdate = (datetime) =>{
  const date = (datetime.toDate().toString())
  const S = date.split(' ');
  // console.log(S)
  const returndate = S[2]+"-"+S[1]+"-"+S[3]
  return returndate
}
    return(
        <>
        <div className="d-flex justify-content-center">
                <ClipLoader loading={load} cssOverride={override} size={120}/>
            </div>
            <div className={load?"disabled-screen-full":""}> 
        <Header active={'order'}/>
        <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
            <div className="container text-center">
                <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{'maWidth': '500px'}}>
                    <h1 id="line1" className="display-3 animated slideInDown" style={{ 'textShadow': '5px 7px 5px rgb(190, 190, 190)'}}> Orders</h1>
                </div>
            </div>
        </div>
        <div className="viewtable container-fluid my-5">
        <table class="table table-bordered border-dark table-responsive">
            <thead id="line11" className="table-dark">
            <tr>
                <th>No</th>
                <th>Date</th>
                <th>Price</th>
                <th>User Details</th>
                <th>Vendor Details</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody id="line6">
            {allTask.map((category,index) =>(
                <tr key={index}>
                <td>{index+1}</td>
                <td>{getdate(category.data.created)}</td>
                <td>&#8377;{category.data.total}</td>
                <td width="170px">
                    {category.data.name}, {category.data.address}, {category.data.contact}
                </td>
                <td>{category.data.vendorName},<br/>{category.data.vendorEmail}, <br/> {category.data.vendorContact}</td>
                <td>{category.data.status}</td>
                <td width="200px">
                    <Link className='btn' to={"/user/viewDetails/"+category.id}>
                    <i className='fa fa-eye' ></i>
                    </Link>
                </td>
            </tr>
            ))}
            </tbody>
        </table>
        </div>
        </div>

        </>
    )
}