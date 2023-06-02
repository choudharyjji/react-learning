import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
        <footer id="footer" className="footer">
            {/* Upper Footer */}
            <div className="footer-content">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                                <h3>HeroBiz</h3>
                                <p>
                                    A108 Adam Street <br />
                                    NY 535022, USA<br /><br />
                                    <strong>Phone:</strong> +1 5589 55488 55<br />
                                    <strong>Email:</strong> info@example.com<br />
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <Link to={'/'}>Home</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link to={'/'}>About us</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link to={'/'}>Services</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link to={'/'}>Terms of service</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link to={'/'}>Privacy policy</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <Link to={'/'}>Web Design</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link to={'/'}>Web Development</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link to={'/'}>Product Management</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link to={'/'}>Marketing</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link to={'/'}>Graphic Design</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Our Newsletter</h4>
                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post">
                                    <input type="email" name="email" />
                                    <input type="submit" value="Subscribe" />
                                </form>

                        </div>

                    </div>
                </div>
            </div>
            {/* Bootom Footer */}
            <div className="footer-legal text-center">
                <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

                    <div className="d-flex flex-column align-items-center align-items-lg-start">
                        <div className="copyright">
                            &copy; Copyright <strong><span>HeroBiz</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            Designed by <Link to={"https://bootstrapmade.com/"}>BootstrapMade</Link>
                        </div>
                    </div>

                    <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
                        <Link to={'/'} className="twitter"><i className="bi bi-twitter"></i></Link>
                        <Link to={'/'} className="facebook"><i className="bi bi-facebook"></i></Link>
                        <Link to={'/'} className="instagram"><i className="bi bi-instagram"></i></Link>
                        <Link to={'/'} className="google-plus"><i className="bi bi-skype"></i></Link>
                        <Link to={'/'} className="linkedin"><i className="bi bi-linkedin"></i></Link>
                    </div>

                </div>
            </div>
        </footer>

        <Link to={'/'} className="scroll-top d-flex align-items-center justify-content-center">
            <i className="bi bi-arrow-up-short"></i>
        </Link>

        {/* <div id="preloader"></div> */}
    </>
  )
}
