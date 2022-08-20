import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SearchPage } from '../../../heroes/pages/SearchPage'

describe('Tests on <SearchPage /> component', () => {

    test('should show correctly with default values', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot()
    })

    test('should show Batman and the input with the value of queryString', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman')

        const img = screen.getByRole('img')
        expect(img.src).toContain('assets/heroes/dc-batman.jpg')
    })



})