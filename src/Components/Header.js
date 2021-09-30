import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#"><img src="logo-placeholder-small.png"></img></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item head-item">
                <a class="nav-link"><Link to = "/HomePage" >Home</Link></a>
            </li>
            <li class="nav-item head-item">
                <a class="nav-link"><Link to = "/TaskPage" >Task</Link></a>
            </li>
            <li class="nav-item head-item">
                <a class="nav-link"><Link to = "/UserPage" >Users</Link></a>
            </li>
            </ul>
        </div>
        </nav>
    );
 }
