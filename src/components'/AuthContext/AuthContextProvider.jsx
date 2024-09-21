import React, { createContext, useReducer }from 'react';

export const authContext = createContext(null);

const INITIAL_STATE = {
    token: "",
    currentUser: {},
};

const reducer = (state = INITIAL_STATE, action) = {};

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    return <AuthContext.Provider>(children)</AuthContext.Provider>;
};

export default AuthContextProvider;