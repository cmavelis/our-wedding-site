import React, { useState } from "react";
import useApiRequest from '../../common/useApiRequest';

const AddressForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const apiUrl = 'https://cma-wedding-api.herokuapp.com/';
    const addressData = {
        name,
        email,
        address,
    };
    const [addressState, makeAddressRequest] = useApiRequest(apiUrl + 'sample', {verb: 'post', params: addressData});

    const handleSubmit = (e) => {
        e.preventDefault();
        makeAddressRequest()
    };

    return(
    <form className="address-form">
        <fieldset>
            <legend>Please input your contact information for invitation and updates</legend>
            <input type="text" name="email" id="email" placeholder="email" onChange={e => setEmail(e.target.value)}/>
            {/*<label>*/}
            {/*    email*/}
            {/*</label>*/}
            <input name="name" id="name" placeholder="your name" onChange={e => setName(e.target.value)}/>
            {/*<label>*/}
            {/*    your name*/}
            {/*</label>*/}
            <textarea name="address" id="address" placeholder="mailing address" onChange={e => setAddress(e.target.value)}/>
            {/*<label>*/}
            {/*    mailing address*/}
            {/*</label>*/}
        </fieldset>
        <button onClick={e => handleSubmit(e)} >submit</button>
        <span className="address-form__loader--wrapper">
            {addressState.loading && (
                <span id="loading" className="address-form__loader--indicator"/>
            )}
        </span>
        <div className="address-form__submit-message">
            {addressState.updateSuccess && "Your information was submitted. Thanks!"}
            {addressState.errorMessage && "There was an error submitting your info. Please try again or email us."}
        </div>
    </form>
    )
};

export default AddressForm;
