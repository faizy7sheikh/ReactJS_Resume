import React, { Fragment } from 'react';

const Experience = props =>{
    return(
        <Fragment>
            <ul>
            <li><strong>Company Name :</strong><a href={props.src}>{props.name}</a></li>
            <li><strong>Designation :</strong>  {props.designation}</li>
            <li><strong>Technologies :</strong> {props.technologies}</li>
            </ul>
        </Fragment>
    )
}

export default Experience;