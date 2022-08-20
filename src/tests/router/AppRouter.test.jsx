
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../auth'
import { AppRouter } from '../../router/AppRouter';
import { render, screen } from "@testing-library/react"


describe('tests on <AppRouter />', () => {

    test('should show the login if not logged in', () => {

        const contextValue = {
            logged: false
        };

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>

                    <AppRouter />

                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getAllByText('Login').length).toBe(2)

    })

    test('should show the Marvel component if logged in', () => {

        const contextValue = {
            logged: true
        };

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>

                    <AppRouter />

                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)

    })
})