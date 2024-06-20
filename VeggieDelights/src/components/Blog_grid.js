import { Link } from "react-router-dom";
import Header from "./layout/Header";

export default function Blog_grid(){
    return(
        <>
        <Header active={'blog_grid'}/>
        {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <h1 id="line1" className="display-3 mb-3 animated slideInDown">Blog Grid</h1>
            <nav id="line5" aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><Link className="text-body" to={'/home'}>Home</Link></li>

                    <div className="breadcrumb-item nav-item dropdown">
                        <a className="text-body dropdown-toggle" data-bs-toggle="dropdown" href="#">Pages</a>
                        <div className="dropdown-menu m-0">
                            <Link to={'/features'} className="dropdown-item">Our Features</Link>
                            <Link to={'/testimonial'} className="dropdown-item">Testimonial</Link>
                            <Link to={'/error'} className="dropdown-item">404 Page</Link>
                        </div>
                    </div>

                    <li className="breadcrumb-item text-dark active" aria-current="page">Blog Grid</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Blog Start --> */}
    <div className="container-xxl py-6">
    <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{'maxWidth': '500px'}}>
                <h1 id="line3" className="display-5 mb-3">Latest Blog</h1>
                <p id="line7">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <img className="img-fluid" src="/assets/img/blog-1.jpg" alt=""/>
                    <div className="bg-light p-4">
                        <a id="line5" className="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                        <div id="line4" className="text-muted border-top pt-4">
                            <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Client</small>
                            <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>28 Oct, 2014</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <img className="img-fluid" src="/assets/img/blog-2.jpg" alt=""/>
                    <div className="bg-light p-4">
                        <a id="line5" className="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                        <div id="line4" className="text-muted border-top pt-4">
                            <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Admin</small>
                            <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>15 May, 2015</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <img className="img-fluid" src="/assets/img/blog-3.jpg" alt=""/>
                    <div className="bg-light p-4">
                        <a id="line5" className="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                        <div id="line4" className="text-muted border-top pt-4">
                            <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Vendor</small>
                            <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>30 Jun, 2017</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <img className="img-fluid" src="/assets/img/blog-1.jpg" alt=""/>
                    <div className="bg-light p-4">
                        <a id="line5" className="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                        <div id="line4" className="text-muted border-top pt-4">
                            <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Client</small>
                            <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>28 Oct, 2014</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <img className="img-fluid" src="/assets/img/blog-2.jpg" alt=""/>
                    <div className="bg-light p-4">
                        <a id="line5" className="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                        <div id="line4" className="text-muted border-top pt-4">
                            <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Admin</small>
                            <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>15 May, 2015</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <img className="img-fluid" src="/assets/img/blog-3.jpg" alt=""/>
                    <div className="bg-light p-4">
                        <a id="line5" className="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                        <div id="line4" className="text-muted border-top pt-4">
                            <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Vendor</small>
                            <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>30 Jun, 2017</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <img className="img-fluid" src="/assets/img/blog-1.jpg" alt=""/>
                    <div className="bg-light p-4">
                        <a id="line5" className="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                        <div id="line4" className="text-muted border-top pt-4">
                            <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Client</small>
                            <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>28 Oct, 2014</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <img className="img-fluid" src="/assets/img/blog-2.jpg" alt=""/>
                    <div className="bg-light p-4">
                        <a id="line5" className="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                        <div id="line4" className="text-muted border-top pt-4">
                            <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Admin</small>
                            <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>15 May, 2015</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <img className="img-fluid" src="/assets/img/blog-3.jpg" alt=""/>
                    <div className="bg-light p-4">
                        <a id="line5" className="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                        <div id="line4" className="text-muted border-top pt-4">
                            <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Vendor</small>
                            <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>30 Jun, 2017</small>
                        </div>
                    </div>
                </div>
                <div id="line7" className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                    <a className="btn btn-primary rounded-pill py-3 px-5" href="">Load More</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Blog End --> */}
        </>
    )
}