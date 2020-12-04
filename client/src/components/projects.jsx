import React, { Component } from 'react'
import { motion } from 'framer-motion';
import axios from 'axios';
import { Button } from '@material-ui/core';
export default class Projects extends Component {

    state = {
        project : []
    }

    componentDidMount = async() => {
        const { match: { params } } = this.props;
        const {data:project} = await axios.get(`/projects/${params.project}`)
        this.setState({project});
    }
    

    render() {
        let project = this.state.project[0] === undefined ? [] : this.state.project[0];
        return (
            <React.Fragment>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center align-items-center project">
                    <div className="col-md-6 column-title ">
                        <h1>{project.projectHeading}</h1>
                    </div>
                </div>
                <div className="container p-0 pl-2 pr-2 wrapper-text-container">
                <motion.div initial={{y:40}} animate={{y:0}} transition={{duration:0.6}} className="container text-container p-5">
                    <p className="mt-5"dangerouslySetInnerHTML={{__html: `${project.projectBody}`}}></p>
                    <span className="github_repo_Link">
                        <a style={{textDecoration: 'none'}} className="p-2" >Github repo<i className="pl-2 link fa fa-external-link"></i></a>
                    </span>
                </motion.div>
                
                </div>
                
            </div>
        </React.Fragment>
        )
    }
}
