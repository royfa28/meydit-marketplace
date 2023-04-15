import React from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from './components/header-comp/Header';
import Homepage from './components/homepage-comp/Homepage';
import AccountPage from './components/account-comp/AccountPage';
import JobDetails from './components/job-comp/JobDetails';
import AddJob from './components/job-comp/AddJob';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Accountpage" element={<AccountPage />} />
                <Route path="/jobDetails/:jobID" element={<JobDetails />} />
                <Route path="/AddJob" element={<AddJob />} />
            </Routes>
        </>
    )
}

export default App