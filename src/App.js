import React, {useEffect, useState} from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import Header from "./components/Header";
import Messages from "./components/content/Messages";
import MessagesConfigs from "./components/content/MessagesConfigs";
import Footer from "./components/Footer";


function App() {


    const [selectedColor, setSelectedColor] = useState('');
    const [selectedWhatColor, setSelectedWhatColor] = useState('');
    const [allMessages, setUserMessages] = useState([]);

    useEffect(() => {
        fetch('/generated.json')
            .then(res => res.json())
            .then(res => {
                setUserMessages(res.messages);
            });
    }, [])

    return (
        <>
            <Header/>


            <Routes>

                <Route path="/" element={
                    <Messages allMessages={allMessages} selectedColor={selectedColor}
                              selectedWhatColor={selectedWhatColor}/>
                }/>

                <Route path="/messages-configs" element={
                    <MessagesConfigs setSelectedColor={setSelectedColor} setSelectedWhatColor={setSelectedWhatColor}/>
                }/>

            </Routes>

            <Footer/>

        </>
    )

}


export default App;
