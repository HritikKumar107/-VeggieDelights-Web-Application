import { Link, useNavigate, useParams } from "react-router-dom";
import { db } from './Firebase'
import { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot, Timestamp, doc, deleteDoc, updateDoc, where } from "firebase/firestore"
import Header from "./layout/Header";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

export default function ProductByCat() {
    const [load, setLoad] = useState(true)
    const override = {
        "display": "block",
        "margin": "0 auto",
        "position": "relative",
        "top": "50%",
        "bottom": "50%",
        "zIndex": "1",
    }
    const [allTask, setTask] = useState([])
    const [cat, setCat] = useState([])
    const [catName, setCatName] = useState()
    const params = useParams()
    const id = params.id
    useEffect(() => {
        const que = query(collection(db, 'Products'), where('categoryname', '==', id), where("status", "==", "Active"), orderBy('created', 'asc'))
        onSnapshot(que, (querySnapshot) => {
            setTask(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
        const que1 = query(collection(db, 'Category'), orderBy('created', 'asc'))
        onSnapshot(que1, (querySnapshot) => {
            setCat(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
        setTimeout(() => {
            setLoad(false)
        }, 700)
    }, [])
    useEffect(() => {
        if (!!catName) {
            if (catName != "All") {
                var que = query(collection(db, 'Products'), where("categoryname", "==", catName), where("status", "==", "Active"), orderBy('created', 'asc'))
            }
            else {
                var que = query(collection(db, 'Products'), where("status", "==", "Active"), orderBy('created', 'asc'))
            }
            onSnapshot(que, (querySnapshot) => {
                setTask(querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })
        }
    }, [catName])

    const getdate = (datetime) => {
        const date = (datetime.toDate().toString())
        const S = date.split(' ');
        console.log(S)
        const returndate = S[2] + "-" + S[1] + "-" + S[3]
        return returndate
    }
    const userId = sessionStorage.getItem("userId")
    const nav = useNavigate()
    const addToCart = (name, price, vendorId, vendorName, vendorContact, vendorEmail) => {
        setLoad(true)
        if (userId == "" || userId == "undefined" || userId == "null" || userId == null || userId == undefined) {
            toast.error("Please Login!!")
            nav("/login")
        }
        else {
            var getItemCart = JSON.parse(sessionStorage.getItem("cart"))
            console.log(sessionStorage.getItem("cart"))
            console.log(getItemCart, "1")
            if (getItemCart.length > 0) {
                let x = getItemCart.filter((el, index) => {
                    console.log(el.item, name, "in filter", index)
                    if (el.item == name) {
                        let qty = parseInt(el.quantity) + 1
                        let total = qty * parseInt(el.price)
                        el.quantity = qty
                        el.total = total
                        getItemCart[index] = el
                        console.log("after update")
                        toast.success("Cart Updated Successfully!!")
                        setTimeout(() => {
                            setLoad(false)
                        }, 700)
                        sessionStorage.setItem("cart", JSON.stringify(getItemCart))
                        return el
                    }
                })
                console.log("x is ", x)
                if (x.length <= 0) {
                    let data = {
                        user: sessionStorage.getItem("userId"),
                        item: name,
                        quantity: 1,
                        price: price,
                        total: price,
                        vendorId: vendorId,
                        vendorEmail: vendorEmail,
                        vendorContact: vendorContact,
                        vendorName: vendorName,
                        created: Timestamp.now(),
                        status: "Active"
                    }
                    getItemCart = JSON.parse(sessionStorage.getItem("cart"))
                    console.log("data present is ", getItemCart)
                    getItemCart.push(data)
                    console.log("data present after push ", getItemCart)
                    sessionStorage.setItem("cart", JSON.stringify(getItemCart))
                    toast.success("Item Added To cart!!")
                    window.location.reload()
                    setTimeout(() => {
                        setLoad(false)
                    }, 700)
                }
            }
            else {
                console.log("no item present")
                let data = {
                    user: sessionStorage.getItem("userId"),
                    item: name,
                    quantity: 1,
                    price: price,
                    total: price,
                    vendorId: vendorId,
                    vendorEmail: vendorEmail,
                    vendorContact: vendorContact,
                    vendorName: vendorName,
                    created: Timestamp.now(),
                    status: "Active"
                }
                getItemCart = []
                getItemCart.push(data)
                sessionStorage.setItem("cart", JSON.stringify(getItemCart))
                window.location.reload()
                toast.success("Item Added To cart!!")
                setTimeout(() => {
                    setLoad(false)
                }, 700)
            }
        }
    }
    return (
        <>
            <div className="d-flex justify-content-center">
                <ClipLoader loading={load} cssOverride={override} size={120} />
            </div>
            <div className={load ? "disabled-screen-full" : ""}>
                <Header active={'product'} />
                {/* <!-- Page Header Start --> */}
                <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container">
                        <h1 id="line1" className="display-3 mb-3 animated slideInDown">Products</h1>
                        <nav id="line5" aria-label="breadcrumb animated slideInDown">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><Link className="text-body" to={'/home'}>Home</Link></li>

                                <div className="breadcrumb-item nav-item dropdown">
                                    <a className="text-body dropdown-toggle" data-bs-toggle="dropdown" href="#">Pages</a>
                                    <div className="dropdown-menu m-0">
                                        <Link to={'/blog_grid'} className="dropdown-item">Blog Grid</Link>
                                        <Link to={'/features'} className="dropdown-item">Our Features</Link>
                                        <Link to={'/testimonial'} className="dropdown-item">Testimonial</Link>
                                        <Link to={'/error'} className="dropdown-item">404 Page</Link>
                                    </div>
                                </div>

                                <li className="breadcrumb-item text-dark active" aria-current="page">Products</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* <!-- Page Header End --> */}


                {/* <!-- Product Start --> */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-0 gx-5 align-items-end">
                            <div className="col-lg-6">
                                <div className="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ 'maxWidth': '500px' }}>
                                    <h1 id="line3" className="display-5 mb-3">Our Products</h1>
                                    <p id="line5">Get the Best Products from direct Vendors</p>
                                </div>
                            </div>
                            <div id="line8" className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                                <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                                    <li className="nav-item me-2">
                                        <a className="btn btn-outline-primary border-2 active " data-bs-toggle="pill" href="#tab-1" onClick={() => {
                                            setCatName("All")
                                        }}>All</a>
                                    </li>
                                    {
                                        cat?.slice(0, 3)?.map((el, index) => (
                                            <li className="nav-item me-2">
                                                <a className="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#" onClick={() => { setCatName(el.data.CategoryName) }}>{el.data.CategoryName} </a>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    {allTask?.map((el, index) =>
                                    (
                                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                                            <div className="product-item">
                                                <div className="position-relative bg-light overflow-hidden">
                                                    <img className="img-fluid w-100" src={el.data.Image} alt="" />
                                                </div>
                                                <div className="text-center p-4">
                                                    <a id="line10" className="d-block h5 mb-2" href="">{el.data.productname}</a>
                                                    <span id="line12" className="text-primary me-1">₹{el.data.price}</span>
                                                    <span id="line12" className="text-body ">/{el.data.quantity}</span>
                                                </div>
                                                <div id="line11" className="d-flex border-top">
                                                    <small className="w-50 text-center border-end py-2">
                                                        <Link to={"/productDetails/" + el.id}>
                                                            <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                                        </Link>
                                                    </small>
                                                    <small className="w-50 text-center py-2">
                                                        <a className="text-body" href="#" onClick={() => { addToCart(el.data.productname, el.data.price, el.data.vendorId, el.data.vendorName, el.data.vendorContact, el.data.vendorEmail) }}><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Product End --> */}


                {/* <!-- Firm Visit Start --> */}
                <div className="container-fluid bg-primary bg-icon mt-5 py-6">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-md-7 wow slideInLeft" data-wow-delay="0.5s">
                                <h1 id="line3" className="display-5 text-white mb-3">Visit Our Firm</h1>
                                <p id="line7" className="text-white mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                            </div>
                            <div className="col-md-5 text-md-end wow slideInRight" data-wow-delay="0.5s">
                                <a id="line8" style={{ fontSize: "20px" }} className="btn btn-lg btn-secondary rounded-pill py-3 px-5" href="">Visit Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Firm Visit End --> */}


                {/* <!-- Testimonial Start --> */}
                <div className="container-fluid bg-light bg-icon py-6">
                    <div className="container">
                        <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ 'maxWidth': '500px' }}>
                            <h1 id="line3" className="display-5 mb-3">Customer Review</h1>
                            <p id="line7">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                        </div>
                        <div className="testimonial-carousel" >
                            <div className="testimonial-item position-relative bg-white p-5 mt-4 wow slideInRight" data-wow-delay="0.1s">
                                <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                                <p id="line7" className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                <div className="d-flex align-items-center">
                                    <img className="flex-shrink-0 rounded-circle" src="/assets/img/testimonial-1.jpg" alt="" />
                                    <div className="ms-3">
                                        <h5 id="line3" className="mb-1" style={{ fontSize: "26px" }}>Client Name</h5>
                                        <span id="line2" style={{ fontSize: "18px" }}>Profession</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item position-relative bg-white p-5 mt-4 wow slideInRight" data-wow-delay="0.1s">
                                <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                                <p id="line7" className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                <div className="d-flex align-items-center">
                                    <img className="flex-shrink-0 rounded-circle" src="/assets/img/testimonial-2.jpg" alt="" />
                                    <div className="ms-3">
                                        <h5 id="line3" className="mb-1" style={{ fontSize: "26px" }}>Client Name</h5>
                                        <span id="line2" style={{ fontSize: "18px" }}>Profession</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item position-relative bg-white p-5 mt-4 wow slideInRight" data-wow-delay="0.1s">
                                <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                                <p id="line7" className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                <div className="d-flex align-items-center">
                                    <img className="flex-shrink-0 rounded-circle" src="/assets/img/testimonial-3.jpg" alt="" />
                                    <div className="ms-3">
                                        <h5 id="line3" className="mb-1" style={{ fontSize: "26px" }}>Client Name</h5>
                                        <span id="line2" style={{ fontSize: "18px" }}>Profession</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item position-relative bg-white p-5 mt-4 wow slideInRight" data-wow-delay="0.1s">
                                <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                                <p id="line7" className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                <div className="d-flex align-items-center">
                                    <img className="flex-shrink-0 rounded-circle" src="/assets/img/testimonial-4.jpg" alt="" />
                                    <div className="ms-3">
                                        <h5 id="line3" className="mb-1" style={{ fontSize: "26px" }}>Client Name</h5>
                                        <span id="line2" style={{ fontSize: "18px" }}>Profession</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial End --> */}
        </>
    )
}