import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { resetWarningCache } from 'prop-types';

const jobCxt = createContext();
export const useMyJobContext = () => useContext(jobCxt);

export function JobContextProvider(props) {
    const [jobs, setJobs] = useState([]);
    const [jobDetails, setJobDetails] = useState(null);

    useEffect(() => {
        getAllJobs();
    }, []);

    const getAllJobs = async () => {
        try {
            // Get All jobs from server, map them and add user to each job data.
            const response = await axios.get('http://127.0.0.1:3333/getJobs');
            const jobsWithUser = await Promise.all(response.data.map(async (job) => {
                const userResponse = await axios.get(`http://localhost:3333/user/${job.user_id}`)
                const user = userResponse.data
                return {
                    ...job,
                    user,
                }
            }))
            // console.log(jobsWithUser);
            setJobs(jobsWithUser);
        } catch (error) {
            console.error(error);
        }
    };

    const getJobDetails = async (jobId) => {
        try {
            // Get job data from server
            const jobresponse = await axios.get(`http://127.0.0.1:3333/job-details/${jobId}`);
            const job = jobresponse.data;

            // Get user data from server
            const userResponse = await axios.get(`http://127.0.0.1:3333/user/${job.user_id}`);
            const user = userResponse.data;

            const jobsWithUser = { ...job, user }
            // console.log(jobsWithUser)
            setJobDetails(jobsWithUser);
        } catch (error) {
            console.error(error);
        }
    };

    const addJob = async (jobData) => {
        try {
            const response = await axios.post('http://127.0.0.1:3333/addJob', jobData);
            window.location.reload();

        } catch (error) {
            console.log(error);
        }
    }

    const Values = {
        jobs, jobDetails, getAllJobs, getJobDetails, addJob
    }
    return (
        <jobCxt.Provider value={Values}>
            {props.children}
        </jobCxt.Provider>
    );
};

export default JobContextProvider;
