import { REQUEST, SUCCESS, FAILURE } from './actionTypeUtil';

export const initialState = {
    loading: false,
    errorMessage: null,
    // entities: [] as ReadonlyArray<IShoppingList>,
    // entity: defaultValue,
    updating: false,
    updateSuccess: false
};

export const actionTypes = {
    POST_ADDRESSES: 'addresses/POST_ADDRESSES',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST(actionTypes.POST_ADDRESSES):
            return {
                ...state,
                errorMessage: null,
                updateSuccess: false,
                loading: true
            };
        case SUCCESS(actionTypes.POST_ADDRESSES):
            return {
                ...state,
                updating: false,
                updateSuccess: true,
                // entity: action.payload.data
            };

        case FAILURE(actionTypes.POST_ADDRESSES):
            return {
                ...state,
                loading: false,
                updating: false,
                updateSuccess: false,
                errorMessage: action.response
            };
        default:
            return state;
    }
};

export default reducer;
