import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../auth"
import { PrivateRoute } from "../../router/PrivateRoute"
import { MemoryRouter, Routes, Route } from 'react-router-dom'


describe('tests on <PrivateRoutes /> component', () => {

    test('should show children if authenticaded', () => {

        Storage.prototype.setItem = jest.fn()

        const contextValue = {
            logged: true,
            user: {
                id: '132',
                name: 'flportilla'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute >
                        <h1>private route</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('private route')).toBeTruthy();

        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/search?q=batman');

    })




})