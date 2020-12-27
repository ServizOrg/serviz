import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FontAwesome from 'react-fontawesome';
import StarRating from '../rates/StarRate'


import './ServiceProvider.css'



export default function ServiceProvider() {
    return (
        <div className="container mt-2" >

            <div>
                <h2 className="font-weight-bold mb-1" id="top">Our Electricans Team</h2>
                <p className="font-italic text-muted mb-4"></p>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="card card-block">
                        <img src="https://i.pinimg.com/236x/00/85/a5/0085a5a85afffb2375787162a0701f89.jpg" alt="Photo of sunset" onClick={() => { window.location.href = '/fastfoodres' }} />
                        <h5 className="card-title mt-3 mb-3">Electrican</h5>
                        <p className="star"><StarRating /></p>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card card-block">
                        <img src="https://i.pinimg.com/236x/ec/f5/14/ecf5143888bdb70190cbddde082dce1f.jpg" alt="Photo of sunset" />
                        <h5 className="card-title  mt-3 mb-3">Painting</h5>
                        <p className="star"><StarRating /></p>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card card-block">
                        <img src="https://i.pinimg.com/236x/36/c9/ad/36c9ad0462d8e681530544062d1a6efd.jpg" alt="Photo of sunset" />
                        <h5 className="card-title  mt-3 mb-3">Tiling walls</h5>
                        <p className="star"><StarRating /></p>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card card-block">
                        <img src="https://i.pinimg.com/236x/fe/de/63/fede63dbba695ea9dc7bc36eafc45421.jpg" alt="Photo of sunset" />
                        <h5 className="card-title  mt-3 mb-3">Plaster</h5>
                        <p className="star"><StarRating /></p>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card card-block">
                        <img src="https://i.pinimg.com/236x/75/5f/c4/755fc47845064f4dc79d23752650ee56.jpg" alt="Photo of sunset" />
                        <h5 className="card-title  mt-3 mb-3">Alumini</h5>
                        <p className="star"><StarRating /></p>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card card-block">
                        <img src="https://i.pinimg.com/236x/cb/67/01/cb6701ce05de361ca41e8db3f9573bdd.jpg" alt="Photo of sunset" />
                        <h5 className="card-title  mt-3 mb-3">Carpenter</h5>
                        <p className="star"><StarRating /></p>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card card-block">
                        <img src="https://i.pinimg.com/236x/08/fb/80/08fb80760f6550ee76d2d72d2534ab32.jpg" alt="Photo of sunset" />
                        <h5 className="card-title  mt-3 mb-3">Satellite</h5>
                        <p className="star"><StarRating /></p>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card card-block">
                        <img src="https://i.pinimg.com/236x/bc/9a/9e/bc9a9e59a1e4f81746c53ba439c15943.jpg" alt="Photo of sunset" />
                        <h5 className="card-title  mt-3 mb-3">Parquet</h5>
                        <p className="star"><StarRating /></p>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card card-block">
                        <img src="https://i.pinimg.com/236x/f1/ed/97/f1ed9773efd3fdb9a1323c80a37cab84.jpg" alt="Photo of sunset" />
                        <h5 className="card-title  mt-3 mb-3">Gypsum</h5>
                        <p className="star"><StarRating /></p>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="card card-block">
                        <img src="https://i.pinimg.com/236x/82/ad/6d/82ad6d878f3b812bf1a68d36818785be.jpg" alt="Photo of sunset" />
                        <h5 className="card-title  mt-3 mb-3">Appliance</h5>

                        <p className="star"><StarRating /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}


//     return (
//         <div>
//             <h2 className="font-weight-bold mb-1" id="border">Our Team</h2>
//             <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

//             <div className="row pb-5 mb-4"  >
//                 <div className="col-lg-3 col-md-6 mb-4 mb-lg-0" >
//                     {/* <!-- Card--> */}
//                     <div className="card  rounded" id="cardsssss" >
//                         <div className="card-body p-0" id="img"><img src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-1_dewapk.jpg" alt="" className="w-100 card-img-top" onClick={() => { window.location.href = "http://google.com" }} />
//                             <div className="p-4" >
//                                 <h5 className="mb-0">Mark Rockwell</h5>
//                                 <p className="small text-muted">CEO - Consultant</p>
//                                 <ul className="social mb-0 list-inline mt-3">
//                                     <StarRating />
//                                     {/* <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li> */}
//                                     {/* <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
//                               <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
//                               <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li> */}
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
//                     {/* <!-- Card--> */}
//                     <div className="card shadow-sm border-0 rounded">
//                         <div className="card-body p-0" id="img"><img src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-3_ybnq8v.jpg" alt="" className="w-100 card-img-top" />
//                             <div className="p-4">
//                                 <h5 className="mb-0">Mark Rockwell</h5>
//                                 <p className="small text-muted">CEO - Consultant</p>
//                                 <ul className="social mb-0 list-inline mt-3">
//                                     <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
//                                     <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
//                                     <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
//                                     <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
//                     {/* <!-- Card--> */}
//                     <div className="card shadow-sm border-0 rounded">
//                         <div className="card-body p-0" id="img"><img src="https://res.cloudinary.com/mhmd/image/upload/v1570799924/profile-4_s3fort.jpg" alt="" className="w-100 card-img-top" />
//                             <div className="p-4">
//                                 <h5 className="mb-0">Mark Rockwell</h5>
//                                 <p className="small text-muted">CEO - Consultant</p>
//                                 <ul className="social mb-0 list-inline mt-3">
//                                     <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
//                                     <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
//                                     <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
//                                     <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
//                     {/* <!-- Card--> */}
//                     <div className="card shadow-sm border-0 rounded">
//                         <div className="card-body p-0" id="img"><img src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-2_ujssbj.jpg" alt="" className="w-100 card-img-top" />
//                             <div className="p-4">
//                                 <h5 className="mb-0">Mark Rockwell</h5>
//                                 <p className="small text-muted">CEO - Consultant</p>
//                                 <ul className="social mb-0 list-inline mt-3">
//                                     <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
//                                     <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
//                                     <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
//                                     <li className="list-inline-item m-0"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
