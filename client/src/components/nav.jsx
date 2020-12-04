import React, { Component } from 'react'
import rotate from '../assets/rotate.svg';
import '../style/nav.css';
export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar sticky-top navbar-expand-lg">
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                </button>
                    <div className="collapse navbar-collapse align-items-end mr-4 justify-content-end is-white flex-column is-fira" id="nav">
                    <div className="navbar-nav">
                            <a href="" className="is-fira landingPage-navLinks">contact</a>
                        </div>
                        <div className="navbar-nav">
                            <a href="https://github.com/Luffy-webdev/Page" className="is-fira landingPage-navLinks">github</a>
                        </div>
                        
                    </div>
                    
                </nav>
            </div>
        )
    }
}
