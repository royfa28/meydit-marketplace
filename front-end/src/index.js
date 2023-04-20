import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import JobContext from './context/JobContext';
import UserContext from "./context/UserContext";
import EmailContext from "./context/EmailContext";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <JobContext>
            <AuthProvider>
                <UserContext>
                    <EmailContext>
                        <App />
                    </EmailContext>
                </UserContext>
            </AuthProvider>
        </JobContext>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
