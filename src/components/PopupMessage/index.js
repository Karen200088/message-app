import MessageComp from "../MessageComp";
import {useParams} from "react-router-dom";
import {useMessagesData} from "../../contexts/messagesContext";

const PopupMessage = () => {
    const params = useParams()
    const {messages} = useMessagesData()

    return (


            <div className="view-message-popup-wrapper ">
                <div className="m-auto col-5 pt-5">
                    <MessageComp item={messages[params.id - 1]}/>
                </div>
            </div>

    )

}

export default PopupMessage
