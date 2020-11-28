import React, { Component } from 'react'
import '../style/home.scss'
import arrow from '../assets/arrow.svg';
export default class Arrow extends Component {

    renderArrow() {
        return (
            <div className="jumbotron jumbotron-fluid mr-auto">
                <img src={arrow} alt=""/>
            </div>
        );
    }

    render() {
        return (
            <div>
               { setTimeout(() => {
                    this.renderArrow()
                }, 3000)}
            </div>
        )
    }
}
