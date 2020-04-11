import React, { useState, useReducer } from "react";
import useApiRequest from '../../common/useApiRequest';

import {
    RSVP_TYPES,
    RSVP_FIELD_ACTION_TYPES,
    rsvpFormReducer,
    rsvpFormInitialState
} from "./rsvpFormReducer";

import "./RSVPform.scss";

const PersonInputGroup = (props) => {
    const {handleNameChange, handleRsvpChange, personState} = props;
    const {name, rsvp} = personState;

    return(
        <div className='rsvp-form__row'>
            <input
                name="name"
                placeholder="name"
                value={name}
                onChange={e => handleNameChange(e.target.value)}
            />
            {Object.values(RSVP_TYPES).map(
                type => {
                    let buttonClassNames = `rsvp-button rsvp-button--${type}`;
                    buttonClassNames = buttonClassNames.concat((type === rsvp) ? '' : ' rsvp-button--unselected' );
                    return (
                        <button
                            className={buttonClassNames}
                            key={`button-type-${type}`}
                            type="button"
                            onClick={() => handleRsvpChange(type)}
                        >
                            {type}
                        </button>
                    )
                }
            )}
        </div>
    )
};

const RSVPForm = () => {
    const [email, setEmail] = useState('');
    const [rsvpState, rsvpDispatch] = useReducer(rsvpFormReducer, rsvpFormInitialState, state => state);

    const onNameChange = (index, name) => rsvpDispatch(
        {
            type: RSVP_FIELD_ACTION_TYPES.EDIT_NAME,
            name,
            index
        }
    );

    const onRsvpChange = (index, rsvp) => rsvpDispatch(
        {
            type: RSVP_FIELD_ACTION_TYPES.EDIT_RSVP,
            rsvp,
            index
        }
    );

    const apiUrl = 'https://cma-wedding-api.herokuapp.com/';
    const cleanRsvpData = (rawData) => (
        rawData.filter(person => person.name !== '')
    );
    const rsvpData = {
        email,
        rsvps: cleanRsvpData(rsvpState),
    };
    const [rsvpRequestState, makeRsvpRequest] = useApiRequest(apiUrl + 'sample', {verb: 'post', params: rsvpData});

    const handleSubmit = (e) => {
        e.preventDefault();
        makeRsvpRequest()
    };

    return(
        <form className='rsvp-form'>
            <fieldset disabled={rsvpRequestState.loading ? 'disabled' : ''}>
                <input type="text" name="email" id="email" placeholder="email" onChange={e => setEmail(e.target.value)}/>
            </fieldset>
            <fieldset disabled={rsvpRequestState.loading ? 'disabled' : ''}>
                {rsvpState.map((obj, i) => {
                        return <PersonInputGroup
                            key={`personInputs-${i}`}
                            handleNameChange={onNameChange.bind(null, i)}
                            handleRsvpChange={onRsvpChange.bind(null, i)}
                            personState={obj}
                        />
                    }
                )}
                <button
                    className="rsvp-button rsvp-button--submit"
                    onClick={e => handleSubmit(e)}
                >
                    submit
                </button>
            </fieldset>

            <span className="rsvp-form__loader--wrapper">
                {rsvpRequestState.loading && (
                    <span id="loading" className="rsvp-form__loader--indicator"/>
                )}
            </span>
            <div className="rsvp-form__submit-message">
                {rsvpRequestState.updateSuccess && "Your information was submitted. Thanks!"}
                {rsvpRequestState.errorMessage && "There was an error submitting your info. Please try again or email us."}
            </div>
        </form>
    )
};

export default RSVPForm;
