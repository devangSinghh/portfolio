import React, { Component } from 'react'
import axios from 'axios';
import ScrollReveal from 'scrollreveal';
export default class Form extends Component {
    state = {
        disabled:true,
        data : {
            name:"",
            organization:"",
            description:"",
            email:"",
            source:""
        }
    }
    componentDidMount = async() => {
        ScrollReveal().reveal('.form-container',{ scale: 0.85,reset:true, viewFactor: 0.3 }  );
    }

    handleChange = ({currentTarget:input}) => {
        const data = {...this.state.data};
        data[input.id] = input.value;
        this.setState({data});
    };
    handleSubmit = async(e) => {
        e.preventDefault();
        const data = this.state.data;
        const payload = {
            name:data.name, 
            email:data.email, 
            organization:data.organization, 
            description:data.description, 
            source:data.source
        }
        const {data:formData}=  await axios.post('/form',payload);
        console.log(formData);
        this.setState({
            data: {
                name:"",
                organization:"",
                description:"",
                email:"",
                source:""
            }
        })
    }//, () => {toast.success("Response received! We'll contact you shortly")}
    render() {
        const data = this.state.data;
        // if(data.name.length && data.email.length && data.organization.length && data.description.length && data.amount.length)this.setState({disabled:false});
        console.log(data);
        return (
            <div className="container form-container">
                <div className="form-wrapper">
                    <h2 className="main-form-heading">Building your digital presence<br/> from the ground up</h2>
                    <h5 className="sub-form-heading">My quick questionnaire is a great initial way to get to know you.<br/> You can always reach out to me personally at <span>devang.iitk@gmail.com</span></h5>
                    <form className="mt-5" onSubmit={this.handleSubmit}>
                        <div className="row form-group m-0">
                            <label className="mr-3 form-labels" htmlFor="">Hello my name is</label>
                            <input id="name" name="name" value={data.name} onChange={this.handleChange} placeholder="Full name" className="mb-5" type="text"/>
                        </div>
                        <div className="row form-group m-0">
                            <label className="mr-3 form-labels" htmlFor="">and I work at/for</label>
                            <input id="organization" name="organization" value={data.organization} onChange={this.handleChange} placeholder="Organization Name" className="mb-5" type="text"/>
                        </div>
                        <div className="col-md-12 p-0">
                            <label>I need you to</label>
                        </div>
                        <textarea id="description" name="description" value={data.description} onChange={this.handleChange} className="mb-3" type="text" placeholder="Describe what you would like me to create" cols="30" rows="10" />
                        <div className="col-md-12 p-0 mb-4">
                            {/* <label>and I can invest around </label>
                            <span className="m-3 amount-dropdown" aria-describedby={idd} onClick={this.handleClick}><span>{this.state.amount}</span> <i className="fa fa-circle"></i></span>
                            <Popover
                        id={idd}
                        open={open}
                        anchorEl={this.state.anchorEl}
                        onClose={this.handleClose}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                        }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                        }}
                    >
                        <ul className="amount-list">
                            {this.state.amounts.map(a => 
                                <li key={a.id} className="" onClick={e => this.handleAmount(e, a.cost)}>&#8377;{a.cost}</li>
                                )}
                        </ul>
                    </Popover> */}
                        </div>
                        <div className="row form-group m-0">
                            <label className="mr-3 form-labels" htmlFor="">We/I heard about you from</label>
                            <input id="source" name="source" value={data.source} onChange={this.handleChange} placeholder="" className="mb-5" type="text"/>
                        </div>
                        <div className="row form-group m-0">
                            <label className="mr-3 form-labels" htmlFor="">and you can reach me at</label>
                            <input id="email" name="email" value={data.email} onChange={this.handleChange} placeholder="Email Address" className="mb-5" type="text"/>
                        </div>
                        <button className="form-button">Let's talk</button>
                    </form>
                </div>
            </div>
        )
    }
}
