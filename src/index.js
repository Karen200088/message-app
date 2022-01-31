import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import './styles/style.css';
import MessagesProvider from "./contexts/messagesContext";
import UserProvider from "./contexts/userNameContext";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <MessagesProvider>
                    <App/>
                </MessagesProvider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
