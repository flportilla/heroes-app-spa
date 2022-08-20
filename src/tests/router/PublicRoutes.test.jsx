import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { AuthContext } from "../../auth"
import { PublicRoutes } from "../../router/PublicRoutes"


describe('tests on <PublicRoute />', () => {

    test('should show children if not logged in', () => {

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoutes >
                    <h1>public route</h1>
                </PublicRoutes>
            </AuthContext.Provider>
        )

        expect(screen.getByText('public route')).toBeTruthy()
    })

    test('should Navigate if logged in', () => {

        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'flportilla'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path="login" element={
                            <PublicRoutes >
                                <h1>public route</h1>
                            </PublicRoutes>
                        } />

                        <Route path="marvel" element={<h1>Marvel page</h1>} />

                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Marvel page')).toBeTruthy()

    })

})