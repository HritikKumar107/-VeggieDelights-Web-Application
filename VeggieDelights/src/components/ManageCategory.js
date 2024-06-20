import {db} from './Firebase'
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot, Timestamp,doc, deleteDoc, updateDoc} from "firebase/firestore"
import { Link, useNavigate } from 'react-router-dom'
import Header from './layout/Header'
import {ClipLoader} from "react-spinners"
import { toast } from 'react-toastify'
export default function ManageCategory(){
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
        const que = query(collection (db, 'Category'),orderBy('created','asc'))
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
          const taskDocRef = doc(db, 'Category', id)
          try {
              let data = {
                  status:status
              }
              await updateDoc(taskDocRef, data)
              toast.success("Updated Successfully!!")
              setTimeout(()=>{
                  nav("/user/managecategory")
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
        <Header active={'managecategory'}/>
        <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
            <div className="container text-center">
                <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{'maWidth': '500px'}}>
                    <h1 id="line1" className="display-3 animated slideInDown" style={{ 'textShadow': '5px 7px 5px rgb(190, 190, 190)'}}>Manage Category</h1>
                </div>
            </div>
        </div>

        <div className="viewtable container-fluid my-5">
            <table class="table table-bordered border-dark table-responsive">
                <thead id="line11" className="table-dark">
                    <tr>
                        <td>Id</td>
                        <td>Category Name</td>
                        <td>Images</td>
                        <td>Status</td>
                        <td>Created At</td>
                        <td>Edit</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody id="line6">
                    {allTask.map((category,index) =>(
                        <tr>
                        <td>{index+1}</td>
                        <td>{category.data.CategoryName}</td>
                        <td>
                            <img className='form-img' src={category.data.image}
                            width={'200px'}></img>
                        </td>
                        <td>{category.data.status}</td>
                        <td>{getdate(category.data.created)}</td>
                        <td>
                        <Link to={'/user/editCategory/'+category.id}>
                            <button class="btn btn-success"><i class="fa fa-edit" aria-hidden="true"></i></button>
                        </Link>
                        </td>
                        <td width="200px">
                        {category.data.status=="Active"?<a className='btn btn-danger ' onClick={()=>{changeStatus(category.id,"In-Active")}}>In-Active</a>:<a className='btn btn-success' onClick={()=>{changeStatus(category.id,"Active")}}>Active</a>}
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







