import Header from "./components/Header";
import {Route, Routes, useNavigate} from "react-router-dom";
import Messages from "./components/Messages";
import Configs from "./components/Configs";
import React, {useCallback, useState} from "react";
import PopupWrapper from "./components/PopupWrapper";
import PopupMessage from "./components/PopupMessage";

const App = () => {
    const [configs, setConfigs] = useState({})

    const navigate = useNavigate()

    const handleConfigs = useCallback((configsObj) => {
        setConfigs(configsObj)
    }, [])

    const goBack = () => {
        setTimeout(() => {
            navigate('..')
        }, 300)
    }

    return (
        <>
            <Header/>
            <Routes>
                <Route path='' element={<Messages configs={configs}/>}/>
                <Route path='configs' element={<Configs handleConfigs={handleConfigs}/>}/>
                <Route path=':id' element={
                    <PopupWrapper onClose={goBack}>
                        <PopupMessage/>
                    </PopupWrapper>}/>
            </Routes>
        </>
    );
}

export default App;