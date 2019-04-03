import React, { Component } from 'react';
import Serach from './Search';
import AddCart from './AddCart';
import './ProductDetails.css'


export default class ProductDetails extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div className="container">

                <table className="table table-striped">

                    <tbody>
                        <tr>
                            <td>{this.props.details.itemId}</td>
                            <td>{this.props.details.name}</td>
                            <td> <img src={this.props.details.thumbnailImage} /></td>
                            <td> {this.props.details.salePrice}</td>

                            <td>
                                <button className="btn btn-primary" onClick={() => {
                                    this.props.add("Item Added");
                                }} >Add To Cart</button>

                                <button className="btn btn-warning" onClick={() => {
                                    this.props.remove("Item Removed");
                                }} >Remove From Cart</button>


                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>






            // <div class="container">
            //     <div class="row">
            //         <div class="col-xs-12 col-sm-4">
            //             <div class="card">
            //                 <a class="img-card">
            //                     <img src={this.props.details.thumbnailImage} />
            //                 </a>
            //                 <div class="card-content">
            //                     <h3>Item Id : {this.props.details.itemId}</h3>
            //                     <p>Item Name : {this.props.details.name}</p>
            //                     <h3>Item Price : {this.props.details.salePrice}</h3>
            //                 </div>
            //                 <div class="card-read-more">
            //                     <button onClick={() => {
            //                         this.props.add("Item Added");
            //                     }} >Add To Cart</button>

            //                     <button onClick={() => {
            //                         this.props.remove("Item Removed");
            //                     }} >Remove From Cart</button>
            //                 </div>
            //             </div>
            //         </div>

            //     </div>
            // </div>



        )
    }

}

