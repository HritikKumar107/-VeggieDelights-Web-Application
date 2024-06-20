import {db} from './Firebase'
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import { Link, useNavigate } from 'react-router-dom'
import Header from './layout/Header'
import {ClipLoader} from "react-spinners"
import { toast } from 'react-toastify'
export default function Category(){
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

    return(
        <>
         <div className="d-flex justify-content-center">
                <ClipLoader loading={load} cssOverride={override} size={120}/>
            </div>
            <div className={load?"disabled-screen-full":""}> 
            <Header active={"category"}/>
        <div className="container-fluid bg-light bg-icon my-5 py-6">
        <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{'maxWidth': '500px'}}>
                <h1 id='line1' className="display-5 mb-3">Our Category</h1>
                <p id='line5'>Shop By Your Pick</p>
            </div>
            <div className="row g-4">
                {allTask?.map((el,index)=>(
                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-delay="0.3s" key={index}>
                    <div className="bg-white text-center h-100 p-4 p-xl-5">
                        <img className="img-fluid mb-4" src={el.data.image} alt=""/>
                        <h4 id="line10" className="mb-3">{el.data.CategoryName}</h4>
                        <Link id="line11" to={"/product/"+el.data.CategoryName} className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">View</Link>
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