import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const jobCxt = createContext();
export const useMyAuthContext = () => useContext(jobCxt);

export function JobContextProvider(props) {
    const [jobs, setJobs] = useState([]);
    const [jobDetails, setJobDetails] = useState(null);

    useEffect(() => {
        getAllJobs();
    }, []);

    const getAllJobs = async () => {
        try {
            const response = await fetch('/api/jobs');
            const data = await response.json();
            setJobs(data);
        } catch (error) {
            console.error(error);
        }
    };

    const getJobDetails = async (jobId) => {
        try {
            const response = await fetch(`/api/jobDetails/${jobId}`);
            const data = await response.json();
            setJobDetails(data);
        } catch (error) {
            console.error(error);
        }
    };

    const addJob = async (jobData) => {
        try {


        } catch (err) {

        }
    }

    const Values = {
        jobs, jobDetails, getAllJobs, getJobDetails
    }
    return (
        <jobCxt.Provider value={Values}>
            {props.children}
        </jobCxt.Provider>
    );
};

export default JobContextProvider;
