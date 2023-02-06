export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) =>{
        console.log(action);
    switch (action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket: [...state.basket, action.item]
              
            };
            case "SET_USER":
                return{
                    ...state,
                    user: action.user
                }
            case "REMOVE-FROM-BASKET":
                const index = state.basket.findIndex(
                    (basketItem)=> basketItem.id === action.id
                )
                let newBasket = [...state.basket];
                if(index >= 0){
                    newBasket.splice(index, 1);
                }
            //checkout lists go blank if we add the following else statement.....<< this just because we typed it inside an another case...

            // else{
            //     console.warn(
            //         `item id ${action.id} is not found`
            //     )
            // }
            return{
                ...state,
                basket: newBasket
            };
              
            default:
            return state;
    }
}
export default reducer;