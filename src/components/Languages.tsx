import React from 'react'
import { ProgressBar, Row } from 'react-bootstrap'
import { data } from '../data'

export const Languages = () => {
  return (
    <>
      <Row className='p-2 border border-success' style={{ height: "100px" }}>
        {data.languages.map((val, index) => (
          <ProgressBar key={index} striped variant={val.variant} now={val.percentage} label={val.name} />
        ))}
      </Row>
    </>
  )
}
