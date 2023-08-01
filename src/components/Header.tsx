import React from 'react';
import { Row, Col } from "react-bootstrap";
import { data } from '../data';

export const Header = () => {
    return (
        <>
            <Row className='mt-4 ml-4 mr-4 p-3 border border-success' >
                <Col sm="auto">
                    <img className='rounded-circle' width="100px" src={data.image} alt="profile" />
                </Col>
                <Col sm>
                    {data.name} <br />
                    {data.profession}<br />
                    {data.phone}<br />
                    {data.email}<br />
                    {data.address}
                </Col>
            </Row>
        </>
    )
}
