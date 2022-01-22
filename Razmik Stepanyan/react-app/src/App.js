import { Component, useState } from "react";
import Header from "./components/Header";
import {circleColors} from './helpers/constants';
import { useEffect } from "react";

const {
    RED,
    BLUE,
    PURPLE,
    BROWN,
    GREEN,
    ORANGE

} = circleColors;

const circles= [
  {
    id : '1',
    color : RED
  },
  {
    id : '2',
    color : BLUE
  },
  {
    id : '3',
    color : PURPLE
  },
  {
    id : '4',
    color : BROWN
  },
  {
    id : '5',
    color : GREEN
  },
];
function App1() {
  const [chosenCircle, setChosenCircle] = useState(null);
  const [isHeaderShown, setIsHeaderShown] = useState(true);
  const toggleHeader = () => {
    //this.setState({isHeaderShown : ! this.state.isHeaderShown})

	  setIsHeaderShown(prev => !prev)
  } 
  const handleColorChange = (e) =>{
    //this.setState({chosenCircle : e.target.id})
    setChosenCircle(e.target.id)
  }
  useEffect(() => {
    console.log('effected')
    return () => {

    }
  }, [chosenCircle, isHeaderShown])
  return(
    <>
    {
      isHeaderShown && <Header toggleHeader={toggleHeader} color = {chosenCircle && circles[chosenCircle - 1].color} />
    }
    <button onClick={this.toggleHeader}>{isHeaderShown ? 'Hide header' : 'Show header'}</button>
    <div className="container">
          {
              circles.map(item => (
              <div
                key={item.id}
                id={item.id}
                className="circle-item"
                style={{backgroundColor : chosenCircle === item.id ? ORANGE : item.color}}
                onClick={this.handleColorChange}
               >
                {item.id}
          </div>
  
        ))
    }
  </div>
  </>
  )
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      circles: [
        {
          id : '1',
          color : RED
        },
        {
          id : '2',
          color : BLUE
        },
        {
          id : '3',
          color : PURPLE
        },
        {
          id : '4',
          color : BROWN
        },
        {
          id : '5',
          color : GREEN
        },
      ],
      chosenCircle: null,
	  user : {
		  name: 'Vardan'
	  }
    }
  };
  handleColorChange = e => {
    this.setState({chosenCircle : e.target.id})
  }
  componentDidMount(){
	  console.log('did mount');
  }
  componentDidUpdate(prevProps, prevState){
	  console.log(prevState.chosenCircle);
	
    if (this.state.chosenCircle === prevState.chosenCircle && this.state.isHeaderShown === prevState.isHeaderShown) {
      console.log('You taped on same circles');
      
    }
  }
  shouldComponentUpdate(nextProps, nextState){
	  return true;
  }
  toggleHeader = () => {
	  this.setState({isHeaderShown : ! this.state.isHeaderShown})
  } 
  render(){
	const {
		isHeaderShown, 
		circles,
		chosenCircle,
		user
	} = this.state;
    return (
		<>
			{
				isHeaderShown && <Header user={user} color = {chosenCircle && circles[chosenCircle - 1].color} />
			}
			<button onClick={this.toggleHeader}>{isHeaderShown ? 'Hide header' : 'Show header'}</button>
			<div className="container">
            {
                circles.map(item => (
                <div
                  key={item.id}
                  id={item.id}
                  className="circle-item"
                  style={{backgroundColor : chosenCircle === item.id ? ORANGE : item.color}}
                  onClick={this.handleColorChange}
             	  >
                	{item.id}
        		</div>
		
    			))
			}
		</div>
		</>
    )
  }
}
export default App1;