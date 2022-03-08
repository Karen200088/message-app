import {getMessagesAction} from "../reducers/messagesReducer";

export const fetchMessages = () => {
    return (dispatch) => {
        fetch('/messages.json')
            .then(response => response.json())
            .then(json => dispatch(getMessagesAction(json.messages)));
    }

}
