import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { store, add } from '../../actions/Users/usersActions';
import { connect } from 'react-redux'
import { State } from '../../reducers/Users/usersReducer'
import { useTranslation } from "react-i18next";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RootStore } from '../../reducers/rootReducer';
import Button from "@material-ui/core/Button";
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import ProviderSignup from '../Provider-signup/Provider-signup'
import Logout from '../Logout/Logout';
import "./Nav.css";
const axios = require('axios');
const $ = require('jquery');



$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $("nav").addClass("black");
    } else {
        $("nav").removeClass("black");
    }
});

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const userInStore = useSelector((state: any) => state.user);
    const dispatch = useDispatch();
    // console.log("store ===> ", userInStore)
    // console.log("store ===> ", userInStore)
    let token;
    try {
        const serializedState = localStorage.getItem("access_token");
        console.log("token", serializedState);
        if (serializedState === null) {
            token = null;
        }
        token = JSON.parse(serializedState);
    }
    catch (e) {
        console.log(e);
    }

    const handleClick = () => {
        $("#signup-form").show();
    }

    const selectLang = () => {

    }

    const openClick = () => {
        document.getElementById("mySidenav").style.width = "250px"
    }
    const closeClick = () => {
        document.getElementById("mySidenav").style.width = "0";

    }
    const checkUser = async () => {
        await axios.post(`http://localhost:8000/user/specUser/`,
            {
                pk: userInStore.user.id
            })
            .then(async (result: any) => {
                console.log('user', result.data)
                console.log("post", result.data[0].role)
                if (result.data[0].role === 'user') {
                    window.location.href = "/profiles/user"
                }
            })
            .catch(async (result: any) => {

                console.log("nononot")
                await axios.post(`http://localhost:8000/serviceprovider/servProv/`,
                    {
                        provider: userInStore.user.id
                    })
                    .then(async (result: any) => {
                        console.log('provider', result.data)
                        console.log("post", result.data[0].role)
                        if (result.data[0].role === 'ServiceProvider') {
                            window.location.href = "/profiles/provider"
                        }
                    })

            })

    }

    return (
        //////////////////////////
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <a href="/" className="navbar-brand">{t("app_name")}</a>


                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeClick}>&times;</a>
                    <a href="#">About</a>
                    <a href="#">{t("how_it_works")}</a>
                    <a href="#">Browse Jobs</a>
                    <a href="#">Contact</a>
                </div>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* <span className="menu"> */}

                        <ul>
                            <li className="pc-view"><a href="#">{t("how_it_works")}</a></li>
                            <li className="pc-view"><a href="#">{t("Browse_Jobs")}</a></li>
                            <li className="lang-dropdown">
                                {/* <button onClick={selectLang} className="lang-dropbtn">Languages</button> */}
                                < div id="lang-Dropdown pc-view" className="lang-dropdown-content">
                                    <span className="pc-view-lang" onClick={() => i18n.changeLanguage("en")}> English</span>
                                    <span className="pc-view-lang" onClick={() => i18n.changeLanguage("ar")}>عربي</span>
                                </div>

                            </li>
                            {token === null ?
                                <span>
                                    <li><Link to="/user/login">{t("log_in")}</Link></li>
                                    <li><Link to="/user/signup">{t("join")}</Link></li>
                                </span>
                                :
                                <span>
                                    <li><a onClick={checkUser}>Profile</a></li>
                                    <li>
                                        <Logout />
                                    </li>
                                </span>}


                        </ul>
                    {/* </span> */}
                </div>
            </div>
            <span className="navbar-toggler-icon" onClick={openClick}>
            </span>
        </nav>
        /////////////////////////
        // <header id="nav-bar">
        //     <nav className="fixed-top">
        //         <span className="menu-icon" onClick={openClick}>
        //             <i className="fa fa-bars fa-2x"></i>
        //         </span>
        //         <div id="mySidenav" className="sidenav">
        //             <a href="javascript:void(0)" className="closebtn" onClick={closeClick}>&times;</a>
        //             <a href="#">About</a>
        //             <a href="#">{t("how_it_works")}</a>
        //             <a href="#">Browse Jobs</a>
        //             <a href="#">Contact</a>
        //         </div>

        //         <a href="/" className="logo">
        //             {t("app_name")}
        //         </a>
        //         <span className="menu">
        //             <ul>
        //                 <li className="pc-view"><a href="#">{t("how_it_works")}</a></li>
        //                 <li className="pc-view"><a href="#">{t("Browse_Jobs")}</a></li>
        //                 <li className="lang-dropdown">
        //                     {/* <button onClick={selectLang} className="lang-dropbtn">Languages</button> */}
        //                     < div id="lang-Dropdown pc-view" className="lang-dropdown-content">
        //                         <span className="pc-view-lang" onClick={() => i18n.changeLanguage("en")}> English</span>
        //                         <span className="pc-view-lang" onClick={() => i18n.changeLanguage("ar")}>عربي</span>
        //                     </div>

        //                 </li>
        //                 {token === null ?
        //                     <span>
        //                         <li><Link to="/user/login">{t("log_in")}</Link></li>
        //                         <li><Link to="/user/signup">{t("join")}</Link></li>
        //                         {/* <li onClick={handleClick}> <a href="/user/signup">{t("join")}</a></li> */}
        //                     </span>
        //                     :
        //                     <span>
        //                         <li><a onClick={checkUser}>Profile</a></li>
        //                         <li>
        //                             <Button onClick={() => { localStorage.clear(); window.location.href = "/"; }} id="logout">
        //                                 Logout
        //                     </Button>
        //                         </li>
        //                     </span>}


        //             </ul>


        //         </span>
        //     </nav>

        // </header>

    )

}

export default Navbar;