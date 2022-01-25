import React, {useContext, useEffect, useState} from "react";

const MessagesContext = React.createContext(null)

const MessagesProvider = ({children}) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        fetch('/db.json')
            .then(res => res.json())
            .then(res => setMessages(res.messages))
            .catch(e => console.log('error from messagesContext', e))
    },[])

    return (
        <MessagesContext.Provider value={{messages}}>
            {children}
        </MessagesContext.Provider>
    )
}

export const useMessagesData = () => useContext(MessagesContext)

export default MessagesProvider
