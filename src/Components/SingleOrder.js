import React, { Component } from 'react'
import axios from 'axios'
class SingleOrder extends Component {
    state = {
        order: null
    }
    componentDidMount() {
        // console.log(this.props);
        let id = this.props.match.params.order_id;
        axios.get('/orderSummary/' + id)
            .then(res => {
                this.setState({
                    order: res.data
                })
                // console.log(res)
            })

    }
    render() {

        const order = this.state.order ? (

            <div className="post card" key={this.state.order.order_id} >
                <div className="card-content">
                    <div className="card-title">Order Id:{this.state.order.order_id}</div><br />
                    <span className="card-title">Date of Purchase{this.state.order.date_of_purchase}</span><br />
                    <div className="card-title">Shipping Address : {this.state.order.address.street},{this.state.order.address.colony},{this.state.order.address.city},{this.state.order.address.state}, {this.state.order.address.pinCode}</div><br />
                    {this.state.order.products.length ? (
                        this.state.order.products.map(product => {
                            return (
                                <div>
                                    <div className="card-title">Product name: {product.productName}</div>
                                    <div className="card-title">product id: {product.productId}</div>
                                    <div className='card-title'>product price: {product.price}</div>
                                    <div className='card-title'>product quantity: {product.quantity}</div>
                                    <br />
                                </div>
                            )
                        }
                        )
                    ) : (<div className="center">No products to show</div>)
                    }

                    <a className="waves-effect waves-light btn"><i className="material-icons right">cancel</i>Cancel Order</a>
                </div>
            </div>

        ) : (
                <div className='center'>Loading order...</div>
            )
        return (
            <div className="container">
                <h4>
                    {order}
                </h4>

            </div>
        )
    }
}

export default SingleOrder;