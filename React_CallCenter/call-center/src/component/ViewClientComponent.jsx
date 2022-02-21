import React, { Component } from 'react';
import ClientServices from '../SERVICES/ClientServices';

class ViewClientComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            client:{}
            
        }
    }
    
    componentDidMount(){
        ClientServices.getClientById(this.state.id).then(res => {
            this.setState({client: res.data});
        })
    }
    render() {
        return (
            <div>
                <br></br>
                <div className='card col-md-6 offset-md-3 text-center mt-4'>
                    <h3 className='text-center font-weight-bold'>View Client Details</h3>
                    <hr></hr>
                    <div className='card-body'>
                        <div className='row'>
                            <label><b>Client First Name:</b> </label>
                            <div><i>{this.state.client.firstName}</i></div>
                            <hr></hr>
                        </div>
                        <div className='row'>
                            <label><b>Client Last Name:</b> </label>
                            <div><i>{this.state.client.lastName}</i></div>
                            <hr></hr>
                        </div>
                        <div className='row'>
                            <label><b>Phone Number:</b> </label>
                            <div><i>{this.state.client.phoneNumber}</i></div>
                            <hr></hr>
                        </div>
                        <div className='row'>
                            <label><b>Address:</b> </label>
                            <div><i>{this.state.client.address}</i></div>
                            <hr></hr>
                        </div>
                        <div className='row'>
                            <label><b>Birth Date:</b> </label>
                            <div><i>{this.state.client.birthDate}</i></div>
                            <hr></hr>
                        </div>
                        <div className='row'>
                            <label><b>City:</b> </label>
                            <div><i>{this.state.client.city}</i></div>
                            <hr></hr>
                        </div>
                        <div className='row'>
                            <label><b>Start Date and Time:</b> </label>
                            <div><i>{this.state.client.startDateTime}</i></div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default ViewClientComponent;