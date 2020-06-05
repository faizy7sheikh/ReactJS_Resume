import React, { Component } from 'react';




export default class Layout extends Component{

    // state ={
    //     img:img1
    // }
    
    render(props){
        return(
            <React.Fragment>
                <div className="row row1">
                    <div className="col-md-6 bg-success text-center">
                        <strong>{this.props.name}</strong>
                        <p><a href="">{this.props.email}</a></p>
                        <p>{this.props.mobile}</p>
                        <p>{this.props.address}</p>
                    </div>
                    <div className="col-md-6  bg-primary">
                        <img src={process.env.PUBLIC_URL+"/image/resumepic.png"} id="resumepic" alt="profile"/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

