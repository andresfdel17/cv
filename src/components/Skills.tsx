import React from 'react'
import { ProgressBar, Row } from 'react-bootstrap'
import { data } from '../data'

export const Skills = () => {
    return (
        <>
            <Row className='p-2 border border-info' style={{height: "150px"}}>
                {data.skills.map((val, index) => (
                     <ProgressBar key={index} striped variant={val.variant} now={val.percentage} label={val.name} />
                ))}
            </Row>
        </>
    )
}
