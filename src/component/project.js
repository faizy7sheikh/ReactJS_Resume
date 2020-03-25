import React, { Fragment } from 'react';

const Project = props =>{
    return(
        <Fragment>
            <div className="col-md-8">
                <div className="row">
                    <h4>{props.name}</h4>
                </div>
                <div className="row">
                    <p>{props.startDate} {props.endDate}</p>
                </div>
                <div className="row">
                    <p>{props.description}</p>
                </div>
            </div>
        </Fragment>
    )
}
export default Project;