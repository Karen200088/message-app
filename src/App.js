import {Component, useCallback, useEffect, useMemo, useState} from "react";
import Header from "./components/Header";
import {circleColors} from './helpers/constants'

const {
    RED,
    BLUE,
    PURPLE,
    GREEN,
    BROWN,
    ORANGE,
} = circleColors

const circles = [
    {
        id: '1',
        color: RED
    },
    {
        id: '2',
        color: BLUE
    },
    {
        id: '3',
        color: PURPLE
    },
    {
        id: '4',
        color: BROWN
    },
    {
        id: '5',
        color: GREEN
    },
]

const App1 = () => {
    const [chosenCircle, setChosenCircle] = useState(null)
    const [isHeaderShown, setIsHeaderShown] = useState(true)

    useEffect(() => {
        console.log('rendered')
    }, [chosenCircle])

    const chooseColor = e => {
        // this.setState({chosenCircle: e.target.id})
        if(e.target.id === chosenCircle) {
            setChosenCircle(null)
        } else {
            setChosenCircle(e.target.id)
        }
    }

    const headerToggle = useCallback(() => {
        // this.setState((prev) => ({isHeaderShown: !prev.isHeaderShown}))
        setIsHeaderShown(prev => !prev)
    }, [])

    const randomNum = useMemo(() => Math.round(Math.random() * 10), [])

    return (
        <>
            {
                isHeaderShown && <Header
                    headerToggle={headerToggle}
                    randomNum={randomNum}
                    color={circles[chosenCircle - 1]?.color}
                />
            }
            <button onClick={headerToggle}>{isHeaderShown ? 'Hide' : 'Show'} header</button>
            <div className='container'>
                {
                    circles.map(item =>
                        <div
                            key={item.id}
                            id={item.id}
                            className='circle-item'
                            style={{backgroundColor: chosenCircle === item.id ? ORANGE : item.color}}
                            onClick={chooseColor}
                        >
                            {item.id}
                        </div>
                    )
                }
            </div>
        </>
    )
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            circles: [
                {
                    id: '1',
                    color: RED
                },
                {
                    id: '2',
                    color: BLUE
                },
                {
                    id: '3',
                    color: PURPLE
                },
                {
                    id: '4',
                    color: BROWN
                },
                {
                    id: '5',
                    color: GREEN
                },
            ],
            chosenCircle: null,
            isHeaderShown: true,
        }
    }

    componentDidMount() {
        console.log('did mount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        // return nextState.chosenCircle !== '3';
        return true
    }

    componentDidUpdate(prevProps, prevState) {
        // if(this.state.chosenCircle === prevState.chosenCircle) {
        //     console.log('You`ve clicked on the same circle!!')
        // }
    }

    chooseColor = e => {
        this.setState({chosenCircle: e.target.id})
    }

    headerToggle = () => {
        this.setState((prev) => ({isHeaderShown: !prev.isHeaderShown}))
    }

    render() {
        const {circles, chosenCircle, isHeaderShown} = this.state

        return (
            <>
                {
                    isHeaderShown && <Header color={circles[chosenCircle - 1]?.color} />
                }
                <button onClick={this.headerToggle}>{isHeaderShown ? 'Hide' : 'Show'} header</button>
                <div className='container'>
                    {
                        circles.map(item =>
                            <div
                                key={item.id}
                                id={item.id}
                                className='circle-item'
                                style={{backgroundColor: chosenCircle === item.id ? ORANGE : item.color}}
                                onClick={this.chooseColor}
                            >
                                {item.id}
                            </div>
                        )
                    }
                </div>
            </>
        )
    }
}

export default App1;
