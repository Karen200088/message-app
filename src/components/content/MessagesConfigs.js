import React from "react";

function MessagesConfigs() {
    return (

        <div className="color-block">
            <div className="container-fluid">
                <div className="row mt-4">

                    <div className="col-4 m-auto ">
                        Color
                        <select className="form-select form-select-lg" aria-label="Default select example">

                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className="col-4 m-auto">
                        <h5>What color will change?</h5>
                        <select className="form-select form-select-lg " aria-label="Default select example">
                            <option value='1'>Name</option>
                            <option value="2">Text</option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
    )

}


export default MessagesConfigs;
