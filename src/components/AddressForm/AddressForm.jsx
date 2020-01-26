import React, { useState } from "react";

const AddressForm = () => {
    return(
    <form>
        <fieldset>
            <legend>Please input your contact information for invitation and updates</legend>
            <label htmlFor="">
                email
            </label>
            <input type="text"/>
            <label htmlFor="">
                address
            </label>
            <input type="text"/>
        </fieldset>
    </form>
    )
};

export default AddressForm;
