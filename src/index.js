import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import './index.css';
import MessagesProvider from "./contexts/messagesContext";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <MessagesProvider>
                <App/>
            </MessagesProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
