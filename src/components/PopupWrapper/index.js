import {BsArrowLeftSquareFill} from "react-icons/bs";

const PopupWrapper = ({children, onClose}) => {
    return (
        <div className='message-item '>
            <button
                onClick={onClose}
                className="back-button"
            >
                <BsArrowLeftSquareFill/>
            </button>
            {children}
        </div>
    )
}

export default PopupWrapper
