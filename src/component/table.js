import React, { Fragment } from 'react';
import Tbody from './tbody';


const Table = props =>{
    return(
        <Fragment>
            <table className="table table-active">
                <thead>
                <tr>
                    <th>Degree/Course</th>
                    <th>Institute</th>
                    <th>Year Of Passing</th>
                    <th>Percentage</th>
                </tr>
                </thead>
                <tbody>
                    <Tbody
                    degree="Bachelor of Engineering"
                    collegeName="R.R.Institute of Technology"
                    yearOfPassing={2018}
                    percentage="61.00"/>
                    <Tbody
                    degree="Pre University Course"
                    collegeName="Triton International College"
                    yearOfPassing={2013}
                    percentage="66.80"/>
                     <Tbody
                    degree="SLC"
                    collegeName="Koteshwor Saraswoti Secondary School"
                    yearOfPassing={2011}
                    percentage="71.38"/>
                </tbody>
            </table>
        </Fragment>
    )
}
export default Table;