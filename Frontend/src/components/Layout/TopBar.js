import React, { Component } from "react";
import { render } from "react-dom";
import AUX from '../../hoc/Aux_';
import { Link } from 'react-router-dom';


class Header extends React.Component {
	render() {
		return (
			<AUX>
                {/*app header*/} 
                <div class="app-header header top-header">
                    <div class="container">
                        <div class="d-flex">
                            <a class="header-brand text-left" href="index.html">
                                {/* <img src="../static/assets/images/brand/logo-hodersea.png" class="header-brand-img desktop-lgo" alt="Hodersea logo"/>
                                <img src="../static/assets/images/brand/logo1-hodersea.png" class="header-brand-img dark-logo" alt="Hodersea logo"/> */}
                                {/* <img src="../static/assets/images/brand/favicon.png" class="header-brand-img mobile-logo" alt="Dashtic logo"/>
                                <img src="../static/assets/images/brand/favicon1.png" class="header-brand-img darkmobile-logo" alt="Dashtic logo"/> */}
                            </a>
                            {/*<a id="horizontal-navtoggle" class="animated-arrow hor-toggle"><span></span></a>{/* sidebar-toggle*/}
                           {/*} <div class="dropdown  header-option">
                                <a class="nav-link icon p-0" data-toggle="dropdown">
                                    <svg class="header-icon" x="1008" y="1248" viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
                                        <path opacity=".3" d="M19.28,8.6 L18.58,7.39 L17.31,7.9 L16.25,8.33 L15.34,7.63 C14.95,7.33 14.54,7.09 14.11,6.92 L13.05,6.49 L12.89,5.36 L12.7,4 L11.3,4 L11.11,5.35 L10.95,6.48 L9.89,6.92 C9.48,7.09 9.07,7.33 8.64,7.65 L7.74,8.33 L6.69,7.91 L5.42,7.39 L4.72,8.6 L5.8,9.44 L6.69,10.14 L6.55,11.27 C6.52,11.57 6.5,11.8 6.5,12 C6.5,12.2 6.52,12.43 6.55,12.73 L6.69,13.86 L5.8,14.56 L4.72,15.4 L5.42,16.61 L6.69,16.1 L7.75,15.67 L8.66,16.37 C9.05,16.67 9.46,16.91 9.89,17.08 L10.95,17.51 L11.11,18.64 L11.3,20 L12.69,20 L12.88,18.65 L13.04,17.52 L14.1,17.09 C14.51,16.92 14.92,16.68 15.35,16.36 L16.25,15.68 L17.29,16.1 L18.56,16.61 L19.26,15.4 L18.18,14.56 L17.29,13.86 L17.43,12.73 C17.47,12.42 17.48,12.21 17.48,12 C17.48,11.79 17.46,11.57 17.43,11.27 L17.29,10.14 L18.18,9.44 L19.28,8.6 Z M12,16 C9.79,16 8,14.21 8,12 C8,9.79 9.79,8 12,8 C14.21,8 16,9.79 16,12 C16,14.21 14.21,16 12,16 Z"></path>
                                        <path d="M19.43,12.98 C19.47,12.66 19.5,12.34 19.5,12 C19.5,11.66 19.47,11.34 19.43,11.02 L21.54,9.37 C21.73,9.22 21.78,8.95 21.66,8.73 L19.66,5.27 C19.57,5.11 19.4,5.02 19.22,5.02 C19.16,5.02 19.1,5.03 19.05,5.05 L16.56,6.05 C16.04,5.65 15.48,5.32 14.87,5.07 L14.49,2.42 C14.46,2.18 14.25,2 14,2 L10,2 C9.75,2 9.54,2.18 9.51,2.42 L9.13,5.07 C8.52,5.32 7.96,5.66 7.44,6.05 L4.95,5.05 C4.89,5.03 4.83,5.02 4.77,5.02 C4.6,5.02 4.43,5.11 4.34,5.27 L2.34,8.73 C2.21,8.95 2.27,9.22 2.46,9.37 L4.57,11.02 C4.53,11.34 4.5,11.67 4.5,12 C4.5,12.33 4.53,12.66 4.57,12.98 L2.46,14.63 C2.27,14.78 2.22,15.05 2.34,15.27 L4.34,18.73 C4.43,18.89 4.6,18.98 4.78,18.98 C4.84,18.98 4.9,18.97 4.95,18.95 L7.44,17.95 C7.96,18.35 8.52,18.68 9.13,18.93 L9.51,21.58 C9.54,21.82 9.75,22 10,22 L14,22 C14.25,22 14.46,21.82 14.49,21.58 L14.87,18.93 C15.48,18.68 16.04,18.34 16.56,17.95 L19.05,18.95 C19.11,18.97 19.17,18.98 19.23,18.98 C19.4,18.98 19.57,18.89 19.66,18.73 L21.66,15.27 C21.78,15.05 21.73,14.78 21.54,14.63 L19.43,12.98 Z M17.45,11.27 C17.49,11.58 17.5,11.79 17.5,12 C17.5,12.21 17.48,12.43 17.45,12.73 L17.31,13.86 L18.2,14.56 L19.28,15.4 L18.58,16.61 L17.31,16.1 L16.27,15.68 L15.37,16.36 C14.94,16.68 14.53,16.92 14.12,17.09 L13.06,17.52 L12.9,18.65 L12.7,20 L11.3,20 L11.11,18.65 L10.95,17.52 L9.89,17.09 C9.46,16.91 9.06,16.68 8.66,16.38 L7.75,15.68 L6.69,16.11 L5.42,16.62 L4.72,15.41 L5.8,14.57 L6.69,13.87 L6.55,12.74 C6.52,12.43 6.5,12.2 6.5,12 C6.5,11.8 6.52,11.57 6.55,11.27 L6.69,10.14 L5.8,9.44 L4.72,8.6 L5.42,7.39 L6.69,7.9 L7.73,8.32 L8.63,7.64 C9.06,7.32 9.47,7.08 9.88,6.91 L10.94,6.48 L11.1,5.35 L11.3,4 L12.69,4 L12.88,5.35 L13.04,6.48 L14.1,6.91 C14.53,7.09 14.93,7.32 15.33,7.62 L16.24,8.32 L17.3,7.89 L18.57,7.38 L19.27,8.59 L18.2,9.44 L17.31,10.14 L17.45,11.27 Z M12,8 C9.79,8 8,9.79 8,12 C8,14.21 9.79,16 12,16 C14.21,16 16,14.21 16,12 C16,9.79 14.21,8 12,8 Z M12,14 C10.9,14 10,13.1 10,12 C10,10.9 10.9,10 12,10 C13.1,10 14,10.9 14,12 C14,13.1 13.1,14 12,14 Z" ></path>
                                    </svg>
                                     <span class="nav-span">Academic Year <i class="fa fa-angle-down ml-1 fs-18"></i></span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-left dropdown-menu-arrow animated">
                                    
                                    <a class="dropdown-item" href="#">
                                        2018-2019
                                    </a>
                                    <a class="dropdown-item" href="#">
                                        2019-2020
                                    </a>
                                    <a class="dropdown-item" href="#">
                                        2020-2021
                                    </a>
                                </div>
                            </div>*/}
                            <div class="d-flex order-lg-2 ml-auto">
                                <a href="#" data-toggle="search" class="nav-link nav-link-lg d-md-none navsearch">
                                    <svg class="header-icon search-icon" x="1008" y="1248" viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
                                        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                    </svg>
                                </a>
                                <div class="mt-1">
                                    <form class="form-inline">
                                        <div class="search-element">
                                            <input type="search" class="form-control header-search" placeholder="Search…" aria-label="Search" tabindex="1"/>
                                            <button class="btn btn-primary-color" type="submit">
                                                <svg class="header-icon search-icon" x="1008" y="1248" viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
                                                    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </form>
                                </div>{/* SEARCH */} 
                                 {
                                    this.props.token ?
                                    
                                    <Link class="dropdown-item d-flex" to="/logout">Logout</Link> 
                                    :
                                    <Link class="dropdown-item d-flex" to="/login">Login</Link>
                                 }
                            </div>
                        </div>
                    </div>
                </div>
                {/*/app header*/}
                {/* Horizontal-menu */}
                <div class="horizontal-main hor-menu clearfix">
                    <div class="horizontal-mainwrapper container clearfix">
                        <nav class="horizontalMenu clearfix">
                            <ul class="horizontalMenu-list">
                                <li aria-haspopup="true">
                                    <a href="#" class="sub-icon">
                                        <svg class="hor-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                        <polyline points="2 17 12 22 22 17"></polyline>
                                        <polyline points="2 12 12 17 22 12"></polyline></svg>
                                        Infrastructure <i class="fa fa-angle-down horizontal-icon"></i>
                                     </a>
                                     <ul class="sub-menu">
                                     <li aria-haspopup="true"><Link to="/academic">Academic Year</Link></li>
                                     <li aria-haspopup="true"><Link to="/infrastructure">University/Group</Link></li>
                                     <li aria-haspopup="true"><Link to="/branch">Branch</Link></li>
                                     <li aria-haspopup="true"><Link to="/classes">Class</Link></li>
                                     <li aria-haspopup="true"><Link to="/sections">Section</Link></li>
                                     <li aria-haspopup="true"><Link to="/subjects">Subjects</Link></li>
                                     <li aria-haspopup="true"><Link to="/student">HobbyClub</Link></li>
                                     <li aria-haspopup="true"><Link to="/student">Syllabus</Link></li>
                                     <li aria-haspopup="true"><Link to="/student">Timetable</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        {/*Nav end */}
                    </div>
                </div>
                {/* Horizontal-menu end */} 
</AUX>
			
		);
	}
}export default Header;