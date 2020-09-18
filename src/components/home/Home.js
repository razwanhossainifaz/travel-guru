import React, { useState } from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import fakeData from '../../FakeData/FakeData';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Fab from '@material-ui/core/Fab';

const Home = () => {
    const places = fakeData;
    const [showPlace, setShowPlace] = useState(places[0]);
    

    return (
        <section id="home" className="text-white">
            <Container>
                <Row className="pb-5">
                <Col lg={4} className="text-center text-lg-left">
                        <h1 className="placeName my-3">{showPlace.name}</h1>
                        <p className="text-justify">{showPlace.shortDesc}</p>
                        <Link to={"/destination/" + showPlace.name}>
                            <Fab variant="extended" size="medium" color="primary" aria-label="add"> <strong> Book Here </strong> <FontAwesomeIcon icon={faArrowRight} /> </Fab>
                        </Link>
                    </Col>
                    <Col lg={8}>
                        <Row>
                            {
                                places.map(place =>
                                <Col className="placePhoto" sm={4} key={place.name}>
                                    <div onClick={() => setShowPlace(place)} className="small mt-3 text-white text-center d-block bg-transparent">
                                        <img src={place.photo} alt="" className="photo" />
                                        {place.name}
                                    </div>
                                </Col>)
                            }
                        </Row>
                    </Col>
                </Row>
                <h1 className="placeName text-center pb-5 mb-0 mt-5"> Travel Guru..... <br/> Your Most Reliable Travelling Partner.... </h1>
            </Container>
        </section>
        
    );
};


export default Home;