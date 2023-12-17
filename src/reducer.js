// All application code and states

export const initialState = {
    basket: [],
}


// Selector

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        // ... other action handlers ...
        default:
            return state;
    }

}

export default reducer;