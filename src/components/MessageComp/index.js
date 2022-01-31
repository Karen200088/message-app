const MessageComp = ({item: {name, date, text, textColor, nameColor}}) => (
    <>


            <div className="card-header">
                {date}
            </div>
            <div className="card-body">
                <h5 className="card-title" style={{color: nameColor}}>{name}</h5>
                <p className="card-text" style={{color: textColor}}>
                    {text}
                </p>
            </div>

    </>
)

export default MessageComp
