import React, { Component } from 'react';

export default class Serach extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                <input className="col-md-6 form-control space" type="text" placeholder="Search.."
                    onChange={(e) => {
                        this.props.searchText(e.target.value);
                    }} />
                <button className=" btn btn-primary btn-block  " onClick={() => {
                    this.props.search("Button Clicked");
                }}>Search</button>

            </div>
        )
    }

}

