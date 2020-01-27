import React, { useState } from "react";
import useApiRequest from '../../common/useApiRequest';

const AddressForm = () => {
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const apiUrl = 'http://localhost:4000/sample';
    const addressData = {
        name: email,
        count: address
    };
    const [addressState, makeAddressRequest] = useApiRequest(apiUrl, {verb: 'post', params: addressData});

    const handleSubmit = (e) => {
        e.preventDefault();
        makeAddressRequest()
    };

    return(
    <form>
        <fieldset>
            <legend>Please input your contact information for invitation and updates</legend>
            <label htmlFor="">
                email = {email}
            </label>
            <input type="text" onChange={e => setEmail(e.target.value)}/>
            <label htmlFor="">
                address = {address}
            </label>
            <input type="text" onChange={e => setAddress(e.target.value)}/>
        </fieldset>
        <button onClick={e => handleSubmit(e)} >submit</button>
        {addressState.updateSuccess && (<span>submitted!</span>)}
    </form>

    )
};

export default AddressForm;
