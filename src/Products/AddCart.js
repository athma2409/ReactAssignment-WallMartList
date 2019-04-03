import React, { Component } from 'react';
export default class Serach extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
              
                <button onClick={() => {
                    this.props.search("Button Clicked");
                }}>Add To Cart</button>

            </div>
        )
    }

}

