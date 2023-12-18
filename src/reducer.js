// All application code and states

export const initialState = {
    basket: [],
}


// Selector

export const getBasketTotal = (basket) => {
    return(basket?.reduce((amount,item)=> item.price+amount,0));
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

            
        case 'REMOVE_FROM_BASKET':
            // Logic to remove an item from the basket
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1); // Removes the item at the found index
            } else {
                console.warn(`Can't remove product (id: ${action.id}) as it's not in the basket!`);
            }

            return {
                ...state,
                basket: newBasket
            };
        case 'CLEAR_BASKET':
                return {
                    ...state,
                    basket: [], // Clears the basket
                };

        case 'SET_BASKET':
            console.log("Setting basket in state:", action.basket); // Debugging line
                return {
                    
                    ...state,
                    basket: action.basket, // Sets the basket with provided items
                };

        case 'SET_USER':
                    return {
                        ...state,
                        user: action.user, // Sets the current user
                    };

        default:
            return state;
    }

}

export default reducer;