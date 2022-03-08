import {getUsersAction} from "../reducers/messagesReducer";

export const fetchUsers = () => {
    return (dispatch) => {
        fetch('/users.json')
            .then(response => response.json())
            .then(json => dispatch(getUsersAction(json)));
    }

}
