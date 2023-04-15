import { createContext, useState, useEffect } from 'react';

export const JobContext = createContext();

const JobContextProvider = ({ children }) => {
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

    const Values = {
        jobs, jobDetails, getAllJobs, getJobDetails
    }
    return (
        <JobContext.Provider value={Values}>
            {children}
        </JobContext.Provider>
    );
};

export default JobContextProvider;
