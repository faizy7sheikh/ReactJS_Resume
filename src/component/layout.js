import React, { Component } from 'react';




export default class Layout extends Component{

    state ={
        img:"/im1.jpg"
    }
    
    render(props){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-md-6 bg-success text-center">
                        <strong>{this.props.name}</strong>
                        <p><a href="">{this.props.email}</a></p>
                        <p>{this.props.mobile}</p>
                        <p>{this.props.address}</p>
                    </div>
                    <div className="col-md-6 bg-primary">
                        <img src={this.state.img} alt="profile" id="imag" width="200px" height="200px"/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

