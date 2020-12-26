import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import { appendErrors, useForm } from 'react-hook-form';
import FontAwesome from 'react-fontawesome';
import './Booking.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



// import DateTimePicker from 'react-bootstrap-date-time-picker';
import DateTimePicker from 'react-datetime-picker';
import { STORE_USER } from '../../actions/actionTypes';

// import 'react-datetimepicker-bootstrap';
// import DatePicker from react-datepicker;

const axios = require('axios');
const $ = require('jquery');

interface bookData {
    date: string;   
    desc: string;
}

// const data: bookData = {
//     date: '',
//     desc: '',
// };

export default function Booking() {
    const userInStore = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    const { register, handleSubmit, errors } = useForm<bookData>();
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [serverErrors, setServerErrors] = useState<Array<string>>([]);
    const [startDate, setStartDate] = useState("");
    const [bookData, setbookData] = useState("");
                                                                                                    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="well-block">
                        <div className="well-title">
                            <h2> Book a ServiceProvider</h2>
                        </div>
                        <form 
                            onSubmit={ handleSubmit(async (bookData) => {
                            console.log("--------------",userInStore.user.id);

                            await axios.post(`http://localhost:8000/calender/`,
                                {
                                    user:userInStore.user.id,
                                    provider:"2",
                                    date: bookData.date,
                                    desc: bookData.desc,
                                })
                                .then(async (result: any) => {
                                    console.log("axxxxxios",result)
                                })
                                .catch((err: any) => {
                                    console.error("err===== =>", err);
                                })

                            })}

                            >
                            <div className="row">
                                {/* <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="name">Name</label>
                                        <input id="name" name="name" type="text" placeholder="Name" className="form-control input-md"></input>
                                    </div>
                                </div> */}
                                <div className='col-md-6'>
                                    {/* <div className="form-group">
                                        <label className="control-label" htmlFor="name">ServiceProvider Name</label>
                                        <input id="ServiceProvider Name" name="ServiceProvider Name" type="text" placeholder="ServiceProvider Name" className="form-control input-md"></input>
                                    </div> */}
                                </div>

                                {/* <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="phone">phone</label>
                                        <input id="phone" name="phone" type="number" placeholder="phone" className="form-control input-md" onChange={(e) => { setbookData(e.target.value) }}></input>
                                    </div>
                                </div> */}

                                {/* <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="email">Email</label>
                                        <input id="email" name="email" type="text" placeholder="E-Mail" className="form-control input-md"></input>
                                    </div>
                                </div> */}

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="date">Preferred Date </label>
                                        {/* <input id="date" name="date" type="text" placeholder="dd/mm/yyyy" className="form-control input-md"></input> */}
                                        <DatePicker selected={startDate} onChange={(e) => {setStartDate(e)}} />




                                    </div>
                                </div>


                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="appointmentfor" >Booking For </label>
                                        <input id="appointmentfor" name="appointmentfor" className="form-control"  onChange={ (e) => { setbookData(e.target.value) }}>

                                        </input>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <button id="singlebutton" name="singlebutton" className="btn btn-default">Make A Booking</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="well-block">
                        <div className="well-title">
                            <h2>Why Booking with Us</h2>
                        </div>
                        <div className="feature-block">
                            <div className="feature feature-blurb-text">
                                <h4 className="feature-title">Experienced Staff Available</h4>

                            </div>
                            <div className="feature feature-blurb-text">
                                <h4 className="feature-title">Low Price & Fees</h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
