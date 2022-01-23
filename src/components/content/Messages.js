import React from "react";
import {useEffect, useState} from "react";

function Messages({selectedColor, selectedWhatColor}) {


    const [allMessages, setUserMessages] = useState([]);

    useEffect(() => {
        fetch('/generated.json')
            .then(res => res.json())
            .then(res => {
                setUserMessages(res.messages);
            });
    }, []);

    console.log(selectedColor)
    console.log(selectedWhatColor)

    return (

        <>
            <div className="messages-block">
                <div className="container-fluid">
                    <div className="row">

                        {
                            allMessages.map(item => {
                                return (
                                    <div key={item.id} className="card text-center bg-dark col-5 mt-3 m-auto">
                                        <div className="card-header" style={{color : "white"}}> {item.date} </div>
                                        <div className="card-body">

                                         <h4 className="card-title"  style={{color:selectedWhatColor === 'name' ? selectedColor : item.color}}>{item.name}</h4>}

                                            <p className="card-text"
                                               style={{color:selectedWhatColor === 'text' ? selectedColor : item.color}}
                                            > {item.text} </p>

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
