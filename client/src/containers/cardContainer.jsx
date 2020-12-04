import React, { Component } from 'react'
import Card_ from '../components/Card';
import axios from '../axios';
import ScrollReveal from 'scrollreveal';
export default class CardContainer extends Component {
    
    state = {
        ptojects : []
    }
    
    componentDidMount = async() => {
        const {data:projects} = await axios.get('/myp');
        console.log(projects)
        this.setState({projects});
        ScrollReveal().reveal('.project__container',{ scale: 0.85,reset:true, viewFactor: 0.3, easing:'cubic-bezier(.51,0,.42,1)' }  );
        
    }
    
    render() {
        let projects = this.state.projects === undefined ? [] : this.state.projects;
        return (
            <div className="container project__container">
                <div className="quote">
                <div className="col-md-12 line"></div>
                    <p className="quote d-flex justify-content-center mt-3">
                        “There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for."
                    </p>
                </div>
                <h1 className="mb-4 mt-4 project__heading">My projects</h1>
                <div className="row">
                    {projects.map(m => 
                        <div className="col-md-4"><Card_ imgUrl="cartest.jpg" title={m.projectHeading} body={m.projectDescription}/></div>
                        )}
                </div>
            </div>
        )
    }
}
