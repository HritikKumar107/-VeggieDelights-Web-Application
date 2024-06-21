import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <>
        {/* <!-- Footer Start --> */}
    <div className="container-fluid bg-dark footer pt-5 wow fadeIn" data-wow-delay="0.5s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h2 id="line2" style={{fontSize:"40px"}} className="fw-bold text-primary mb-4">Veggie <span className="text-secondary">Delights</span></h2>
                    <p id="line7">Online markets can also provide flexibility for both vendors and consumers, as they allow for the sall of their fruits and vegetables.</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 id="line3" style={{fontSize:"28px"}} className="text-light mb-4">Address</h4>
                    <p id="line7"><i className="fa fa-map-marker-alt me-3"></i>72-A/Block, Model House,Jalandhar, Punjab-144003</p>
                    <p id="line7"><i className="fa fa-phone-alt me-3"></i>+(91)7657860413</p>
                    <p id="line7"><a href="mailto: Hritikk256@gmail.com"><i className="fa fa-envelope me-3"></i>Hritikk256@gmail.com</a></p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 id="line3" style={{fontSize:"28px"}} className="text-light mb-4">Quick Links</h4>
                    <Link id="line7" className="btn btn-link" to={'/about'}>About Us</Link>
                    <Link id="line7" className="btn btn-link" to={'/contact'}>Contact Us</Link>
                    <Link id="line7" className="btn btn-link" to={'/features'}>Our Services</Link>
                    <Link id="line7" className="btn btn-link" to={'/'}>Terms & Condition</Link>
                    <Link id="line7" className="btn btn-link" to={'/'}>Support</Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 id="line3" style={{fontSize:"28px"}} className="text-light mb-4">Newsletter</h4>
                    <p id="line7">If you have any questions, comments, or concerns, please don't hesitate to reach out to us.</p>
                    <div id="line7" className="position-relative mx-auto" style={{'max-width': '400px'}}>
                        <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="line7" className="container-fluid copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">Created By &copy; Hritik Kumar <a href="#"></a>
                    </div>
                    <div className="col-md-6 text-center text-md-end">

                    Designed With <a href="https://htmlcodex.com">HTML, CSS, JavaScript, ReactJS</a>
                    <span><a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></a></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}
        </>
    )
}