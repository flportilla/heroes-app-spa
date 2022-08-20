import { AuthContext } from "./AuthContext";

import React, { useReducer } from 'react'
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const init = () => {
    const userName = JSON.parse(localStorage.getItem('userName'))
    return {
        logged: !!userName, //double ! converts an object to boolean (if falsy returns false)
        user: userName

    }
}

export const AuthProvider = ({ children }) => {

    const [authState, authDispatch] = useReducer(authReducer, {}, init)

    const login = (name = '') => {

        const user = {
            id: '0918',
            name
        }

        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('userName', JSON.stringify(user))

        authDispatch(action)
    }

    const logout = () => {
        localStorage.removeItem('userName')

        const action = { type: types.logout }

        authDispatch(action)
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            login,
            logout,
        }} >
            {children}
        </AuthContext.Provider >
    )

}
