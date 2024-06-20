import { Link } from "react-router-dom";
import Header from "./layout/Header";

export default function Testimonial(){
    return(
        <>
        <Header active={'testimonial'}/>
         {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <h1 id="line1" className="display-3 mb-3 animated slideInDown">Testimonial</h1>
            <nav id="line5" aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><Link className="text-body" to={'/home'}>Home</Link></li>

                    <div className="breadcrumb-item nav-item dropdown">
                        <a className="text-body dropdown-toggle" data-bs-toggle="dropdown" href="#">Pages</a>
                        <div className="dropdown-menu m-0">
                            <Link to={'/blog_grid'} className="dropdown-item">Blog Grid</Link>
                            <Link to={'/features'} className="dropdown-item">Our Features</Link>
                            <Link to={'/error'} className="dropdown-item">404 Page</Link>
                        </div>
                    </div>

                    <li className="breadcrumb-item text-dark active" aria-current="page">Testimonial</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Testimonial Start --> */}
    <div className="container-fluid bg-light bg-icon py-6 mb-5">
        <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{'maxWidth': '500px'}}>
                <h1 id="line3" className="display-5 mb-3">Customer Review</h1>
                <p id="line7">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="testimonial-carousel" >
                <div className="testimonial-item position-relative bg-white p-5 mt-4 wow slideInRight" data-wow-delay="0.1s">
                    <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                    <p id="line7" className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 rounded-circle" src="/assets/img/testimonial-1.jpg" alt=""/>
                        <div className="ms-3">
                            <h5 id="line3" className="mb-1" style={{fontSize:"26px"}}>Client Name</h5>
                            <span id="line2" style={{fontSize:"18px"}}>Profession</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item position-relative bg-white p-5 mt-4 wow slideInRight" data-wow-delay="0.1s">
                    <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                    <p id="line7" className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 rounded-circle" src="/assets/img/testimonial-2.jpg" alt=""/>
                        <div className="ms-3">
                            <h5 id="line3" className="mb-1" style={{fontSize:"26px"}}>Client Name</h5>
                            <span id="line2" style={{fontSize:"18px"}}>Profession</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item position-relative bg-white p-5 mt-4 wow slideInRight" data-wow-delay="0.1s">
                    <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                    <p id="line7" className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 rounded-circle" src="/assets/img/testimonial-3.jpg" alt=""/>
                        <div className="ms-3">
                            <h5 id="line3" className="mb-1" style={{fontSize:"26px"}}>Client Name</h5>
                            <span id="line2" style={{fontSize:"18px"}}>Profession</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item position-relative bg-white p-5 mt-4 wow slideInRight" data-wow-delay="0.1s">
                    <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                    <p id="line7" className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 rounded-circle" src="/assets/img/testimonial-4.jpg" alt=""/>
                        <div className="ms-3">
                            <h5 id="line3" className="mb-1" style={{fontSize:"26px"}}>Client Name</h5>
                            <span id="line2" style={{fontSize:"18px"}}>Profession</span>
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