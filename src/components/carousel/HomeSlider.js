import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeSlider() {
  return (
    <section id="hero-animated" className="hero-animated d-flex align-items-center">
        <div className="container d-flex flex-column justify-content-center align-items-center text-center position-relative" data-aos="zoom-out">
            <img src="../../assets/img/hero-carousel/hero-carousel-3.svg" className="img-fluid animated" alt="" />
            <h2>Welcome to <span>HeroBiz</span></h2>
            <p>Et voluptate esse accusantium accusamus natus reiciendis quidem voluptates similique aut.</p>
            <div className="d-flex">
                <Link to={'/'} className="btn-get-started scrollto">Get Started</Link>
                <Link to={'https://www.youtube.com/watch?v=LXb3EKWsInQ'} className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></Link>
            </div>
        </div>
    </section>
  )
}
