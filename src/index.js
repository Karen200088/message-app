import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import './styles/style.css';
import UserProvider from "./contexts/userNameContext";
import {Provider} from "react-redux";
import {store} from "./redux/store";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                    <Provider store={store}>
                        <App/>
                    </Provider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
