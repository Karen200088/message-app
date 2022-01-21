import React from "react";
import {useEffect, useState} from "react";

function Messages() {


    const [allMessages, setUserMessages] = useState();

    useEffect(() => {
        fetch('../../generated.json')
            .then(res => res.json())
            .then(res => {
                setUserMessages(res);
            });
    }, []);

    console.log(allMessages);

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="user-message-cards">
                    <div className="row">

                        <div className="card text-center bg-dark text-light col-5 mt-3 m-auto">
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                            </div>
                        </div>

                        <div className="card text-center bg-dark text-light col-5 mt-3 m-auto">
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                            </div>
                        </div>
                        <div className="card text-center bg-dark text-light col-5 mt-3 m-auto">
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                            </div>
                        </div>
                        <div className="card text-center bg-dark text-light col-5 mt-3 m-auto">
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </>
    )

}


export default Messages;
