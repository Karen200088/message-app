import React, {Component} from 'react';
import { useEffect } from 'react';

const Header1 = ({color}) => {
     useEffect(() => {
          document.addEventListener('click', clickListener)

          return () => {
               document.removeEventListener('click', clickListener)

          }
     }, [])

     const clickListener = e => {
          if(e.target.localName === 'header'){
               console.log('You clicked on the header');
               
          }
     }
     return (
          <header className='header' style={{backgroundColor : color}}>
               header
          </header>
     )
}

class Header extends Component{
     componentDidMount(){
          document.addEventListener('click', this.clickListener)
     }
     componentWillUnmount(){
          document.removeEventListener('click', this.clickListener)
     }
     clickListener = e => {
          // if(e.target.localName === 'header'){
          //      console.log('You clicked on the header');
               
          // }
          console.log('Hello');
          
     }
     render(){
          const {user, color} = this.props;
          console.log('-----------');
          
          return (
               <header style={{backgroundColor: color}}>
                    {user.name} 
               </header>
          )
     }
}
//export default Header1;
export default React.memo(Header1)