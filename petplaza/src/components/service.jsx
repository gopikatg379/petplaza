import React from 'react';
import './ServicePage.css'; // Ensure to have your CSS file imported

const ServicePage = () => {
    return (
        <div className="service-page">
            <div className="container">
                <h1 className="page-title">Our Services for Pets</h1>

                <div className="service-cards">
                    <div className="service-card">
                        <img src="src/assets/media/dog-boarding-image-4.jpg" alt="Service 1" className="service-image" />
                        <div className="service-info">
                            <h2 className="service-title">Pet Boarding</h2>
                            <p className="service-description">
                            Our pet boarding services offer a comfortable and safe environment for your pets when you're away.....
                            </p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>

                    <div className="service-card">
                        <img src="src/assets/media/grooming.jpg" alt="Service 2" className="service-image" />
                        <div className="service-info">
                            <h2 className="service-title">Pet Grooming</h2>
                            <p className="service-description">
                            Pet grooming ensures your furry friends look and feel their best. Our expert groomers provide a range of services from baths and trims to nail clipping and ear cleaning....
                            </p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>

                    <div className="service-card">
                        <img src="src/assets/media/training.avif" alt="Service 3" className="service-image" />
                        <div className="service-info">
                            <h2 className="service-title">Pet Training</h2>
                            <p className="service-description">
                            Pet training is essential for fostering a positive relationship between you and your pet.....
                            </p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
