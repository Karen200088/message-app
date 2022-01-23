import MessageComp from "../MessageComp";
import {useParams} from "react-router-dom";
import {useMessagesData} from "../../contexts/messagesContext";

const PopupMessage = () => {
    const params = useParams()
    const {messages} = useMessagesData()

    return (
        <MessageComp item={messages[params.id - 1]} />
    )

}

export default PopupMessage
