// import React, { Component } from 'react';
// import ClientServices from '../SERVICES/ClientServices';

// class UpdateClientComponent extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             id: this.props.match.params.id,
//             firstName: '',
//             lastName: '',
//             birthDate: '',
//             phoneNumber: '',
//             city: '',
//             address: ''
//         }
//         this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
//         this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
//         this.changeBirthDateHandler=this.changeBirthDateHandler.bind(this);
//         this.changePhoneNumberHandler=this.changePhoneNumberHandler.bind(this);
//         this.changeCityHandler=this.changeCityHandler.bind(this);
//         this.changeAddressHandler=this.changeAddressHandler.bind(this);
//         this.updateClient=this.updateClient.bind(this);
// }

//     componentDidMount(){
//         ClientServices.getClientById(this.state.id).then((res) => {
//             let client = res.data;
//             this.state({firstName: client.firstName,
//             lastName: client.lastName,
//             birthDate: client.birthDate,
//             phoneNumber: client.phoneNumber,
//             city: client.city,
//             address: client.address
//         })
//         })
//     }

//     updateClient = (e) => {
//         e.preventDefault();
//         let client = {firstName: this.state.firstName, lastName: this.state.lastName, birthDate: this.state.birthDate, phoneNumber: this.state.phoneNumber, city: this.state.city, address: this.state.address};
//         console.log('client => ' + JSON.stringify(client));

//         ClientServices.updateClient(client, this.state.id).then((res) => {
//             this.props.history.push('/client');
//         });
//     };

    

//     changeFirstNameHandler (event){
//         this.setState({firstName: event.target.value});
//     };

//     changeLastNameHandler (event){
//         this.setState({lastName: event.target.value});
//     };

//     changeBirthDateHandler (event){
//         this.setState({birthDate: event.target.value});
//     };

//     changePhoneNumberHandler (event){
//         this.setState({phoneNumber: event.target.value});
//     };

//     changeCityHandler (event){
//         this.setState({city: event.target.value});
//     };

//     changeAddressHandler (event){
//         this.setState({address: event.target.value});
//     };

//     cancel(){
//         this.props.history.push('/client');
//     }
    
//     render() {
//         return (
//             <div>
//                 <div className='container pt-5'>
//                     <div className='row'>
//                         <div className='card col-md-6 offset-md-3'>
//                             <h3 className='text-center'>Update Client</h3>
//                                 <div className='card-body'>
//                                     <form>
//                                         <div className='form-group'>
//                                             <label>First Name:</label>
//                                             <input placeholder='First Name' name='firstName' className='form-control' value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
//                                         </div>
//                                         <div className='form-group'>
//                                             <label>Last Name:</label>
//                                             <input placeholder='Last Name' name='lastName' className='form-control' value={this.state.lastName} onChange={this.changeLastNameHandler}/>
//                                         </div>
//                                         <div className='form-group'>
//                                             <label>Birth Date:</label>
//                                             <input placeholder='Birth Date' name='birthDate' className='form-control' value={this.state.birthDate} onChange={this.changeBirthDateHandler}/>
//                                         </div>
//                                         <div className='form-group'>
//                                             <label>Phone Number:</label>
//                                             <input placeholder='Phone Number' name='phoneNumber' className='form-control' value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler}/>
//                                         </div>
//                                         <div className='form-group'>
//                                             <label>City:</label>
//                                             <input type='text' placeholder='City' name='city' className='form-control' value={this.state.city}  onChange={this.changeCityHandler}/>
                                            
//                                         </div>
//                                         <div className='form-group'>
//                                             <label>Address:</label>
//                                             <input placeholder='Address' name='address' className='form-control' value={this.state.address}  onChange={this.changeAddressHandler}/>
//                                         </div>
//                                         <button className='btn btn-success width-2 mt-3' onClick={this.updateClient}>Update</button>
//                                         <button className='btn btn-danger width-2 mt-3' onClick={this.cancel.bind(this)} style={{marginLeft:'10px'}}>Cancel</button>
//                                     </form>
//                                 </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     };
// }

// export default UpdateClientComponent;