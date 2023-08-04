import React from "react";
import End from './End';
import './Home.css';

function Home() {
    return(
        <div className='Home'>
            {/* university-img */}
            <div className="university-img">
                <img src={"../images/Home/university.jpg"} className=".img-fluid"></img>
            </div>
            {/* about */}
            <div className="about-1">
                <div className="about-1-inner">
                    <h3>Welcome to</h3>
                    <h1>Make You University</h1>
                    <h4>Real World Learning for Employability</h4>
                    <p>This University is a leading Private Higher Education Institution situated in the coastal town of Port Alfred offering full degree programs in Disaster Management and Hospitality Management. Not only are these programs unique, but our approach to higher education is unparalleled.
                    This University is registered by the Department of Education under number 2002/HE10/001. Our degrees are accredited by the Higher Education Quality Committee and registered by Universities South Africa. The Bachelor of Commerce Hospitality Management degree is registered under number 63710, and the Bachelor of Business Administration Disaster Relief Management is registered under number 90536.
                    </p>
                    <button type="button" className="btn btn-light">Apply Now!</button>
                </div>
            </div>

            {/* carousal-1 */}
            <div id="carouselExampleControls" className="carousel slide c-1" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={"../images/Home/s-1.jpg"} className="d-block w-100 .img-fluid" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={"../images/Home/s-2.jpg"} className="d-block w-100 .img-fluid" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={"../images/Home/s-3.jpg"} className="d-block w-100 .img-fluid" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={"../images/Home/s-4.jpeg"} className="d-block w-100 .img-fluid" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* updates */}
            <div className="updates">
                <h1>NEWS UPDATES</h1>

                <div className="card-1">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Mandela Day 2023</h5>
                            <hr/><p className="card-text">The Preparedness for Humanitarian Disasters Conference held in Cape Town, South Africa, brought together the Centre for Global Surgery at Stellenbosch University and the Gift of the Givers Foundation. Over two days, participants delved into the experiences and insights of the Gift of the Givers Foundation, which has provided humanitarian assistance to over 45 countries for more than 30 [...]</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Stenden attends The Preparedness for Humanitarian Disasters Conference in Cape Town</h5>
                            <hr/><p className="card-text">The Preparedness for Humanitarian Disasters Conference held in Cape Town, South Africa, brought together the Centre for Global Surgery at Stellenbosch University and the Gift of the Givers Foundation. Over two days, participants delved into the experiences and insights of the Gift of the Givers Foundation, which has provided humanitarian assistance to over 45 countries for more than 30 [...]</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Cross Exposure - Dubai Industry Visit</h5>
                            <hr/><p className="card-text">The Preparedness for Humanitarian Disasters Conference held in Cape Town, South Africa, brought together the Centre for Global Surgery at Stellenbosch University and the Gift of the Givers Foundation. Over two days, participants delved into the experiences and insights of the Gift of the Givers Foundation, which has provided humanitarian assistance to over 45 countries for more than 30 [...]</p>
                        </div>
                    </div>
                </div>
            </div>
            <End /> 
        </div>
    );
}
export default Home;