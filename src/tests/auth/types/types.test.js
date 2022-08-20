import { types } from '../../../auth/types/types'

describe('tests on "types"', () => {
    test('should return this types', () => {

        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })
    })
})