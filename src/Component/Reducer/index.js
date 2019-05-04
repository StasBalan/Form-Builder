const reducer = (
    state = {
        items: []
    }, action) => {
    switch(action.type) {
        case 'CREATE_FORM':
            var newArr = [...state.items, action.payload];
        return {
            ...state,
            items: newArr
        };
        default:
            return state;
        }
    };

export default reducer;