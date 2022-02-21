
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ListClientComponent from './component/ListClientComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import CreateClientComponent from './component/CreateClientComponent';
import ViewClientComponent from './component/ViewClientComponent';
// import DeleteClientComponent from './component/DeleteClientComponent';
// import UpdateClientComponent from './component/UpdateClientComponent';

function App() {
  return (
    <div>
        <Router>
          <HeaderComponent/>
              <div className='container'>
                <Switch>
                  <Route path="/" exact component={ListClientComponent}></Route>
                  <Route path="/client" component = {ListClientComponent}></Route>
                  <Route path="/add-client/:id" component = {CreateClientComponent}></Route>
                  <Route path="/delete-client/:id" component={ListClientComponent}></Route>
                  <Route path="/view-client/:id" component={ViewClientComponent}></Route>
                  {/* <Route path="/view-client/:id" component={ViewClientComponent}</Route> */}
                </Switch> 
              </div>
            <FooterComponent/>
        </Router>
     
    </div>
  );
}

export default App;
