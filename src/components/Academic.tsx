import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { data } from '../data'

export const Academic = () => {
    return (
        <>
            <Row className='p-2 border border-dark' style={{height: "150px"}}>
                <Col sm>
                    {data.academic.map((val, index) => (
                        <React.Fragment key={index}>
                            {val.degree}<br/>
                            {val.description}<br/>
                            {val.institution}<br/>
                            {val.endDate}<br/>
                            {val.startDate}
                        </React.Fragment>
                    ))}
                </Col>
            </Row>
        </>
    )
}
