import React,{Component} from 'react'
import ProductDetails from './ProductDetails';
import AddressDetails from './AddressDetails';
import { connect } from 'react-redux'
import Axios from 'axios';

class CheckoutComponent extends Component{


    constructor(props) {
        super(props);
        this.state ={
            addressDetails : ''
        };    
    }

    

    myCallBack = (dataFromChild) => {
        this.setState({
            addressDetails: dataFromChild
        });


        const {products, totalCost, cartId} =this.props;
        Axios.post('/cartEntry',{
            cartId: cartId,
            totalCost: totalCost,
            products: products

        }).then(res =>{
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
            <div style={rightCom}><ProductDetails/></div>
            <div style={leftCom}><AddressDetails callbackFromParent={this.myCallback} /></div>
            <material />
        </div>
        )
    }

}

const mapStateToProps = (state) => {

    return {
        productsList: state.products
    }
}

export default connect(mapStateToProps)(CheckoutComponent)
