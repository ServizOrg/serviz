import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FontAwesome from 'react-fontawesome';
import './booklist.css'

export default function BookingList() {
	
    return (
        <div id="container">
        <div className="row text-center " id="main">
        
            
            <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                            <h1 className="display-4" id="title">Latest User Booking </h1>
                            
                           </div>
                        </div>
    </div>
    <div className="row">
        <div className="col-lg-8 mx-auto">
           
            <ul className="list-group shadow">
               
                <li className="list-group-item" id="list">
                    
                    <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                            <h5 className="mt-0 font-weight-bold mb-2" placeholder='User Name'>Kholoud (0597305124)</h5>
                            <p className="font-italic text-muted mb-0 small" placeholder="subject">Fixing Fridge </p>
                           </div>
                        </div>
                </li><br/>
                
                <li className="list-group-item" id="list">
                    
                    <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                            <h5 className="mt-0 font-weight-bold mb-2" placeholder='User Name'>Najwan (0597145236)</h5>
                            <p className="font-italic text-muted mb-0 small" placeholder="subject">Fixing Lamp</p>
                            </div>
                        </div>
                </li><br/>
               
                <li className="list-group-item" id="list">
                    
                    <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                            <h5 className="mt-0 font-weight-bold mb-2" placeholder='User Name'>Belal (0597301452)</h5>
                            <p className="font-italic text-muted mb-0 small" placeholder="subject">Fixing TV</p>
                            </div>
                        </div>
                </li><br/>
                
                <li className="list-group-item" id="list">
                  
                    <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                            <h5 className="mt-0 font-weight-bold mb-2" placeholder='User Name'>Noor (0597562314)</h5>
                            <p className="font-italic text-muted mb-0 small" placeholder="subject">Fixing Dish Washer</p>
                            </div> 
                        </div>
                </li><br/>
            </ul> 
        </div>
    </div>
</div>

    )
}






