import { useEffect, useState } from "react"
import { db } from "./Firebase"
import {collection,  Timestamp, addDoc} from "firebase/firestore"
import {  useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {ClipLoader} from "react-spinners"
import Header from "./layout/Header"
export default function Cart(){
    const [allTask , setTask] = useState([])
  const [name,setName]=useState("")
  const [contact,setContact]=useState("")
  const [address,setAddress]=useState("")
  const [vendorId,setVendorId]=useState("")
  const [vendorName,setVendorName]=useState("")
  const [vendorEmail,setVendorEmail]=useState("")
  const [vendorContact,setVendorContact]=useState("")
  var total=0
  var [total1,setTotal1]=useState(0)
  useEffect(()=>{
    setTotal1(total)
  },[total])
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
    setTask(JSON.parse(sessionStorage.getItem("cart")))
    
    setTimeout(()=>{
        setLoad(false)
    },700)
  },[])
  useEffect(()=>{
    if(!!allTask){
        setVendorId(allTask[0]?.vendorId)
        setVendorName(allTask[0]?.vendorName)
        setVendorContact(allTask[0]?.vendorContact)
        setVendorEmail(allTask[0]?.vendorEmail)
        console.log(allTask, vendorContact, vendorEmail, vendorId, vendorName)
    }
  },[load])
    const nav=useNavigate()
    const handleDelete = (index) => {
        setLoad(true)
        console.log(index ,"index1")
        var getCartItem=JSON.parse(sessionStorage.getItem("cart"))
            console.log(index, getCartItem.length)
            if(index==getCartItem.length-1){
                getCartItem.pop()
            }
            else{
                let data=getCartItem.pop()
                getCartItem[index]=data
            }
            sessionStorage.setItem("cart",JSON.stringify(getCartItem))
            toast.success("Deleted Successfully")
            window.location.reload()
            setTimeout(()=>{
              setLoad(false)
            },700)
      }
      const incQuantity=(index,id,quantity,price)=>{
        setLoad(true)
        console.log("quantity is ", quantity)
        var qty=parseInt(quantity)+1
        var total=parseInt(qty)*parseInt(price)
        console.log(qty,total)
        var getCartItem=JSON.parse(sessionStorage.getItem("cart"))
        var data=getCartItem[index]  
        data.quantity=qty
        data.total=total
        getCartItem[index]=data
        sessionStorage.setItem("cart", JSON.stringify(getCartItem))
        toast.success("Cart Updated Successfully!!")
        window.location.reload()
            setTimeout(()=>{
                setLoad(false)
            },700)
      }
      const decQuantity=async (index,id,quantity,price)=>{
        setLoad(true)
        if(quantity<=1){
            if(window.confirm("Do You want to delete this item??")){
            var getCartItem=JSON.parse(sessionStorage.getItem("cart"))
            if(index==getCartItem.length-1){
                getCartItem.pop()
            }
            else{
                let data=getCartItem.pop()
                getCartItem[index]=data
            }
            sessionStorage.setItem("cart",JSON.stringify(getCartItem))
            toast.success("Deleted Successfully")
            window.location.reload()
            setTimeout(()=>{
              setLoad(false)
            },700)
            }
        }
        else{
            var qty=parseInt(quantity)-1
            var total=parseInt(qty)*parseInt(price)
            var getCartItem=JSON.parse(sessionStorage.getItem("cart"))
            var data=getCartItem[index]  
            data.quantity=qty
            data.total=total
            getCartItem[index]=data
            sessionStorage.setItem("cart", JSON.stringify(getCartItem))
            toast.success("Cart Updated Successfully!!")
            window.location.reload()
            setTimeout(()=>{
                setLoad(false)
            },700)
        }
      }
      const handleOrder=(e)=>{
        e.preventDefault()
        setLoad(true)
        try {
            addDoc(collection(db, 'orders'), {
                user:sessionStorage.getItem("userId"),
                total:total,
                address:address,
                contact:contact,
                name:name,
                vendorName:vendorName,
                vendorId:vendorId,
                vendorEmail:vendorEmail,
                vendorContact:vendorContact,
                created: Timestamp.now(),
                status:"Pending"
            }).then((res)=>{
                allTask.map(
                    (el,index)=>{
                    addDoc(collection(db, 'orderDetails'), {
                        orderId:res.id,
                        price:el.price,
                        quantity:el.quantity,
                        item:el.item,
                        total:el.total,
                        created: Timestamp.now(),
                        status:"Active"
                    }).then(
                        (res)=>{
                            var getCartItem=JSON.parse(sessionStorage.getItem("cart"))
                            if(index==getCartItem.length-1){
                                getCartItem.pop()
                            }
                            else{
                                let data=getCartItem.pop()
                                getCartItem[index]=data
                            }
                            sessionStorage.setItem("cart",JSON.stringify([]))
                            window.location.reload()
                        }
                    )
                })
            })
            toast.success("Order Successfull!! Relax while we prepare your order!!")
            setTimeout(()=>{
                nav("/user/history")
                setLoad(false)
            },700)
        } catch (err) {
            toast.error("Something went wrong")
            setTimeout(()=>{
                setLoad(false)
            },700)
        }
      }
    
    return(
        <>
        <div className="d-flex justify-content-center">
                <ClipLoader loading={load} cssOverride={override} size={120}/>
            </div>
            <div className={load?"disabled-screen-full":""}> 
        <Header active={'product'}/>
        <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
            <div className="container text-center">
                <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{'maWidth': '500px'}}>
                    <h1 id="line1" className="display-3 animated slideInDown" style={{ 'textShadow': '5px 7px 5px rgb(190, 190, 190)'}}> Cart</h1>
                </div>
            </div>
        </div>
        <div className="viewtable container-fluid my-5">
        <table class="table table-bordered border-dark table-responsive">
            <thead id="line11" className="table-dark">
                <tr>
                    <th>Sno</th>
                    <th>Product name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody id="line6">
            {
                allTask?.map((category, index)=>{
                    {total+=parseInt(category?.total)}
                    return(
                        <tr key={index}>
        
                        <td>{index+1}</td>
                        <td>{category?.item}</td>
                        <td>&#8377;{category?.price}</td>
                        <td width="170px">
                            <div className='d-flex justify-content-start'>
                            <button className='btn btn-success' onClick={()=>{incQuantity(index,category?.id,category?.quantity,category?.price)}}>+</button>
                            <input value={category?.quantity} className='form-control w-25' readOnly/>
                            <button className='btn btn-danger' onClick={()=>{decQuantity(index,category?.id,category?.quantity,category?.price)}}>-</button>
                            </div>
                        </td>
                        <td>{category?.total}</td>
                        <td width="200px">
                            <button className="btn btn-danger" onClick={()=>{handleDelete(index)}}>
                            <i class="fa fa-trash"></i></button>
                        </td>
                    </tr>
                    )
                })
            }
            </tbody>
        </table>
        </div>
        {total>0?
            <div className="row">
                <div className="col-md text-center" >
                    <h5 id="line13" style={{fontSize:"30px"}}>Vendor Details:</h5> {allTask?.slice(0,1)?.map((el,index)=>(
                        <h4 id="line7" style={{fontSize:"30px"}}>
                            {el.vendorName},
                            <br/>
                            {el.vendorEmail}
                        </h4>
                    ))}
                </div>
            </div>
        :""}
            <div className="row">
                <div className="col-md-2"></div>
                <div class="col-lg-8">
                    <div class="cart-page-inner">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="cart-summary">
                                {total>0?
                                <>
                                    <div class="cart-content">
                                        <h1 id="line13">Cart Summary</h1>
                                        <h2 id="line9">Grand Total<span> &#8377;{total}</span></h2>
                                    
                                    <div class="cart-btn">
                                    <form id="line11" onSubmit={handleOrder}>
                                        <div className='row my-3'>
                                            <div className='col-md-3 mt-2'>
                                                <label>Name</label>
                                            </div>
                                            <div className='col-md'>
                                                <input type='text' placeholder='Enter your name' className='form-control' value={name} onChange={(e)=>{setName(e.target.value)}} required/>
                                            </div>
                                        </div>
                                        <div className='row my-3'>
                                            <div className='col-md-3 mt-2'>
                                                <label>Address</label>
                                            </div>
                                            <div className='col-md'>
                                                <input type='text' placeholder='Enter your address' className='form-control' value={address} onChange={(e)=>{setAddress(e.target.value)}} required/>
                                            </div>
                                        </div>
                                        <div className='row my-3'>
                                            <div className='col-md-3 mt-2'>
                                                <label>Contact</label>
                                            </div>
                                            <div className='col-md'>
                                                <input type='number' placeholder='Enter your contact' className='form-control' value={contact} onChange={(e)=>{setContact(e.target.value)}} required/>
                                            </div>
                                        </div>
                                        <button className='btn btn-primary mb-4 mx-auto d-block'>Checkout</button>
                                    </form>
                                    </div>
                                    </div>
                                </>
                                    :"Your Cart is Empty" 
                                }
                                  
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