import React, { Component } from 'react'
import axios from 'axios';
import { motion } from 'framer-motion';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ScrollReveal from 'scrollreveal';
export default class Carousel extends Component {

    state = {
        items:[
            {
                "name": "Devendra Fadnavis",
                "message": "\"This 4Ps model leads to 4Fs: funds, functions, functionaries and facts (or knowledge). These get decentralised in the partnership, enabling true democracy to exist and flourish.\"",
                "image": "/media/testimonial/sushree-uma-bharti.jpg"
            },
            {
                "name": "Amit Chandra",
                "message": "In a collaborative project, you need to be very clear about who is doing what, you must have good reporting mechanisms, you need to have good communication on an ongoing basis.",
                "image": "/media/testimonial/amit-chandra.jpg"
            },
            {
                "name": "Suresh Subramani",
                "message": "The field of genetics has been turned on its head thanks to gene-editing technology. The biggest opportunities with gene editing are in healthcare and in agriculture.",
                "image": "/media/testimonial/suresh-subramani.jpg"
            }
        ],
        index: 0,
        __carousel_class:"container container-items m-4 fading"
    }
    componentDidMount() {
        ScrollReveal().reveal('.container-items', { scale: 0.85 });
    }
    
    handleRightSide = () => {
        let index = this.state.index;
        let items = this.state.items;
        if(index === items.length - 1)
        this.setState({index:0});
        else
        this.setState({index:this.state.index+1});

        // this.setState({__carousel_class:this.state.__carousel_class+"fading"})
    }
    handleLeftSide = () => {
        let index = this.state.index;
        if(index === 0)
        this.setState({index:this.state.items.length-1});
        else 
        this.setState({index:this.state.index-1});

        // this.setState({__carousel_class:this.state.__carousel_class+"fading"})
    }
    render() {
        let item = this.state.items;
        let index = this.state.index;
        let carousel_class = this.state.__carousel_class
        console.log(index);
        return (
            <div className="container-fluid p-5 bg-light">
                <div className="container carousel-container p-2">
                    <div className="left-arrow" onClick={this.handleLeftSide} ><i className="fa fa-3x fa-angle-left"></i></div>
                    <div className="right-arrow" onClick={this.handleRightSide}><i className="fa fa-3x fa-angle-right"></i></div>
                <div className={carousel_class}>
                    <TransitionGroup>
                        <CSSTransition
                            key={index}
                            timeout={1000}
                            classNames="messageout"
                            >
                            <div key="transition-group-content">
                            <h1>{item[index].name}</h1>
                            <p>{item[index].message}</p>
                            </div>
                            
                        </CSSTransition>
                    </TransitionGroup>
                </div>
                </div>
            </div>
        )
    }
}
