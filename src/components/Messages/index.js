import React, {memo, useRef, useState} from "react";
import {useMessagesData} from "../../contexts/messagesContext";
import MessageComp from "../MessageComp";
import {useEffect} from "react";
import {FILTER_OPTIONS} from "../../helpers/constants";
import {NavLink} from "react-router-dom";
import {useUserData} from "../../contexts/userNameContext"
import {BsFillTrashFill, BsFillPencilFill} from "react-icons/bs";


const Messages = ({configs}) => {
    const [filteredMessages, setFilteredMessages] = useState([])
    const [filterSelectValue, setFilterSelectValue] = useState(FILTER_OPTIONS[0])
    const [filterInputValue, setFilterInputValue] = useState('')
    const [userMessageInputDisabled, setUserMessageInputDisabled] = useState(true);

    const inputRef = useRef(null)
    const commentInputRef = useRef(null)
    const [userMessageChangeInput , setUserMessageChangeInput] = useState(null)

    const {messages} = useMessagesData()
    const {setMessages} = useMessagesData()

    const [userName, userIsAuthorized] = useUserData();

    useEffect(() => {
        filterMessages()
        return () => {
            clearTimeout(inputRef.current)
        }
    }, [messages, configs, filterSelectValue, filterInputValue])

    const handleSelectValue = e => {
        setFilterSelectValue(e.target.value)
    }
    const handleInputValue = e => {
        setFilterInputValue(e.target.value)
    }


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


    const customMessageAdd = () => {

        const current = new Date();
        const commentValue = commentInputRef.current.value

        let exampleObj = {

            "id": (messages.length + 1).toString(),
            "name": userName,
            "date": `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`,
            "text": commentValue,
            "textColor": "white",
            "nameColor": "white",
            "isUserComment": "true"
        }

        if (commentValue.length !== 0) {
            setMessages([...messages, exampleObj]);
            commentInputRef.current.value = "";
        }


    }

    const deleteUserMessage = (deleteMessageId) => {
        if (deleteMessageId <= messages.length) {
            messages.splice(deleteMessageId - 1, 1);
        } else {
            messages.splice(deleteMessageId - 2, 1);
        }
        filterMessages();
    }

    const changeUserMessage = () => {

        setUserMessageInputDisabled(false)

    }

    const liveChangeUserMessage = (changeUserMessageId) => {
        changeUserMessageId = +changeUserMessageId - 1;
        messages[changeUserMessageId].text = userMessageChangeInput.current.value;
        filterMessages();
    }

    const addReplyComment = (replyMessageId) => {
        replyMessageId = replyMessageId - 1;
        console.log(userMessageChangeInput)
        messages[replyMessageId].replyComment = userMessageChangeInput;
        setUserMessageChangeInput("")
        filterMessages();
    }


    return (
        <>
            <div className="container">
                <div className="row">

                    <div className='message-filter mt-3'>
                        <div className="form-outline col-4 m-auto">


                            <input
                                type="search"
                                id="form1"
                                className="form-control w-75"
                                placeholder="Search"
                                aria-label="Search"
                                ref={inputRef}
                                value={filterInputValue}
                                onChange={handleInputValue}
                                style={{float: 'left'}}
                            />
                            <select
                                value={filterSelectValue}
                                onChange={handleSelectValue}
                                name="messageFilter"
                                id="messageFilter"
                                className="form-select w-25"
                            >
                                {
                                    FILTER_OPTIONS.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>

                    {
                        userIsAuthorized === "true" ?
                            <div className="new-message-block mt-4 col-6 m-auto">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">
                                        <h5> Add Message</h5>
                                    </label>
                                    <textarea required ref={commentInputRef} className="form-control"
                                              id="exampleFormControlTextarea1" rows="3"/>
                                    <button
                                        className="login-btn mt-3"
                                        style={{fontSize: "20px", float: "right", borderRadius: "3px"}}
                                        onClick={customMessageAdd}
                                    >
                                        Message
                                    </button>
                                </div>
                            </div>
                            : ""
                    }

                </div>
            </div>


            {
                filteredMessages.map((message) => (

                    <div key={message.id} className='message-item text-center col-5 m-auto pt-2 pb-3 mt-5'>


                        <div className="card text-white bg-dark mb-1">
                            <NavLink className='message-container' to={`${message.id}`}>
                                <MessageComp item={message}/>
                            </NavLink>

                            {
                                message.isUserComment === "false" && userIsAuthorized === "true" ?
                                    <>
                                        <p className="pt-3">
                                            {message.replyComment.length > 1 ?
                                            <span
                                                className="reply-message mb-2">

                                                {userName}:
                                                    <span> {message.replyComment}</span>

                                            </span>
                                                :""}
                                            <input onChange={(e) => setUserMessageChangeInput(e.target.value)} placeholder="Reply message"
                                                   className="form-control mt-3 m-auto reply-input" type="text"/>
                                            <button type="button" className="btn"
                                                    onClick={() => addReplyComment(message.id)}>Reply
                                            </button>
                                        </p>

                                    </>
                                    : ""}
                            {
                                message.isUserComment === "true" ?
                                    <>
                                        <div className="message-control-tools">


                                            <input
                                                ref={userMessageChangeInput}
                                                disabled={userMessageInputDisabled}
                                                type="text"
                                                className="form-control w-75 m-auto"
                                                onBlur={() => setUserMessageInputDisabled(true)}
                                                onChange={() => liveChangeUserMessage(message.id)}
                                                defaultValue={message.text}
                                            />


                                            <p className="user-message-delete">
                                                <BsFillTrashFill onClick={() => deleteUserMessage(message.id)}/>
                                            </p>
                                            <p className="user-message-change">
                                                <BsFillPencilFill
                                                    onClick={() =>
                                                        changeUserMessage(message.id)}/>

                                            </p>
                                        </div>
                                    </>
                                    : ""

                            }

                        </div>


                    </div>

                ))
            }
        </>
    )
}

export default memo(Messages)
