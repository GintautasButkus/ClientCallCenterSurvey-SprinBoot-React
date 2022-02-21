import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            clients: []
        }
    }

    render() {
        return (
            <div > 
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div><a href='http://jpphp.storozenko.lt/gintautas/' className='navbar-brand'>Call Center Client Management App</a></div>
                    </nav>
                </header>
                
            </div>
        );
    }
}

export default HeaderComponent;