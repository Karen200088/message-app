import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import Header from "./components/Header";
import Messages from "./components/content/Messages";
import MessagesConfigs from "./components/content/MessagesConfigs";
import Footer from "./components/Footer";


function App() {


    return (
        <>
            <Header/>


            <Routes>
                <Route path="/" element={<Messages/>}/>
                <Route path="/messages-configs" element={<MessagesConfigs/>}/>
            </Routes>

            <Footer/>

        </>
    )

}


export default App;
