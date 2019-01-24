import React ,{ Component } from 'react';
import ProductDetails from './ProductDetails';

class AddressDetails  extends Component {
      
    constructor(props) {
        super(props);
        this.state = {
            street:null,
            colony:null,
            city:null,
            state:null,
            pincode:null
      };    
    }
    
    
      handleChange=(e) => {
        this.setState({
            [e.target.id] : e.target.value
         })
      }
    handleSubmit =(e) => {
        e.preventDefault();
        console.log("state is");
        console.log(this.state);
        this.props.callbackFromParent(this.state);
    }

      
   render(){

     console.log("prop is");
    console.log(this.props); 
       return (

          
        <div className="" >

            <form onSubmit={this.handleSubmit}>
                <label htmlFor="street">Street:</label>
                <input type="text" id="street" onChange={this.handleChange} />
                <label htmlFor="colony">Colony:</label>
                <input type="text" id="colony" onChange={this.handleChange} />
                <label htmlFor="city">City:</label>
                <input type="text" id="city" onChange={this.handleChange} />
                <label htmlFor="state">State:</label>
                <input type="text" id="state" onChange={this.handleChange} />
                <label htmlFor="pincode">Pincode:</label>
                <input type="text" id="pincode" onChange={this.handleChange} />
                <button>Submit</button>
            </form>
      </div>
            
            
    )
   }
}
export default AddressDetails