const initialState = {
    messagesFromDb: [],
    userMessages: [],
}

const GET_MESSAGES_FROM_DB = "GET_MESSAGES_FROM_DB";
const REPLY_MESSAGE = "REPLY_MESSAGE";
const ADD_USER_MESSAGE = "ADD_USER_MESSAGE";

export const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_MESSAGES_FROM_DB:
            return {...state, messagesFromDb: action.payload}
        case REPLY_MESSAGE:
            const currentMessage = state.messagesFromDb.find((item) => item.id === action.payload.replyMessageId);
            currentMessage.replyComment.push(action.payload.userMessageChangeInput)
            return {...state}
        case ADD_USER_MESSAGE:
            const messages = [...state.userMessages, action.payload]
            return {...state, userMessages: messages}
        default:
            return state;

    }

}

export const getMessagesAction = (payload) => ({type: GET_MESSAGES_FROM_DB, payload});
export const replyMessageAction = (payload) => ({type: REPLY_MESSAGE, payload});
export const addUserMessageAction = (payload) => ({type: ADD_USER_MESSAGE, payload});
