import { Link, useNavigate } from "react-router-dom";
import {db} from './Firebase'
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot, Timestamp,doc, deleteDoc, updateDoc, where} from "firebase/firestore"
import Header from "./layout/Header";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
export default function ManageProduct(){
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
        const que = query(collection (db, 'Products'),where("vendorId","==",sessionStorage.getItem("userId")),orderBy('created','asc'))
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
        console.log(S)
        const returndate = S[2]+"-"+S[1]+"-"+S[3]
        return returndate
    }

      const nav=useNavigate()
      const changeStatus=async (id, status)=>{
          const taskDocRef = doc(db, 'Products', id)
          try {
              let data = {
                  status:status
              }
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
    return(
        <>
        <div className="d-flex justify-content-center">
                <ClipLoader loading={load} cssOverride={override} size={120}/>
            </div>
            <div className={load?"disabled-screen-full":""}> 
        <Header active={'manageproduct'}/>
        <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
            <div className="container text-center">
                <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{'maWidth': '500px'}}>
                    <h1 id="line1" className="display-3 animated slideInDown" style={{ 'textShadow': '5px 7px 5px rgb(190, 190, 190)'}}>Manage Product</h1>
                </div>
            </div>
        </div>
        <div className="viewtable container-fluid my-5">
        <table class="table table-bordered border-dark table-responsive">
            <thead id="line11" className="table-dark">
                <tr>
                    <td>Id</td>
                    <td>Product Name</td>
                    <td>Category Name</td>
                    <td>Images</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Description</td>
                    <td>Status</td>
                    <td>CreatedAt</td>
                    <td>Edit</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody id="line6">
            {allTask.map((product,index) =>(
                <tr>
                    <td>{index+1}</td>
                    <td>{product.data.productname}</td>
                    <td>{product.data.categoryname}</td>
                    <td>
                    <img className='form-img' src={product.data.Image}
                            width={'200px'}></img>
                    </td>
                    <td>&#8377;{product.data.price}</td>
                    <td>{product.data.quantity}</td>
                    <td>{product.data.description}</td>
                    <td>{product.data.status}</td>
                    <td>{getdate(product.data.created)}</td>
                    <td className="mx-2" style={{'display':'inline-flex'}}>
                    <Link to={'/user/editProduct/'+product.id}>
                            <button class="btn btn-success"><i class="fa fa-edit" aria-hidden="true"></i></button>
                        </Link>
                    </td>
                    <td width="200px">
                        {product.data.status=="Active"?<a className='btn btn-danger ' onClick={()=>{changeStatus(product.id,"In-Active")}}>In-Active</a>:<a className='btn btn-success' onClick={()=>{changeStatus(product.id,"Active")}}>Active</a>}
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