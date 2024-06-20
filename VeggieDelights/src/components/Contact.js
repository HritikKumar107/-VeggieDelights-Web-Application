import { Link } from "react-router-dom";
import Header from "./layout/Header";
import { useState } from "react"
import { db } from "./Firebase";
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners"
export default function Contact() {
    const [name, setname] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setsubject] = useState('')
    const [message, setmessage] = useState('')
    const [load, setLoad] = useState(false)
    const override = {
        "display": "block",
        "margin": "0 auto",
        "position": "absolute",
        "top": "50%",
        "bottom": "50%",
        "zIndex": "1",
    }
    const handleform = async (e) => {
        e.preventDefault();
        setLoad(true)
        try {
            await addDoc(collection(db, 'contact'), {
                name: name,
                subject: subject,
                message: message,
                email: email,
                created: Timestamp.now()
            })

            setname("")
            setsubject("")
            setmessage("")
            setEmail("")
            setTimeout(() => {
                setLoad(false)
            }, 700)
            toast.success("Record Inserted")
        } catch (err) {
            toast.error(err)
            setTimeout(() => {
                setLoad(false)
            }, 700)
        }

    }
    return (
        <>
            <div className="d-flex justify-content-center">
                <ClipLoader loading={load} cssOverride={override} size={120} />
            </div>
            <div className={load ? "disabled-screen-full" : ""}>
                <Header active={'contact'} />
                {/* <!-- Page Header Start --> */}
                <div className="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
                    <div className="container">
                        <h1 id="line1" className="display-3 mb-3 animated slideInDown">Contact Us</h1>
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

                                <li className="breadcrumb-item text-dark active" aria-current="page">Contact Us</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* <!-- Page Header End --> */}

                {/* <!-- Contact Start --> */}
                <div className="container-xxl py-6">
                    <div className="container">
                        <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ 'maxWidth': '500px' }}>
                            <h1 id="line3" className="display-5 mb-3">Contact Us</h1>
                        </div>
                        <div className="row g-5 justify-content-center">
                            <div className="col-lg-5 col-md-12 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="bg-primary text-white d-flex flex-column justify-content-center h-100 p-5">
                                    <h5 id="line4" className="text-white">Call Us</h5>
                                    <p id="line11" className="mb-5"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                                    <h5 id="line4" className="text-white">Email Us</h5>
                                    <p id="line11" className="mb-5"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                                    <h5 id="line4" className="text-white">Office Address</h5>
                                    <p id="line11" className="mb-5"><i className="fa fa-map-marker-alt me-3"></i>123 Street, Jalandhar, India</p>
                                    <h5 id="line4" className="text-white">Follow Us</h5>
                                    <div className="d-flex pt-2">
                                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-youtube"></i></a>
                                        <a className="btn btn-square btn-outline-light rounded-circle me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                                <p id="line7" className="mb-4">"Thank you for your interest in our online market for natural and organic fruits and vegetables!
                                    We are always happy to hear from our customers and vendors.If you have any questions, comments, or concerns,
                                    please don't hesitate to reach out to us. You can contact us by email at <a href="mailto: Hritikk256@gmail.com">Hritikk256@gmail.com</a> or
                                    by phone at (+91)7657860413.</p>
                                <form id="line7" method="post" onSubmit={handleform}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name" required value={name} onChange={(e) => { setname(e.target.value) }} />
                                                <label for="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="Your Email" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                                <label for="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="subject" placeholder="Subject" value={subject} onChange={(e) => { setsubject(e.target.value) }} required />
                                                <label for="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ 'height': '200px' }} onChange={(e) => { setmessage(e.target.value) }} value={message} />
                                                <label for="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Contact End --> */}


                {/* <!-- Google Map Start --> */}
                <div className="container-xxl px-0 wow fadeIn" data-wow-delay="0.1s" style={{ 'margin-bottom': '-6px' }}>
                    <iframe className="w-100" style={{ 'height': '450px' }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                        frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
            {/* <!-- Google Map End --> */}
        </>
    )
}