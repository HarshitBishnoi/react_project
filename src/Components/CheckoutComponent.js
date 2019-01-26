import React,{Component} from 'react'
import ProductDetails from './ProductDetails';
import AddressDetails from './AddressDetails';
import { connect } from 'react-redux'
import Axios from 'axios';

class CheckoutComponent extends Component{
    state ={
        addressDetails : 
            {
                street:null,
                colony:null,
                city:null,
                state:null,
                pinCode:null
            }

    }; 
    myCallBack = (addressDetails) => {
        console.log(addressDetails);
        this.setState({
            addressDetails: this.addressDetails
        });

        var headers = {
            'Content-Type': 'application/json'
        }

         const {products, totalCost, cartId} =this.props;
          console.log(products);
          console.log(cartId);
          console.log(addressDetails);
          console.log(totalCost);
         Axios.post('http://localhost:8080/addCartEntry/',{
             cartId: cartId,
             products: products ,
             address : addressDetails ,
             totalCost:totalCost 
         },{headers: headers}).then(res =>{
             console.log(res);
         });

    
    };
   

    render(){
        let leftCom = {
            float:'left',
            width:'70%'
        };

        let rightCom = {
            float:'right',
            width:'30%'
        };
        return(
            <div>            
            { <div style={rightCom}><ProductDetails/></div> }
            <div style={leftCom}><AddressDetails myCallBack={this.myCallBack} /></div>
            <material />
        </div>
        )
    }

}

const mapStateToProps = (state) => {

    return {
        products: state.products,
        totalCost: state.totalCost,
        cartId: state.cartId

    }
}

export default connect(mapStateToProps)(CheckoutComponent)
