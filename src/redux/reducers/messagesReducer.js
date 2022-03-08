const initialState = {
    messagesFromDb: []
}

const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";
const GET_USER = "REMOVE_USER";


export const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_USER:
            return { ...state , users: [...state.users , action.payload]}
        // case REMOVE_USER:
        //     return {name: (action.payload)}
        case GET_USER:
            return { ...state, users: state.users.concat(action.payload) }
        default:
            return state;

    }

}

export const addUserAction = (payload) => ({type: ADD_USER, payload});
export const removeUserAction = (payload) => ({type: REMOVE_USER, payload});
export const getUsersAction = (payload) => ({type: GET_USER, payload});
