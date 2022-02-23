import React, { Component } from 'react';
import ClientServices from '../SERVICES/ClientServices';

class ListSurveyComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            surveys: [],
            client:{}
        }
        this.addSurvey = this.addSurvey.bind(this);

    }
        // this.updateClient = this.updateClient.bind(this);
        // this.deleteClient = this.deleteClient.bind(this)
        // this.getSurveys = this.getSurveys.bind(this)
    // }
    //     addSurvey(){
    //         this.props.history.push('/add-client/-1'); 
    //     }

        // updateClient(id){
        //     this.props.history.push(`/add-client/${id}`);
        // }

        // deleteClient(id){
        //     this.setState({clients: this.state.clients.filter(client => client.id != id)});
        // }

        // viewClient(id){
        //     this.props.history.push(`/view-client/${id}`);
        // }

        // getSurveys(id){
        //     this.props.history.push(`/view-survey/${id}`)
        // }


    
    
        componentDidMount(){
            ClientServices.getClientById(this.state.id).then(res => {
                this.setState({client: res.data});
            })
        }
    
    

    render() {
        return (
            <div className='table-div'>
                <h2 className='text-center'>Client's Survey List</h2>
                <div className='row'>
                    <div className='col-2 pb-3'>
                        <button className='btn btn-primary w-100' onClick={this.addSurvey}>Add Survey</button>
                    </div>
                </div>
                <div className='row '>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                
                                <th>Survey Date</th>
                                <th>Service Quality</th>
                                <th>Service Recommendation</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.surveys.map(
                                    survey => 
                                    <tr key = {survey.id}>
                                        <td>{this.state.client.survey.surveyDate}</td>
                                        <td>{survey.serviceQuality}</td>
                                        <td>{survey.serviceRecommendation}</td>
                                        
                                        <td>
                                            {/* <button onClick={() => this.updateClient(client.id)} className='btn btn-danger mx-1 my-1'>✎</button>
                                            <button onClick={() => this.deleteClient(client.id)} className='btn btn-dark mx-1 my-1'>🗑</button>
                                            <button onClick={() => this.viewClient(client.id)} className='btn btn-success mx-1 my-1'>👁</button>
                                            <button onClick={() => this.getSurveys(client.id)} className='btn btn-warning mx-1 my-1'>📖</button> */}
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

export default ListSurveyComponent;