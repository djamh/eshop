import React, {createContext, useContext, useReducer} from 'react';

// create the data layer
export const StateContext = createContext();

// provide data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from the data layer
//export const useStateValue = () => useContext(StateContext);

export const useStateValue = () => {
    const contextValue = useContext(StateContext);
    //console.log(contextValue);  // Debugging line
    return contextValue;
};