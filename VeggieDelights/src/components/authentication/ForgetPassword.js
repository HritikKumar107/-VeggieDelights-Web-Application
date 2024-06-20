import { sendPasswordResetEmail } from "firebase/auth";
import { Link} from "react-router-dom"
import { auth } from "../Firebase";
import Header from "../layout/Header";

export default function ForgetPassword(){
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const emailValue = e.target.add.value;
        console.log(emailValue);

        sendPasswordResetEmail(auth, emailValue).then((data, error) => {
            alert("Check your Email")
        }).catch(error => {
            alert(error)
        })
    }
    return(
        <>
        <Header/>
        <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <h1 id="line1" className="display-3 mb-3 animated slideInDown" style={{ 'textShadow': '5px 7px 5px rgb(190, 190, 190)'}}>Forget Password</h1>
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
                    <li className="breadcrumb-item text-dark active" aria-current="page">Forget Password</li>
                </ol>
            </nav>
        </div>
    </div>

    <div className="container-xxl py-6 ">
        <div className="container">
            <div className="row g-5 justify-content-center">
                <div className="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.5s">

              
                    <div className="card text-black shadow" style={{ 'borderRadius': '25px' }}>
                        <div className="card-body ">
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                    <p id="line3" className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ 'textShadow': '5px 7px 3px rgb(198, 190, 190)'}}>Forget Password</p>

                                    <form id="line11" className="mx-1 mx-md-4" onSubmit={(e)=>{handleSubmit(e)}}>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="email" id="add" className="form-control" required placeholder="Enter your email"/>
                                                <label className="form-label" htmlFor="add">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center mb-3 mb-lg-4 ms-4">
                                            <button type="submit" className="btn btn-primary btn-lg rounded-pill me-4">Forget</button>
                                        </div>
                                    </form>
                                </div>
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