import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { LoginPage } from '../auth/pages/LoginPage'
import { DcPage } from '../heroes/pages/DcPage.jsx'
import { MarvelPage } from '../heroes/pages/MarvelPage'
import { Navbar } from '../ui/components'

export const AppRouter = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="dc" element={<DcPage />} />
                <Route path="marvel" element={<MarvelPage />} />

                <Route path="login" element={<LoginPage />} />

                <Route path="/*" element={<Navigate to="/login" />} />

            </Routes>
        </>

    )
}
