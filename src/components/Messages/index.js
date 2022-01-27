import React, {memo, useRef, useState} from "react";
import {useMessagesData} from "../../contexts/messagesContext";
import MessageComp from "../MessageComp";
import {useEffect} from "react";
import {FILTER_OPTIONS} from "../../helpers/constants";
import {NavLink} from "react-router-dom";

const Messages = ({configs}) => {
    const [filteredMessages, setFilteredMessages] = useState([])
    const [filterSelectValue, setFilterSelectValue] = useState(FILTER_OPTIONS[0])
    const [filterInputValue, setFilterInputValue] = useState('')

    const inputRef = useRef(null)

    const {messages} = useMessagesData()

    useEffect(() => {
        filterMessages()
        return () => {
            clearTimeout(inputRef.current)
        }
    }, [messages, configs, filterSelectValue, filterInputValue])

    const filterMessages = () => {
        clearTimeout(inputRef.current)
        inputRef.current = setTimeout(() => {
            const filteredData = messages
                .filter(item => item[filterSelectValue].includes(filterInputValue))
                .map(item => {
                    item[configs.target] = configs.color
                    return item
                })
            setFilteredMessages(filteredData)
        }, 400)
    }

    const handleSelectValue = e => {
        setFilterSelectValue(e.target.value)
    }
    const handleInputValue = e => {
        setFilterInputValue(e.target.value)
    }

    return (
        <>
            <div className='message-filter'>
                <input
                    ref={inputRef}
                    value={filterInputValue}
                    onChange={handleInputValue}
                    className='message-input'
                    type="text"
                />
                <select
                    value={filterSelectValue}
                    onChange={handleSelectValue}
                    name="messageFilter"
                    id="messageFilter"
                >
                    {
                        FILTER_OPTIONS.map((item,index) => (
                            <option key={index} value={item}>{item}</option>
                        ))
                    }
                </select>
            </div>
            {
                filteredMessages.map(message => (
                    <NavLink key={message.id} className='message-container' to={`${message.id}`}>
                        <div className='message-item'>
                            <MessageComp item={message}/>
                        </div>
                    </NavLink>

                ))
            }
        </>
    )
}

export default memo(Messages)
