export const RSVP_TYPES = {
    YES: 'yes',
    NO: 'no',
    MAYBE: 'maybe',
};

export const RSVP_FIELD_ACTION_TYPES = {
    ADD: 'add',
    REMOVE: 'remove',
    EDIT_NAME: 'edit_name',
    EDIT_RSVP: 'edit_rsvp',
};

export const rsvpFormInitialState = [
    {
        name: '',
        rsvp: '',
    }
];

export const rsvpFormReducer = (state, action) => {
    const oldIndex = action.index;
    const oldLength = state.length;
    const newState = [...state];
    switch (action.type) {
        case RSVP_FIELD_ACTION_TYPES.ADD:
            newState.push({
                name: '',
                rsvp: RSVP_TYPES.YES,
            });
            break;
        case RSVP_FIELD_ACTION_TYPES.REMOVE:
            newState.splice(oldIndex, 1);
            break;
        case RSVP_FIELD_ACTION_TYPES.EDIT_NAME:
            newState[oldIndex].name = action.name;
            if (action.name === '') {
                newState.splice(oldIndex, 1); // remove 1
            } else if (oldIndex === oldLength-1) {
                newState.push({
                    name: '',
                    rsvp: '',
                }); // add a blank entry
                newState[oldIndex].rsvp = RSVP_TYPES.YES; // if first typing, default to YES
            }
            break;
        case RSVP_FIELD_ACTION_TYPES.EDIT_RSVP:
            newState[oldIndex].rsvp = action.rsvp;
            break;
        default:
    }
    return [...newState];
};

