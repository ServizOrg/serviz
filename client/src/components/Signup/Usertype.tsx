import React, { useState } from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import { connect } from 'react-redux'
import { State } from '../../reducers/Users/usersReducer'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
// import './Signup.css';
import './userType.css';

const axios = require('axios');
const $ = require('jquery');


const Usertype = (props: any) => {
    // const handleClick = (x :boolean) => {
    //     if(x === true){
    //         <Redirect to='/'/>
    //     }
    // }
    return (
        <div id="signup" className="center styled">
            <div id="welcome">
            <h1>Welcome In SERVIZ ,Your Account Activated Successfully</h1>
            <h2>Please,Click on The Type You Want , And Fill Your Details </h2>
            <br />
            <div className="user-type">

                <button type="button" className="user" id="but"><Link id="l" to= "/client/signup">User</Link></button>
                <button type="button" className="prov" id="but"><Link id="l" to="/prov/signup">Provider</Link></button>

            </div>
            </div>
        </div>
    );
}



export default Usertype;

