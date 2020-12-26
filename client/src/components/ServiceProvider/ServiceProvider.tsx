import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FontAwesome from 'react-fontawesome';
import StarRating from '../rates/StarRate'


import './ServiceProvider.css'



export default function ServiceProvider() {

    return (
      <div>
      <h2 className="font-weight-bold mb-2">Our Team</h2>
      <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
      
      <div className="row pb-5 mb-4">
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0"  >
              {/* <!-- Card--> */}
              <div className="card shadow-sm border-0 rounded" >
                  <div className="card-body p-0" id="img"><img src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-1_dewapk.jpg" alt="" className="w-100 card-img-top"  onClick={() =>{window.location.href="http://google.com"}}/>
                      <div className="p-4">
                          <h5 className="mb-0">Mark Rockwell</h5>
                          <p className="small text-muted">CEO - Consultant</p>
                          <ul className="social mb-0 list-inline mt-3">
                          <StarRating/>
                              {/* <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li> */}
                              {/* <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                              <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                              <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li> */}
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              {/* <!-- Card--> */}
              <div className="card shadow-sm border-0 rounded">
                  <div className="card-body p-0" id="img"><img src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-3_ybnq8v.jpg" alt="" className="w-100 card-img-top"/>
                      <div className="p-4">
                          <h5 className="mb-0">Mark Rockwell</h5>
                          <p className="small text-muted">CEO - Consultant</p>
                          <ul className="social mb-0 list-inline mt-3">
                              <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                              <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                              <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                              <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              {/* <!-- Card--> */}
              <div className="card shadow-sm border-0 rounded">
                  <div className="card-body p-0" id="img"><img src="https://res.cloudinary.com/mhmd/image/upload/v1570799924/profile-4_s3fort.jpg" alt="" className="w-100 card-img-top"/>
                      <div className="p-4">
                          <h5 className="mb-0">Mark Rockwell</h5>
                          <p className="small text-muted">CEO - Consultant</p>
                          <ul className="social mb-0 list-inline mt-3">
                              <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                              <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                              <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                              <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              {/* <!-- Card--> */}
              <div className="card shadow-sm border-0 rounded">
                  <div className="card-body p-0" id="img"><img src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-2_ujssbj.jpg" alt="" className="w-100 card-img-top"/>
                      <div className="p-4">
                          <h5 className="mb-0">Mark Rockwell</h5>
                          <p className="small text-muted">CEO - Consultant</p>
                          <ul className="social mb-0 list-inline mt-3">
                              <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                              <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                              <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                              <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>
    )
}
