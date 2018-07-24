const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COMPONENT':
            return [
                ...state,
                action.componentIndex
            ];
        default: 
            return state;
    }
};

export default reducer;