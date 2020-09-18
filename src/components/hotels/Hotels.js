import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import fakeData from '../../FakeData/FakeData';
import star from '../../images/Icon/star_1_.png';
import giphy from '../../images/Image/giphy.gif';
import './Hotel.css';

const Hotels = () => {
    const {placeName} = useParams();
    const {hotels, map} = fakeData.find(place => place.name === placeName);

    function bookingDone() {
        document.getElementById('booking').innerHTML = `<h4 style="text-align:center"> Congratulations...successfully booked your desired hotel !!!! </h4> <img style="display:block;margin:auto;" src= ${giphy} alt="Booking Done"/>`;
    }

    return (
        <section className="hotels text-white" id='booking'>
            <Container>
                <Row className="align-items-stretch">
                    <Col md={6}>
                        {
                            hotels.map(hotel => 
                            <Row key={hotel.name} className="align-items-stretch p-3 rounded my-3 hotel-style">
                                <Col sm={6}>
                                    <img src={hotel.photo} alt="" className="w-100 h-100 mb-3"/>
                                </Col>
                                <Col sm={6}>
                                    <h5>{hotel.name}</h5>
                                    <div className="d-flex justify-content-between">
                                        <h6><img src={star} className="w-25 mb-1 mr-1" alt=""/>{hotel.rating}</h6>
                                        <h6>Night: ${hotel.perNight}</h6>
                                    </div>
                                    <ul className="list-unstyled mt-4">
                                        <li>AC / Non AC Bedrooms, Free Wifi Facility, Luxurious Washroom </li>
                                        <li>
                                            <button className="btn btn-primary rounded-pill btn-sm btn-block mt-1" onClick={bookingDone}>Book Now</button>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>)
                        }
                    </Col>
                    <Col md={6} className="my-3">
                        <iframe title={placeName} src={map} width="100%" height="675" frameBorder="1" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hotels;