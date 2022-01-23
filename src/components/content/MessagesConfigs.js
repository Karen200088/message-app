import React from "react";

function MessagesConfigs( { setSelectedColor , setSelectedWhatColor } ) {


    return (


        <div className="color-block">
            <div className="container-fluid">
                <div className="row mt-4">

                    <div className="col-4 m-auto ">
                         <h5>Color</h5>
                        <select
                            // value={selectedColor}
                                onChange={(e)=>setSelectedColor(e.target.value)}
                                className="form-select form-select-lg"
                                aria-label="Default select example"
                        >

                            <option selected disabled>Choose</option>
                            <option value="green">Green</option>
                            <option value="orange">Orange</option>
                            <option value="aqua">Aqua</option>
                        </select>
                    </div>

                    <div className="col-4 m-auto">
                        <h5>Choose which color to change?</h5>
                        <select
                            // value={selectedWhatColor}
                            onChange={(e)=>setSelectedWhatColor(e.target.value)}
                            className="form-select form-select-lg"
                            aria-label="Default select example"
                        >
                            <option selected disabled>Choose</option>
                            <option value="name">Name</option>
                            <option value="text">Text</option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
    )

}


export default MessagesConfigs;

