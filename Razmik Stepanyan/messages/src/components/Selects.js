import { useState, useEffect } from 'react';
import "../styles/selects.css";
function Selects({changeColor}){
     const [color, setColor] = useState('');
     const [text, setText] = useState('');
     useEffect(() => {
          if(color && text) {
               changeColor(color,text)
          }
     }, [color,text]);
     const colors = [
          {
               id: '1',
               color: 'red',
               selected:false,
               
          },
          {
               id: '2',
               color: 'blue',
               selected:false,
          },
          {
               id: '3',
               color: 'orange',
               selected:false,
          }
     ]
     return (
          <div className="Selects">
               <h1>{color}</h1>
               <select value={color} onChange={(e) => {
                    setColor(e.target.value)
               }}>
                    <option >
                         select color
                    </option>
                    {
                         colors.map(item => {
                              return(
                                   <option 
                                        key={item.id}
                                        value={item.color} 
                                        >
                                        {item.color}
                                   </option>
                              )
                         })
                    }
               </select>
               <h1>{text}</h1>
               <select onChange={(e) => {
                    setText(e.target.value)
               }}>
                    <option value="select">
                         select item
                    </option>
                    <option value="text">
                         text
                    </option>
                    <option value="name">
                         name
                    </option>
               </select>
          </div>
     )
}

export default Selects;