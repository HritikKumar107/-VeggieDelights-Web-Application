import { Link } from "react-router-dom";
import Header from "./layout/Header";

export default function Home() {
    return (
        <>
            <Header active={'home'} />
            {/* <!-- Carousel Start --> */}
            <div className="container-fluid p-0 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="/assets/img/carousel-1.jpg" alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-10 ms-5" id="line1">
                                            <h1 id="line1" className="display-2 mb-5 animated slideInDown">Organic Food Is Good For Health</h1>
                                            <a href="/product" className="btn btn-primary rounded-pill py-sm-3 px-sm-5">Products</a>
                                            <a href="/features" className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3">Services</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="/assets/img/carousel-2.jpg" alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-10 ms-5" id="line1">
                                            <h1 id="line1" className="display-2 animated slideInDown">Natural Food Is Always Healthy</h1>
                                            <a href="/product" className="mt-5 btn btn-primary rounded-pill py-sm-3 px-sm-5">Products</a>
                                            <a href="/features" className="mt-5 btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3">Services</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* <!-- Carousel End --> */}


            {/* <!-- About Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow startInLeft" data-wow-delay="0.5s">
                            <div className="about-img position-relative overflow-hidden p-5 pe-0">
                                <img className="img-fluid w-100" src="/assets/img/about.jpg" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <h1 id="line3" className="display-5 mb-4">Best Organic Fruits And Vegetables</h1>
                            <p style={{ fontSize: "18px" }} id="line4" className="mb-4">Vegetables and fruits are an important part of a healthy diet, and variety is as important as quantity.
                                No single fruit or vegetable provides all of the nutrients you need to be healthy. Eat plenty every day.</p>
                            <p id="line5"><i className="fa fa-check text-primary me-3"></i>Freshly gathered vegetables,Authentic and Organic.</p>
                            <p id="line5"><i className="fa fa-check text-primary me-3"></i>Never processed, only fresh,Eat natural, eat organic.</p>
                            <p id="line5"><i className="fa fa-check text-primary me-3"></i>Direct from mother nature herself,Real food. Real health.</p>
                            <a id="line8" className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}


            {/* <!-- Feature Start --> */}
            <div className="container-fluid bg-light bg-icon my-5 py-6">
                <div className="container">
                    <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ 'maxWidth': '500px' }}>
                        <h1 id="line3" className="display-5 mb-3">Our Features</h1>
                        <p id="line5" style={{ fontSize: "25px" }}>Some Key Features.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-delay="0.3s">
                            <div className="bg-white text-center h-100 p-4 p-xl-5">
                                <img className="img-fluid mb-4" src="/assets/img/icon-1.png" alt="" />
                                <h4 id="line6" className="mb-3">Direct From Farms</h4>
                                <p id="line7" className="mb-4">"Direct from farm vegetables - picked at peak ripeness for maximum flavor and nutrition.
                                    Experience the freshness and flavor of vegetables straight from the farm to your table."</p>
                                <a id="line8" className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="bg-white text-center h-100 p-4 p-xl-5">
                                <img className="img-fluid mb-4" src="/assets/img/icon-2.png" alt="" />
                                <h4 id="line6" className="mb-3">All Natural And Organic</h4>
                                <p id="line7" className="mb-4">"Choose natural and organic fruits and vegetables for a healthier you and a healthier planet.
                                    Experience the true taste of nature with our natural and organic produce."</p>
                                <a id="line8" className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-delay="0.3s">
                            <div className="bg-white text-center h-100 p-4 p-xl-5">
                                <img className="img-fluid mb-4 mt-3" src="/assets/img/icon-3.png" alt="" />
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


            {/* <!-- Product Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-0 gx-5 align-items-end">
                        <div className="col-lg-6">
                            <div className="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ 'maxWidth': '500px' }}>
                                <h1 id="line3" className="display-5 mb-3">Our Products</h1>
                                <p id="line7" style={{ fontSize: "18px" }}>Eat your vegetables, have a positive outlook, be kind to people, and smile.Healthy eating with organic vegetables & fruits.</p>
                            </div>
                        </div>
                        <div id="line8" className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                            <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                                <li className="nav-item me-2">
                                    <a className="btn btn-outline-primary border-2 active" data-bs-toggle="pill" href="#tab-1">All</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-2">Fruits </a>
                                </li>
                                <li className="nav-item me-0">
                                    <a className="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-3">Vegetables</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/product-4.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Strawberry</a>
                                            <span id="line12" className="text-primary me-1">₹310/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹400/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/featured/feature-4.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">WaterMelon</a>
                                            <span id="line12" className="text-primary me-1">₹70/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹150/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/blog/blog-2.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Green Peas</a>
                                            <span id="line12" className="text-primary me-1">₹40/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹60/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/product-7.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Potato</a>
                                            <span id="line12" className="text-primary me-1">₹15/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹30/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/product-1.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Tomato</a>
                                            <span id="line12" className="text-primary me-1">₹35/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹50/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/featured/feature-7.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Mango</a>
                                            <span id="line12" className="text-primary me-1">₹35/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹50/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/blog/sidebar/sr-3.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Guava</a>
                                            <span id="line12" className="text-primary me-1">₹60/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹100/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/product-5.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Cucumber</a>
                                            <span id="line12" className="text-primary me-1">₹29.35/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹45/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/categories/cat-1.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Orange</a>
                                            <span id="line12" className="text-primary me-1">₹19.5/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹40/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/product-2.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                 /user/cart<a id="line10" className="d-block h5 mb-2" href="">Pineapple</a>
                                            <span id="line12" className="text-primary me-1">₹80.36/pc</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹110/pc</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/product-3.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Chillies</a>
                                            <span id="line12" className="text-primary me-1">₹50/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹80/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/product-8.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Banana</a>
                                            <span id="line12" className="text-primary me-1">₹35/12pc</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹80/12pc</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div id="line8" className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                                    <a className="btn btn-primary rounded-pill py-3 px-5" href="/product">Browse More Products</a>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/blog/blog-2.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Green Peas</a>
                                            <span id="line12" className="text-primary me-1">₹40/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹60/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/product-7.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Potato</a>
                                            <span id="line12" className="text-primary me-1">₹15/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹30/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/categories/cat-1.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Orange</a>
                                            <span id="line12" className="text-primary me-1">₹19.5/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹40/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/product-1.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Tomato</a>
                                            <span id="line12" className="text-primary me-1">₹35/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹50/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/blog/sidebar/sr-3.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Guava</a>
                                            <span id="line12" className="text-primary me-1">₹60/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹100/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/featured/feature-4.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">WaterMelon</a>
                                            <span id="line12" className="text-primary me-1">₹70/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹150/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/product-4.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Strawberry</a>
                                            <span id="line12" className="text-primary me-1">₹310/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹400/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/product-2.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Pineapple</a>
                                            <span id="line12" className="text-primary me-1">₹80.36/pc</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹110/pc</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/featured/feature-7.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Mango</a>
                                            <span id="line12" className="text-primary me-1">₹35/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹50/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/product-8.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Banana</a>
                                            <span id="line12" className="text-primary me-1">₹35/12pc</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹80/12pc</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/product-3.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Chillies</a>
                                            <span id="line12" className="text-primary me-1">₹50/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹80/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/product-5.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Cucumber</a>
                                            <span id="line12" className="text-primary me-1">₹29.35/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹45/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div id="line8" className="col-12 text-center">
                                    <a className="btn btn-primary rounded-pill py-3 px-5" href="/product">Browse More Products</a>
                                </div>
                            </div>
                        </div>
                        <div id="tab-3" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/product-1.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Tomato</a>
                                            <span id="line12" className="text-primary me-1">₹35/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹50/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/product-2.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Pineapple</a>
                                            <span id="line12" className="text-primary me-1">₹80.36/pc</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹110/pc</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/product-3.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Chillies</a>
                                            <span id="line12" className="text-primary me-1">₹50/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹80/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/product-4.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Strawberry</a>
                                            <span id="line12" className="text-primary me-1">₹310/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹400/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/product-5.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Cucumber</a>
                                            <span id="line12" className="text-primary me-1">₹29.35/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹45/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/img/categories/cat-1.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Orange</a>
                                            <span id="line12" className="text-primary me-1">₹19.5/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹40/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/product-7.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Potato</a>
                                            <span id="line12" className="text-primary me-1">₹15/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹30/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/product-8.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Banana</a>
                                            <span id="line12" className="text-primary me-1">₹35/12pc</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹80/12pc</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/blog/blog-2.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Green Peas</a>
                                            <span id="line12" className="text-primary me-1">₹40/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹60/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/blog/sidebar/sr-3.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Guava</a>
                                            <span id="line12" className="text-primary me-1">₹60/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹100/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/featured/feature-4.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">WaterMelon</a>
                                            <span id="line12" className="text-primary me-1">₹70/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹150/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cart"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="product-item">
                                        <div id="line9" className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-100" src="/assets/img/featured/feature-7.jpg" alt="" />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a id="line10" className="d-block h5 mb-2" href="">Mango</a>
                                            <span id="line12" className="text-primary me-1">₹35/kg</span>
                                            <span id="line12" className="text-body text-decoration-line-through">₹50/kg</span>
                                        </div>
                                        <div id="line11" className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="/product"><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="/user/cartf"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div id="line8" className="col-12 text-center">
                                    <a className="btn btn-primary rounded-pill py-3 px-5" href="/product">Browse More Products</a>
                                </div>
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
            {/* <!-- Testimonial End --> */}


            {/* <!-- Blog Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ 'maxWidth': '500px' }}>
                        <h1 id="line3" className="display-5 mb-3">Latest Blog</h1>
                        <p id="line7">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid" src="/assets/img/blog-1.jpg" alt="" />
                            <div className="bg-light p-4">
                                <a id="line5" className="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                                <div id="line4" className="text-muted border-top pt-4">
                                    <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Client</small>
                                    <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>28 Oct, 2014</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <img className="img-fluid" src="/assets/img/blog-2.jpg" alt="" />
                            <div className="bg-light p-4">
                                <a id="line5" className="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                                <div id="line4" className="text-muted border-top pt-4">
                                    <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Admin</small>
                                    <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>15 May, 2015</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <img className="img-fluid" src="/assets/img/blog-3.jpg" alt="" />
                            <div className="bg-light p-4">
                                <a id="line5" className="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                                <div id="line4" className="text-muted border-top pt-4">
                                    <small className="me-3"><i className="fa fa-user text-primary me-2"></i>Vendor</small>
                                    <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>30 Jun, 2017</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Blog End --> */}
        </>
    )
}