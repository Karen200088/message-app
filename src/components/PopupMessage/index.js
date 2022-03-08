import MessageComp from "../MessageComp";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchMessages} from "../../redux/messagesAsync/messagesFetch";

const PopupMessage = () => {
    const params = useParams()

    const dispatch = useDispatch();

    const messages = useSelector(state => state.messagesFromDb);


    useEffect(() => {
        dispatch(fetchMessages());
    }, []);

    return (


            <div className="view-message-popup-wrapper ">
                <div className="m-auto col-5 pt-5">
                    <MessageComp item={messages[params.id - 1]}/>
                </div>
            </div>

    )

}

export default PopupMessage
