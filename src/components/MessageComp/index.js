const MessageComp = ({item: {name, date, text, textColor, nameColor}}) => (
    <>
            <div className="card bg-dark m-auto">
                <div className="card-header text-white">
                    {date}
                </div>
                <div className="card-body">
                    <h5 className="card-title" style={{color: nameColor}}>{name}</h5>
                    <p className="card-text" style={{color: textColor}}>
                        {text}
                    </p>
                </div>
        </div>
    </>
)

export default MessageComp
