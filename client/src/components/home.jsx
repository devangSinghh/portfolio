import React, { Component } from 'react';
import Nav from './nav';
import Timelinee from './timeline';
import arrow from '../assets/arrow.svg';
import Typist from 'react-typist';
import {Box} from './testpage';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Fade from 'react-reveal/Fade';
import devang from '../assets/dev.png';
import '../style/home.scss';
import  Footer from './footer';
import Image from './frontPageimg';
import ScrollReveal from 'scrollreveal';
import Quote from './quote';
import Form from '../components/form';
import CardContainer from '../containers/cardContainer';
import Card_ from './Card';
export default class Home extends Component {

    state = {
       show: false,
       showArrow: false,
       ArrowOff:true,
       showButton:false
    }
    form = React.createRef();
    projects = React.createRef();

    showList = () => {
      return (
          <ul className="list-group list">
            <li className="list-item m-2 p-1 is-white">Academics</li>
            <li className="list-item m-2 p-1 is-white">Projects</li>
            <li className="list-item m-2 p-1 is-white">Interests</li>
          </ul>
      );
    }

    showRect = () => {
      return (
          <span className="mb-4 is-pTSans" >
            <Image/>
          </span>
      );
    }

    handlePageChange = e => {
        if(this.page.current) {
            this.page.current.scrollIntoView({
                behavior : "smooth",
                block: "nearest"
            })
        }
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({show:true})
      }, 4200);
      setTimeout(() => {
        this.setState({showArrow:true})
      },3750);
      setTimeout(() => {
        this.setState({ArrowOff:false})
      },6000);
      setTimeout(() => {
        this.setState({showButton:true})
      },3900);
    }
    executeFormScroll = () => this.form.current.scrollIntoView()
    executeProjectScroll = () => this.projects.current.scrollIntoView()
    render() {
        return (
        <React.Fragment>
            <div className="section">
            <div className="vh-100 wall">
                <Nav/>
                <div className="page-background wall">
                <div className="row m-0">
                <div className="col-md-7 mt-5 d-flex justify-content-center">
                  <div className="row d-flex flex-column wall">
                  <Typist><div className="row"><h1 className="mainpage-heading is-white is-monospace is-bold is-large ml-1 pl-2 ">Hi!<br />I<span style={{fontFamily:"Space Mono"}}>&#x2019;</span>m Devang</h1></div>
                    <div className="row"><h3 className="is-white is-monospace is-bold intro pl-2 ml-1">Fullstack developer based in India</h3></div></Typist>
                    <div className="row">{this.state.showButton && <motion.h3 initial={{y:10}} animate={{y:0}} className="is-monospace is-bold ml-1 to-project pl-2 is-white">Have a project, <span className="letstalk" onClick={this.executeFormScroll}>let&#x2019;s talk</span></motion.h3>}</div>
                  </div>
                </div>
                <div className="col-md-5 p-3" >
                    <div>{this.state.show && this.showRect()}</div>
                </div>
                    
                </div>
                <div className="footer d-flex justify-content-center">
                    {this.state.ArrowOff && this.state.showArrow && <span><img src={arrow} className="img img-fluid mb-5 arrow" alt=""/></span>}
                </div>
                </div>
                
            </div>
            </div>
            <div className="container-fluid">
              <Timelinee />
              {/* <Quote /> */}
              <div><CardContainer/></div>
              <div ref={this.form}><Form /></div>
            </div>
            {/* <Footer/> */}
          </React.Fragment>
        );

    }
}
