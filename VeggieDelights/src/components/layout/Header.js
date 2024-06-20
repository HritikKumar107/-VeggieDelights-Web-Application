import { collection, onSnapshot, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { db } from "../Firebase"
import { toast } from "react-toastify"
import { getAuth } from "firebase/auth"
export default function Header(props){
    const [userType,setUserType]=useState("")
    const [userEmail,setUserEmail]=useState("")
    const [item,setItem]=useState(0)
    const userid=sessionStorage.getItem("userId")
    useEffect(()=>{
        if(userid !="" && userid!="null" && userid!=null && userid!="undefined" && userid!=undefined){
            getSingleTaskData()
        }
    },[userid])
      const getSingleTaskData = async () => {
        const que = query(collection (db, 'users'),where("userid","==",sessionStorage.getItem("userId")))
        onSnapshot(que,(querySnapshot) => {
            setUserType(querySnapshot.docs[0]?.data()?.userType)
            setUserEmail(querySnapshot.docs[0]?.data()?.email)
            sessionStorage.setItem("userContact",querySnapshot.docs[0]?.data().contact)
            sessionStorage.setItem("userName",querySnapshot.docs[0]?.data().name)
            sessionStorage.setItem("userEmail",querySnapshot.docs[0]?.data().email)
            sessionStorage.setItem("userType", querySnapshot.docs[0]?.data().userType)
            sessionStorage.setItem("userImage", querySnapshot.docs[0]?.data().image1)
        })
        var getCartItem=JSON.parse(sessionStorage.getItem("cart"))
        setItem(getCartItem.length)
      }
      const nav=useNavigate()
      const logout=()=>{
        if(window.confirm("Do you really want to Logout?")){
            toast.success("Logout Successfully!!")
            const auth=getAuth()
            auth.signOut()
            sessionStorage.clear()
            nav("/login")
        }
      }
    return(
        <>
    <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.4s">
        <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
            <div id="line7" className="col-lg-6 px-5 text-start">
                <small><i className="fa fa-map-marker-alt me-2"></i>72-A/Block, Model House,Jalandhar, Punjab-144003</small>
                <small className="ms-4"><a href="mailto: Hritikk256@gmail.com"><i className="fa fa-envelope me-2"></i>Hritikk256@gmail.com</a></small>
            </div>
            <div id="line7" className="col-lg-6 px-5 text-end">
                <small>Follow us:</small>
                <a className="text-body ms-3" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="text-body ms-3" href=""><i className="fab fa-twitter"></i></a>
                <a className="text-body ms-3" href=""><i className="fab fa-linkedin-in"></i></a>
                <a className="text-body ms-3" href=""><i className="fab fa-instagram"></i></a>
            </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <a href="/" className="navbar-brand ms-4 ms-lg-0">
                <h1 id="line2" className="fw-bold text-primary m-0">Veggie<span className="text-secondary"> Delights</span></h1>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                {
                            userid!="" && userid!="undefined" && userid!=undefined && userid!="null" && userid!=null?
                            userType=="Admin"?
                            <>
                                <Link to={'/user/dashboard'} className={'dashboard'=== props.active? 'active nav-item nav-link':'nav-item nav-link'}>Home</Link>
                                <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Category</a>
                                    <div className="dropdown-menu m-0">
                                        <Link to={'/user/addcategory'} className={'addcategory'=== props.active? 'active nav-item nav-link':'dropdown-item'}>Add Category</Link>
                                        <Link to={'/user/managecategory'} className={'managecategory'=== props.active? 'active nav-item nav-link':'dropdown-item'}>Manage Category</Link>
                                    </div>
                                </div>
                                <Link to={'/user/product'} className={'product'=== props.active? 'active nav-item nav-link':'nav-item nav-link'}>Product</Link>
                                <Link to={'/user/adminorder'} className={'order'=== props.active? 'active nav-item nav-link':'nav-item nav-link'}>Order</Link>
                                <Link to={'/user/vendor'} className={'vendor'=== props.active? 'active nav-item nav-link':'nav-item nav-link'}>Vendor</Link>
                                <Link to={'/user/users'} className={'users'=== props.active? 'active nav-item nav-link':'nav-item nav-link'}>Users</Link>
                                <Link to={'/user/profile'} className={'profile'=== props.active? 'active nav-item nav-link':'nav-item nav-link'}>Profile</Link>
                                <Link to={'/user/enquiry'} className={'enquiry'=== props.active? 'active nav-item nav-link':'nav-item nav-link'}>Enquiry</Link>
                                <a className='nav-item nav-link' onClick={logout}>Logout</a>
                            </>
                            :
                            userType=="Vendor"?
                            <>
                                <Link to={'/user/hawker_dash'} className={'dashboard'=== props.active? 'active nav-item nav-link':'nav-item nav-link'}>Home</Link>
                                <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Product</a>
                                    <div className="dropdown-menu m-0">
                                        <Link to={'/user/addproduct'} className={'addproduct'=== props.active? 'active nav-item nav-link':'dropdown-item'}>Add </Link>
                                        <Link to={'/user/manageproduct'} className={'manageproduct'=== props.active? 'active nav-item nav-link':'dropdown-item'}>Manage</Link>
                                    </div>
                                </div>
                                <Link to={'/user/orderlist'} className={'orderlist'=== props.active? 'active nav-item nav-link':'nav-item nav-link'}>Orders</Link>
                                <Link to={'/user/profile'} className={'profile'=== props.active? 'active nav-item nav-link':'nav-item nav-link'}>Profile</Link>
                                <a className='nav-item nav-link' onClick={logout}>Logout</a>
                            </>
                            :
                            <>
                            <Link to={'/home'} className={'home'=== props.active? 'active nav-item nav-link':'nav-item nav-link'}>Home</Link>
                            <Link to={'/vendorlist'} className={'vendor'=== props.active? 'active nav-item nav-link':'nav-item nav-link'}>Vendor</Link>
                            <Link to={'/category'} className={'category'=== props.active? 'active nav-item nav-link':'nav-item nav-link'}>Category</Link>
                            <Link to={'/product'} className={'product'=== props.active? 'active nav-item nav-link':'nav-item nav-link'}>Products</Link>
                            <Link to={'/user/history'} className={'product'=== props.active? 'active nav-item nav-link':'nav-item nav-link'}>Order</Link>
                            <Link to={'/user/profile'} className={'profile'=== props.active? 'active nav-item nav-link':'nav-item nav-link'}>Profile</Link>
                            <Link to={'/contact'} className={'contact'=== props.active? 'active nav-item nav-link':'nav-item nav-link'}>Contact Us</Link>
                            <a className='nav-item nav-link' onClick={logout}>Logout</a>
                            </>
                            :
                            <>
                            <Link to={'/home1'} className={'home'=== props.active? 'active nav-item nav-link':'nav-item nav-link'}>Home</Link>
                            {/* <Link to={'/vendorlist'} className={'vendor'=== props.active? 'active nav-item nav-link':'nav-item nav-link'}>Vendor</Link> */}
                            {/* <Link to={'/category'} className={'category'=== props.active? 'active nav-item nav-link':'nav-item nav-link'}>Category</Link> */}
                            <Link to={'/product'} className={'product'=== props.active? 'active nav-item nav-link':'nav-item nav-link'}>Products</Link>
                            <Link to={'/features'} className={'features'=== props.active? 'active nav-item nav-link':'nav-item nav-link'}>Features</Link>
                            <Link to={'/contact'} className={'contact'=== props.active? 'active nav-item nav-link':"nav-item nav-link"}>Contact Us</Link>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Register</a>
                                    <div className="dropdown-menu m-0">
                                        <Link to={'/register_f'} className={'addproduct'=== props.active? 'active nav-item nav-link':'dropdown-item'}>As User </Link>
                                        <Link to={'/register_h'} className={'manageproduct'=== props.active? 'active nav-item nav-link':'dropdown-item'}>As Vendor</Link>
                                    </div>
                                </div>
                            <Link to={"/login"} className={'login'=== props.active? 'active nav-item nav-link':'nav-item nav-link'} >Login</Link>
                            </>
                        }
                </div>
                <div className="d-none d-lg-flex ms-2">
                    {!!userid && userType=="User"?
                    <Link className="btn-sm-square bg-white rounded-circle ms-3 fs-3 p-4" to={'/user/cart'}>
                        {item}<small className="ps-1 fa fa-shopping-bag text-body"></small>
                    </Link>
                    :""}
                </div>
            </div>
        </nav>
    </div>
    {/* <!-- Navbar End --> */}
        </>
    )
}