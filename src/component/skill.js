import React, { Fragment } from 'react';

const Skill = props =>{
    return(
        <Fragment>
            <ul>
                <li><strong>{props.name}</strong> : {props.details}</li>
            </ul>
        </Fragment>
    )
}

export default Skill;