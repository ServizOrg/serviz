import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
import 'bootstrap/dist/css/bootstrap.min.css';
import FontAwesome from 'react-fontawesome';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'react-multi-carousel/lib/styles.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
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
export default function Nav() {

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
					user: userInStore.user.id
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
		
			<nav className="navbar navbar-expand-lg navbar-light fixed-top">
				<div className="container">
					<a href="/" className="navbar-brand">SERVIZ</a>
					 <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
						 <span className="navbar-toggler-icon">
						 </span>
						 </button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto" id="txt">
							<li className="nav-item active" onClick={handleClick}>
								<a className="nav-link" href="/">Home</a>
							</li>
							<li className="nav-item" onClick={handleClick}>
								<a className="nav-link" href="/about">About</a>
							</li>
							
							
							<li className="lang-dropdown">
                                {/* <button onClick={selectLang} className="lang-dropbtn">Languages</button> */}
                                < div id="lang-Dropdown pc-view" className="lang-dropdown-content">
                                    <span className="pc-view-lang" onClick={() => i18n.changeLanguage("en")}> Eng/</span>
                                    <span className="pc-view-lang" onClick={() => i18n.changeLanguage("ar")}>Ar</span>
                                </div>
								< div id="lang-Dropdown pc-view" className="lang-dropdown-content">
                                   
                                    
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
					</div>
				</div>
			</nav>
		
	)
}
