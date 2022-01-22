import '../styles/messages.css';
function Messages({messagesObj}) {
     return (
          <div className="Messages">
               <div className="container">
                    {messagesObj.map(item => {
                         return (
                              <div className='item' key={item.id}>
                                   <p className='name' style={{color:item.nameColor}}>{item.name}</p>
                                   <p className='date'>{item.date}</p>
                                   <p className='text' style={{color:item.textColor}}>{item.text}</p>
                              </div>
                         )
                    })}
               </div>
          </div>
     )
}


export default Messages;