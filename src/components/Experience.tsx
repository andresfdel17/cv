import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { data } from '../data'

export const Experience = () => {
    return (
        <>
            <Row className='p-2 border border-danger' style={{ height: "450px" }}>
                <Col sm>
                    {data.experience.map((val, index) => (
                        <React.Fragment key={index}>
                            {val.company}<br />
                            {val.endDate}<br />
                            {val.jobDescription}<br />
                            {val.jobTitle}<br />
                            {val.startDate}
                            {index !== data.experience.length - 1 ? (<hr/>) : ""}
                        </React.Fragment>
                    ))}
                </Col>
            </Row>
        </>
    )
}
