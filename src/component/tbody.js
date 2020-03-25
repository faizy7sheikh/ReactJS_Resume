import React, { Fragment } from 'react';


const Tbody = props =>{
    return(
        <Fragment>
                <tr>
                    <td>{props.degree}</td>
                    <td>{props.collegeName}</td>
                    <td>{props.yearOfPassing}</td>
                    <td>{props.percentage}</td>
                </tr>
        </Fragment>
    )
}
export default Tbody;