import React, { Fragment } from 'react';

function cuteentdate(){
    return Date('Y/M/D');
}
const Declaration = props =>{
    return(
        <Fragment>
            <p>I hereby declare that the above mentioned details are true to the best of my knowledge.</p>
            <div className="row">
                <div className="col-md-6 pull-left">
                    <p><strong>Date :</strong> {cuteentdate()}</p>
                    <p><strong>Banglore-90</strong></p>
                </div>
                <div className="col-md-6 pull-right text-right">
                    <p>Signature</p>
                    <p>-----------</p>
                </div>
            </div>
        </Fragment>
    )
}
export default Declaration;