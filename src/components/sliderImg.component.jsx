import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class SliderImg extends React.Component {
    render() {
        return (
            <div>
                <div className='container-fluid' style={{marginTop:'60px'}} >
                    <div className="row">
                            <Carousel>
                              
                            <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://d2j6dbq0eux0bg-cdn.ecwid.net/startersite/images/12925098/1515084276054.jpg"
                                        alt="Third slide"
                                        style={{height: 450 }}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://superherolivingblog.files.wordpress.com/2017/07/shopping-cart.png?w=1400&h=400&crop=1"
                                        alt="Third slide"
                                        style={{height: 450 }}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://blog.coldwellbanker.com/wp-content/uploads/2016/08/farmersmarket.jpg"
                                        style={{height: 450 }}
                                        alt="Third slide"

                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
        )
    };
}

export default SliderImg;