import { REQUEST, SUCCESS, FAILURE } from './actionTypeUtil';
import { actionTypes } from './reducers';

export const fetching = () => ({ type: REQUEST(actionTypes.POST_ADDRESSES) });
export const success = response => ({ type: SUCCESS(actionTypes.POST_ADDRESSES), response });
export const error = response => ({ type: FAILURE(actionTypes.POST_ADDRESSES), response });
