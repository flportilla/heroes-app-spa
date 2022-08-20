
import { MemoryRouter, useNavigate } from 'react-router-dom'
import { render, screen, fireEvent } from "@testing-library/react"

import { Navbar } from "../../../ui"
import { AuthContext } from '../../../auth'

const mockUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate

}))

describe('Tests on <Navbar /> component', () => {

    const contextValue = {
        logged: true,
        user: {
            id: '123',
            name: 'flportilla'
        },
        logout: jest.fn()
    }

    test('should show the name of the user', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('flportilla')).toBeTruthy()

    })

    test('should call the logout() and navigate when clicking on the button', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>

                    <Navbar />

                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutButton = screen.getByText('Logout')
        fireEvent.click(logoutButton)

        expect(contextValue.logout).toHaveBeenCalled()
        expect(mockUseNavigate).toHaveBeenCalledWith('/login', { 'replace': true })

    })

})