import React, { Component } from 'react';
import ClientServices from '../SERVICES/ClientServices';

class ListClientComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            clients: []
        }
        this.addClient = this.addClient.bind(this);
        this.updateClient = this.updateClient.bind(this);
    }
        addClient(){
            this.props.history.push('/add-client/-1'); 
        }

        updateClient(id){
            this.props.history.push(`/add-client/${id}`);
        }
    
    
        componentDidMount(){
            ClientServices.getClients().then((res) => {
                this.setState({clients: res.data});
            });
        }

    render() {
        return (
            <div className='table-div'>
                <h2 className='text-center'>Clients list</h2>
                <div className='row'>
                    <div className='col-12 pb-3'>
                        <button className='btn btn-primary width-2' onClick={this.addClient}>Add Client</button>
                    </div>
                </div>
                <div className='row '>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                                <th>Birth Date </th>
                                <th>City</th>
                                <th>Start Date and Time</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.clients.map(
                                    client => 
                                    <tr key = {client.id}>
                                        <td>{client.firstName}</td>
                                        <td>{client.lastName}</td>
                                        <td>{client.phoneNumber}</td>
                                        <td>{client.address}</td>
                                        <td>{client.birthDate}</td>
                                        <td>{client.city}</td>
                                        <td>{client.startDateTime}</td>
                                        <td>
                                            <button onClick={() => this.updateClient(client.id)} className='btn btn-warning'>Update</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListClientComponent;