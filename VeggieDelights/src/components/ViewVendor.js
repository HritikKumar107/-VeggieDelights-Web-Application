import { Link, useNavigate } from "react-router-dom";
import {db} from './Firebase'
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot, Timestamp,doc, deleteDoc, updateDoc, where} from "firebase/firestore"
import Header from "./layout/Header";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
export default function ViewVendor(){
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

    const getdate = (datetime) =>{
        const date = (datetime.toDate().toString())
        const S = date.split(' ');
        const returndate = S[2]+"-"+S[1]+"-"+S[3]
        return returndate
    }

    return(
        <>
        <div className="d-flex justify-content-center">
                <ClipLoader loading={load} cssOverride={override} size={120}/>
            </div>
            <div className={load?"disabled-screen-full":""}> 
        <Header active={'vendor'}/>
        <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
            <div className="container text-center">
                <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{'maWidth': '500px'}}>
                    <h1 id="line1" className="display-3 animated slideInDown" style={{ 'textShadow': '5px 7px 5px rgb(190, 190, 190)'}}> Vendor List</h1>
                </div>
            </div>
        </div>
        <div className="viewtable container-fluid my-5">
        <table class="table table-bordered border-dark table-responsive">
            <thead id="line11" className="table-dark">
                <tr>
                    <td>Sno</td>
                    <td>Image</td>
                    <td>Vendor Name</td>
                    <td>Email</td>
                    <td>Contact</td>
                    <td>Id Proof</td>
                    <td>Address</td>
                    <td>CreatedAt</td>
                </tr>
            </thead>
            <tbody id="line6">
            {allTask.map((product,index) =>(
                <tr>
                    <td>{index+1}</td>
                    <td><img src={product.data.image1} style={{height:"100px"}}/></td>
                    <td>{product.data.name}</td>
                    <td>{product.data.email}</td>
                    <td>{product.data.contact}</td>
                    <td>
                    <Link to={product.data?.image}>View</Link>
                    </td>
                    <td>{product.data.address}</td>
                    <td>{getdate(product.data.created)}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
        </div>

        </>
    )
}