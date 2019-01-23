import React , {Component} from 'react';
import Navbar from './Components/NavBar';
import { BrowserRouter , Route } from 'react-router-dom';
import Home from './Components/Home';
import AddressDetails from './Components/AddressDetails';
import ContactUs from './Components/ContactUs';
import Error from './Components/Error';
import SingleOrder from './Components/SingleOrder';
class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div className="App">
                <Navbar/>
                <Route exact path='/' component={Home} />
                <Route path='/addressDetails' component={AddressDetails} />
                <Route path='/contact' component={ContactUs} />
                <Route path='/error' component={Error} />
                <Route path='/orderSummary/:order_id' component={SingleOrder} />
                </div>

                </BrowserRouter>
        );
    }
}
export default App;