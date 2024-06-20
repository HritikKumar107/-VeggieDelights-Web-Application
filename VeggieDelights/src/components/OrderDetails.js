import {db} from './Firebase'
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot,where} from "firebase/firestore"
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import {ClipLoader} from "react-spinners"
import Header from "./layout/Header"

export default function OrderDetails(){
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
    const param=useParams()
    const id=param.id
    useEffect(() => {
        const que = query(collection (db, 'orderDetails'),where("orderId","==",id),orderBy('created','asc'))
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
    

    return(
        <>
        <div className="d-flex justify-content-center">
                <ClipLoader loading={load} cssOverride={override} size={120}/>
            </div>
            <div className={load?"disabled-screen-full":""}> 
        <Header active={'history'}/>
        <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
            <div className="container text-center">
                <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{'maWidth': '500px'}}>
                    <h1 id="line1" className="display-3 animated slideInDown" style={{ 'textShadow': '5px 7px 5px rgb(190, 190, 190)'}}> Order Details</h1>
                </div>
            </div>
        </div>
        <div className="viewtable container-fluid my-5">
        <table class="table table-bordered border-dark table-responsive">
            <thead id="line11" className="table-dark">
            <tr>
                <th>Sno</th>
                <th>Food Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                
                </tr>
            </thead>
            <tbody id="line6">
            {allTask.map((category,index) =>(
                <tr key={index}>
                <td>{index+1}</td>
                <td>
                {category.data.item}</td>
                <td>&#8377;{category.data.price}</td>
                <td >
                    {category.data.quantity} 
                </td>
                <td>{category.data.total}</td>
              
            </tr>
            ))}
            </tbody>
        </table>
        </div>
        </div>

        </>
    )
}