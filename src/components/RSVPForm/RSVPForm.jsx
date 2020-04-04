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
                placeholder="Name"
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
    // TODO: useReducer for name/rsvp data
    const [rsvpState, rsvpDispatch] = useReducer(rsvpFormReducer, rsvpFormInitialState);

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
    // const addressData = {
    //     name,
    //     email,
    //     rsvpState,
    // };
    // const [addressState, makeAddressRequest] = useApiRequest(apiUrl + 'address', {verb: 'post', params: addressData});

    const handleSubmit = (e) => {
        e.preventDefault();
        // makeAddressRequest()
    };

    return(
    <form className="rsvp-form">
        <fieldset>
            <legend>Please input your email and RSVP for yourself / others</legend>
            <input type="text" name="email" id="email" placeholder="email" onChange={e => setEmail(e.target.value)}/>

        </fieldset>
        <fieldset>
            {rsvpState.map((obj, i) => {
                    return <PersonInputGroup
                        key={`personInputs-${i}`}
                        handleNameChange={onNameChange.bind(null, i)}
                        handleRsvpChange={onRsvpChange.bind(null, i)}
                        personState={obj}
                    />
                }
            )}
        </fieldset>
        <button
            className="rsvp-button rsvp-button--submit"
            onClick={e => handleSubmit(e)}
        >
            submit
        </button>
        {/*<span className="rsvp-form__loader--wrapper">*/}
        {/*    {addressState.loading && (*/}
        {/*        <span id="loading" className="rsvp-form__loader--indicator"/>*/}
        {/*    )}*/}
        {/*</span>*/}
        {/*<div className="rsvp-form__submit-message">*/}
        {/*    {addressState.updateSuccess && "Your information was submitted. Thanks!"}*/}
        {/*    {addressState.errorMessage && "There was an error submitting your info. Please try again or email us."}*/}
        {/*</div>*/}
    </form>
    )
};

export default RSVPForm;
