import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { data } from '../data'

export const Interest = () => {
  return (
    <>
      <Row className='p-2 border border-light'  style={{ height: "100px" }}>
        <Col sm>
          {data.interest.map((val, index) => (
            <React.Fragment key={index}>
              {val}<br />
            </React.Fragment>
          ))}
        </Col>
      </Row>
    </>
  )
}
