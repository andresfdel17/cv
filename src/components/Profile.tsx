import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { data } from '../data';

export const Profile = () => {
  return (
    <>
      <Row className='p-4 border border-primary' style={{ height: "450px" }}>
        <Col sm>
          {
            data.certificate.map((val, index) => (
              <React.Fragment key={index}>
                {val.date} <br />
                {val.description} <br />
                {val.institution} <br />
                {val.name}
                {index !== data.experience.length - 1 ? (<hr/>) : ""}
              </React.Fragment>
            ))
          }
        </Col>
      </Row >
    </>
  )
}
