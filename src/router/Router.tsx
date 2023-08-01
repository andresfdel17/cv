import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Portfolio } from '../components'

export const Router = () => {
  return (
    <BrowserRouter basename='/cv'>
        <Routes>
            <Route path="/" element={<Navigate to={"/portfolio"} />} />
            <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    </BrowserRouter>
  )
}
