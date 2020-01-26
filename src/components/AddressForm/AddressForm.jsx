import React, { useState } from "react";

const AddressForm = () => {
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

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
    </form>
    )
};

export default AddressForm;
