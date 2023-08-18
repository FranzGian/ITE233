import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { Button, Image, Row, Col, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <Container className='d-flex justify-content-center align-items-center' >
        <Row className='hero gap-5'>
          <Col className='d-flex justify-content-center align-items-center'>
            <Image src='https://scontent.fbag1-2.fna.fbcdn.net/v/t39.30808-6/354437416_3597494760570685_8841089595285871464_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFaGwLsgDpT_cZ7lvWIF0HDTXKhnrO6hvtNcqGes7qG-0fjqA3fJeaOQlObQtPX_eSHz43BmqSM4UqT9i7ZMuME&_nc_ohc=mkZsKa2pf1EAX_-APTV&_nc_ht=scontent.fbag1-2.fna&_nc_e2o=f&oh=00_AfAP7ZrhdBwuSkYlq23wKD7twHHypEPW3r75l2cIsR4rBg&oe=64E52C08'style={{minWidth:250,minHeight:250}} rounded fluid/>
          </Col>
          <Col>
            <h1 className='display-1 fw-bold'>Franz Gian Lee T. Estrada</h1>
            <h3 className='display-6 fw-semibold'>Aspiring Web Developer</h3>
            <hr />
            <p>
              A 20 year's old BSIT Student in PHINMA University of Pangasinan who loves Cars, Coffee,Motocycles and programming.
            </p>
            <div className='d-flex align-items-center gap-2'>
              <Link to='/work'>
                <Button className='btn-lg' variant='dark'>View Work</Button>
              </Link>
              <SocialLinks />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
