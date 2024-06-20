import { Link } from "react-router-dom";
import Header from "./layout/Header";

export default function Error(){
    return(
        <>
        <Header active={'error'}/>
        {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <h1 id="line1" className="display-3 mb-3 animated slideInDown">404 Error</h1>
            <nav id="line5" aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><Link className="text-body" to={'/home'}>Home</Link></li>

                    <div className="breadcrumb-item nav-item dropdown">
                        <a className="text-body dropdown-toggle" data-bs-toggle="dropdown" href="#">Pages</a>
                        <div className="dropdown-menu m-0">
                            <Link to={'/blog_grid'} className="dropdown-item">Blog Grid</Link>
                            <Link to={'/features'} className="dropdown-item">Our Features</Link>
                            <Link to={'/testimonial'} className="dropdown-item">Testimonial</Link>
                        </div>
                    </div>

                    <li className="breadcrumb-item text-dark active" aria-current="page">404 Error</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- 404 Start --> */}
    <div className="container-xxl py-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                    <h1 id="line3" className="display-1">404</h1>
                    <h1 id="line3" className="mb-4">Page Not Found</h1>
                    <p id="line5" className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                    <Link id="line5" className="btn btn-primary rounded-pill py-3 px-5" to={'/'}>Go Back To Home</Link>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- 404 End --> */}
        </>
    )
}