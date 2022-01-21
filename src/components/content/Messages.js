import React from "react";
import {useEffect, useState} from "react";

function Messages() {


    const [allMessages, setUserMessages] = useState([]);

    useEffect(() => {
        fetch('/generated.json')
            .then(res => res.json())
            .then(res => {
                setUserMessages(res.messages);
            });
    }, []);


    return (
        <>
            <div className="container-fluid mt-5">
                <div className="user-message-cards">
                    <div className="row">

                        {
                            allMessages.map(item => {
                                return (
                                    <div className="card text-center bg-dark text-light col-5 mt-3 m-auto">
                                        <div className="card-header"> {item.date} </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text"> {item.text} </p>
                                        </div>
                                    </div>
                                )

                            })

                        }

                    </div>

                </div>
            </div>

        </>
    )

}


export default Messages;
