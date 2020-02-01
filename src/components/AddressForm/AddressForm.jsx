import React, { useState } from "react";
import useApiRequest from '../../common/useApiRequest';

const AddressForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const apiUrl = 'https://cma-wedding-api.herokuapp.com/sample';
    const addressData = {
        name,
        email,
        address,
    };
    const [addressState, makeAddressRequest] = useApiRequest(apiUrl, {verb: 'post', params: addressData});

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
        {addressState.updateSuccess && (<span>submitted!</span>)}
    </form>

    )
};

export default AddressForm;
