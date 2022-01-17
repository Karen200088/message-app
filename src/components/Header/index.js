import {Component, memo, useEffect} from "react";

const Header1 = ({color, randomNum, headerToggle}) => {
    useEffect(() => {
        document.addEventListener('click', handleListener)
        return () => {
            document.removeEventListener('click', handleListener)
        }
    }, [])

    useEffect(() => {
        console.log('changed function')
    },[headerToggle])

    const handleListener = e => {
        if(e.target.localName === 'header') {
            console.log('You`ve clicked on the header ')
        }
    }

    return (
        <header
            className='header'
            style={{backgroundColor: color}}
        >
            <p>Header</p>
            <p>{randomNum}</p>
            <div><button onClick={headerToggle}>headerToggle</button></div>
        </header>
    )
}

class Header extends Component{
    componentDidMount() {
        document.addEventListener('click', this.handleListener)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleListener)
    }

    handleListener = e => {
        if(e.target.localName === 'header') {
            console.log('You`ve clicked on the header ')
        }
    }

    render() {
        const {color} = this.props

        return (
            <header
                className='header'
                style={{backgroundColor: color}}
            >
                <p>Header</p>
            </header>
        )
    }
}

export default memo(Header1)
