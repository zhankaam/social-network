import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {initializeApp} from "./Redux/app-reducer";

ReactDOM.render( <BrowserRouter>
    <Provider store={store}>
        <App initializeApp={initializeApp} initialized={true}/>
    </Provider>
</BrowserRouter>, document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
