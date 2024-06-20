import { Link } from "react-router-dom";
import Header from "./layout/Header";

export default function Features(){
    return(
        <>
        <Header active={'features'}/>
        {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <h1 id="line1" className="display-3 mb-3 animated slideInDown">Features</h1>
            <nav id="line5" aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><Link className="text-body" to={'/home'}>Home</Link></li>

                    <div className="breadcrumb-item nav-item dropdown">
                        <a className="text-body dropdown-toggle" data-bs-toggle="dropdown" href="#">Pages</a>
                        <div className="dropdown-menu m-0">
                            <Link to={'/blog_grid'} className="dropdown-item">Blog Grid</Link>
                            <Link to={'/testimonial'} className="dropdown-item">Testimonial</Link>
                            <Link to={'/error'} className="dropdown-item">404 Page</Link>
                        </div>
                    </div>

                    <li className="breadcrumb-item text-dark active" aria-current="page">Features</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Feature Start --> */}
    <div className="container-fluid bg-light bg-icon my-5 py-6">
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