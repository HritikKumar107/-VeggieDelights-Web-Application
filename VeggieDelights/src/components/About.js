import { Link } from "react-router-dom";
import Header from "./layout/Header";

export default function About(){
    return(
        <>
        <Header active={'about'}/>
        {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <h1 id="line1" className="display-3 mb-3 animated slideInDown">About Us</h1>
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

                    <li className="breadcrumb-item text-dark active" aria-current="page">About Us</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- About Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="about-img position-relative overflow-hidden p-5 pe-0">
                        <img className="img-fluid w-100" src="/assets/img/about.jpg"/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 id="line3" className="display-5 mb-4">Best Organic Fruits And Vegetables</h1>
                    <p style={{fontSize:"18px"}} id="line4" className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <p id="line5"><i className="fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
                    <p id="line5"><i className="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
                    <p id="line5"><i className="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p>
                    <a id="line8" className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Read More</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}


    {/* <!-- Firm Visit Start --> */}
    <div className="container-fluid bg-primary bg-icon mt-5 py-6">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-md-7 wow slideInLeft" data-wow-delay="0.5s">
                    <h1 id="line3" className="display-5 text-white mb-3">Visit Our Firm</h1>
                    <p id="line7" className="text-white mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                </div>
                <div className="col-md-5 text-md-end wow slideInRight" data-wow-delay="0.5s">
                    <a id="line8" style={{fontSize:"20px"}} className="btn btn-lg btn-secondary rounded-pill py-3 px-5" href="">Visit Now</a>
                </div>
            </div>
        </div>
        </div>
    {/* <!-- Firm Visit End --> */}


    {/* <!-- Feature Start --> */}
    <div className="container-fluid bg-light bg-icon py-6">
        <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{'maxWidth': '500px'}}>
                <h1 id="line3" className="display-5 mb-3">Our Features</h1>
                <p id="line5" style={{fontSize:"25px"}}>Some Key Features.</p>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-delay="0.3s">
                    <div className="bg-white text-center h-100 p-4 p-xl-5">
                        <img className="img-fluid mb-4" src="/assets/img/icon-1.png" alt=""/>
                        <h4 id="line6" className="mb-3">Direct From Farms</h4>
                        <p id="line7" className="mb-4">"Direct from farm vegetables - picked at peak ripeness for maximum flavor and nutrition.
                        Experience the freshness and flavor of vegetables straight from the farm to your table."</p>
                        <a id="line8" className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="bg-white text-center h-100 p-4 p-xl-5">
                        <img className="img-fluid mb-4" src="/assets/img/icon-2.png" alt=""/>
                        <h4 id="line6" className="mb-3">All Natural And Organic</h4>
                        <p id="line7" className="mb-4">"Choose natural and organic fruits and vegetables for a healthier you and a healthier planet.
                        Experience the true taste of nature with our natural and organic produce."</p>
                        <a id="line8" className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-delay="0.3s">
                    <div className="bg-white text-center h-100 p-4 p-xl-5">
                        <img className="img-fluid mb-4 mt-3" src="/assets/img/icon-3.png" alt=""/>
                        <h4 id="line6" className="mb-3">Online Market Place For Vendors</h4>
                        <p id="line7" className="mb-4">Online market for Vendors and Hawkers selling natural and organic fruits and vegetables.
                        Online markets can provide an opportunity for small-scale growers to reach a wider audience and sell their products directly to consumers.</p>
                        <a id="line8" className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Feature End --> */}
        </>
    )
}