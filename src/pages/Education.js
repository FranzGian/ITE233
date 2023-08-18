import React from 'react';
import {Accordion, Container} from 'react-bootstrap';


const Education = () => {
  return (
    <>
      <Container className='hero d-flex flex-column'>
        <h2 className='display-1 fw-bold text-center'>My Education</h2>
        <p className='text-center'>These are my academic qualifications:</p>
        <hr/>
        <Container className='p-5'>
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Highschool | Year 2015</Accordion.Header>
          <Accordion.Body>
            Pangasinan National HighSchool
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Senior Highschool | Year 2020</Accordion.Header>
          <Accordion.Body>
            Lyceum North-western University 
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>College | Current 2023</Accordion.Header>
          <Accordion.Body>
            PHINMA University of Pangasinan
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        </Container>
      </Container>
    </>
  );
};

export default Education;
