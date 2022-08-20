import '@testing-library/jest-dom';
import { authReducer } from '../../../auth/context/authReducer';
import { types } from '../../../auth/types/types';


describe('Tests on AuthReducer', () => {


    test('should return the default state if no action is passed', () => {

        const initialState = {
            payload: {
                name: 'flportilla',
                id: '123'
            }
        }

        expect(authReducer(initialState)).toBe(initialState)

    })

    test('should establish the right user when calling the login() function', () => {

        const user = {
            id: '0918',
            name: 'flportilla'
        }

        const action = {
            type: types.login,
            payload: user
        }

        expect(authReducer(user, action)).toEqual({
            id: '0918',
            name: 'flportilla',
            logged: true,
            user: { id: '0918', name: 'flportilla' }
        })

    })
    test('should remove the user and put "logged" in false', () => {

        const action = { type: types.logout }
        const user = {
            logged: true,
            user: { id: '0918', name: 'flportilla' }
        }
        const { logged } = authReducer(user, action)
        expect(logged).toBeFalsy()
    })
})