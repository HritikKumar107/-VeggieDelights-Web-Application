/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Header from "./layout/Header";
import { Link } from "react-router-dom";
import {ClipLoader} from "react-spinners"
import { useEffect, useState } from "react";
import { collection, getCountFromServer, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "./Firebase";
export default function Dashboard(){
	const [load,setLoad]=useState(true)   
    const override={
        "display":"block",
        "margin":"0 auto",
        "position":"absolute",
        "top":"50%",
        "bottom":"50%",
        "zIndex":"1",
    }
	const [allTask , setTask] = useState([])
    const [cat,setCat]=useState(0)
    const [brand,setbrand]=useState(0)
    const [order,setorder]=useState(0)
    const [veh,setveh]=useState(0)
    useEffect(()=>{
        getCount1()
        getCount2()
        getCount3()
        getCount4()
    },[])
  const getCount1=async ()=>{
    const coll = collection(db, "Category");
    const snapshot = await getCountFromServer(coll);
    setCat(snapshot.data().count);
    setTimeout(()=>{
        setLoad(false)
    },700)
  }
  const getCount2=async ()=>{
    const coll1 = collection(db, "Products");
    const snapshot1 = await getCountFromServer(coll1);
    setbrand(snapshot1.data().count);
  }
    const getCount3=async ()=>{
    const col2 = collection(db, "users");
    const snapshot2 = await getCountFromServer(col2);
    setveh(snapshot2.data().count);
    }
    const getCount4=async ()=>{
      const coll3 = collection(db, "orders");
      const snapshot3 = await getCountFromServer(coll3);
      setorder(snapshot3.data().count);
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

	<Header active={'dashboard'}/>
      <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
          <div className="container">
              <h1 id="line1" className="display-3 mb-3 animated slideInDown">Admin's Dashboard</h1>
              <nav id="line5" aria-label="breadcrumb animated slideInDown">
                  <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item"><Link className="text-body" to={'/home'}>Home</Link></li>
                      <li className="breadcrumb-item text-dark active" aria-current="page">Dashboard</li>
               </ol>
              </nav>
          </div>
      </div>

      <div className="container-fluid ">
        <div className="row g-5 justify-content-center">
          <div className="col-lg-12 col-md-12 " >
	          <section id="content">
		          <main>
			          <ul class="box-info wow fadeInUp" data-wow-delay="0.5s">
				          <li>
					          <i class='bx bxs-calendar-check' ></i>
					          <span class="text">
						          <h3 id="line11">{order}</h3>
						          <p id="line4">Total Order</p>
					          </span>
				          </li>
				          <li>
					          <i class='bx bxs-group' ></i>
					          <span class="text">
						          <h3 id="line11">{veh}</h3>
						          <p id="line4">Users</p>
					          </span>
				          </li>
				          <li>
					          <i class='bx bxs-dollar-circle' ></i>
					          <span class="text">
						          <h3 id="line11">{brand}</h3>
						          <p id="line4">Total Products</p>
					          </span>
				          </li>
			          </ul>


			          <div class="table-data">
				          <div class="order wow fadeInUp" data-wow-delay="0.5s">
					          <div class="head">
						          <h3 id="line1">Recent Orders</h3>
						          <i class='bx bx-search' ></i>
						          <i class='bx bx-filter' ></i>
					          </div>
					          <table>
						          <thead id="line4">
							          <tr>
								          <th>User</th>
								          <th>Date Order</th>
										  <th>Total Amount</th>
								          <th>Status</th>
							          </tr>
						          </thead>
						          <tbody id="line11">
									{allTask?.slice(0,6)?.map((el,index)=>(
							        <tr>
								      <td>
									      <p>{el.data.name}</p>
								      </td>
								      <td>{getdate(el.data.created)}</td>
									  <td>&#8377;{el.data.total}</td>
								      <td><span class={el.data.status=="Pending"?"status pending":el.data.status=="Approve"?"status pending":"status process"}>{el.data.status}</span></td>
							        </tr>
									))}
						          </tbody>
					          </table>
				          </div>
				        
			          </div>
		          </main>
	          </section>
          </div>
        </div>
      </div>
      </div>

    </>
    )
}