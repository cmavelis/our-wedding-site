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
        name: 'pers1',
        rsvp: RSVP_TYPES.MAYBE,
    },
    {
        name: 'person2',
        rsvp: RSVP_TYPES.YES,
    }
];

export const rsvpFormReducer = (state, action) => {
    const oldIndex = action.index;
    const newState = state;
    switch (action.type) {
        case RSVP_FIELD_ACTION_TYPES.ADD:
            newState.push([]);
            break;
        case RSVP_FIELD_ACTION_TYPES.REMOVE:
            console.log(newState.splice(oldIndex));
            break;
        case RSVP_FIELD_ACTION_TYPES.EDIT_NAME:
            newState[oldIndex].name = action.name;
            break;
        case RSVP_FIELD_ACTION_TYPES.EDIT_RSVP:
            newState[oldIndex].rsvp = action.rsvp;
            break;
        default:
    }
    return [...newState];
};

